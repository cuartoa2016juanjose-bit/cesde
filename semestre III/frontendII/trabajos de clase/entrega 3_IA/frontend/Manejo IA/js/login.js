/* ═══════════════════════════════════════════════════════════════════
   LOGIN.JS — Autenticación con localStorage
   Depende de: app.js (lsGetAll, lsCreate, esc)
   Sin async/await ni try/catch — funciones básicas con if/else
═══════════════════════════════════════════════════════════════════ */

/* ── Tabs: cambiar entre Login y Registro ─────────────────────── */
function showTab(tab) {
  var esLogin = tab === 'login';

  if (esLogin) {
    document.getElementById('formLogin').style.display    = 'block';
    document.getElementById('formRegister').style.display = 'none';
  } else {
    document.getElementById('formLogin').style.display    = 'none';
    document.getElementById('formRegister').style.display = 'block';
  }

  document.getElementById('tabLogin').classList.toggle('active',    esLogin);
  document.getElementById('tabRegister').classList.toggle('active', !esLogin);
  document.getElementById('loginErr').classList.add('d-none');

  var objetivo = esLogin
    ? document.getElementById('formLogin')
    : document.getElementById('formRegister');

  gsap.fromTo(objetivo,
    { y: 16, opacity: 0 },
    { y: 0,  opacity: 1, duration: 0.35, ease: 'power2.out', overwrite: true }
  );
}

/* ── Login ──────────────────────────────────────────────────────── */
function login() {
  var email = document.getElementById('lEmail').value.trim().toLowerCase();
  var pass  = document.getElementById('lPass').value;

  document.getElementById('loginErr').classList.add('d-none');

  // Validar que los campos no estén vacíos
  if (!email || !pass) {
    mostrarMensaje('Ingresa tu correo y contraseña.', 'danger');
    return;
  }

  // Obtener usuarios del localStorage
  var usuarios = lsGetAll('usuarios');

  // Buscar usuario que coincida con email y contraseña
  var usuarioEncontrado = null;
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email.toLowerCase() === email && usuarios[i].password === pass) {
      usuarioEncontrado = usuarios[i];
      break;
    }
  }

  // Si no existe, mostrar error
  if (usuarioEncontrado === null) {
    mostrarMensaje('Correo o contraseña incorrectos.', 'danger');
    return;
  }

  // Guardar datos de sesión en sessionStorage
  var datosSesion = {
    id:     usuarioEncontrado.id,
    nombre: usuarioEncontrado.nombre,
    email:  usuarioEncontrado.email,
    rol:    usuarioEncontrado.rol
  };
  sessionStorage.setItem('sessionUser', JSON.stringify(datosSesion));

  // Mostrar mensaje de bienvenida y redirigir según rol
  mostrarMensaje('¡Bienvenido, ' + usuarioEncontrado.nombre + '! Redirigiendo...', 'success');

  setTimeout(function() {
    if (usuarioEncontrado.rol === 'Admin') {
      window.location.href = 'dashboard.html';
    } else {
      window.location.href = 'cliente.html';
    }
  }, 900);
}

/* ── Registro ───────────────────────────────────────────────────── */
function register() {
  var nombre   = document.getElementById('rNombre').value.trim();
  var email    = document.getElementById('rCorreo').value.trim().toLowerCase();
  var telefono = document.getElementById('rTelefono').value.trim();
  var pass     = document.getElementById('rPass').value;
  var pass2    = document.getElementById('rPass2').value;

  // Validar campos obligatorios
  if (!nombre) {
    mostrarMensaje('El nombre es obligatorio.', 'danger');
    return;
  }
  if (!email) {
    mostrarMensaje('El correo es obligatorio.', 'danger');
    return;
  }
  if (!pass) {
    mostrarMensaje('La contraseña es obligatoria.', 'danger');
    return;
  }

  // Validar contraseña: mínimo 8 chars, 1 mayúscula, 1 número, 1 especial
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
  if (!passwordRegex.test(pass)) {
    mostrarMensaje('La contraseña debe tener 8–15 caracteres, una mayúscula, un número y un carácter especial ($@!%*?&).', 'warning');
    return;
  }

  // Validar que las contraseñas coincidan
  if (pass !== pass2) {
    mostrarMensaje('Las contraseñas no coinciden.', 'danger');
    return;
  }

  // Obtener lista de usuarios y verificar si el correo ya existe
  var usuarios = lsGetAll('usuarios');
  var correoExiste = false;
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email.toLowerCase() === email) {
      correoExiste = true;
      break;
    }
  }

  if (correoExiste) {
    mostrarMensaje('Ese correo ya está registrado. Intenta iniciar sesión.', 'danger');
    return;
  }

  // Crear el usuario con rol "Cliente" por defecto (no se puede elegir rol en registro)
  lsCreate('usuarios', {
    nombre:   nombre,
    email:    email,
    password: pass,
    telefono: telefono,
    rol:      'Cliente'
  });

  mostrarMensaje('¡Cuenta creada exitosamente! Ya puedes iniciar sesión.', 'success');

  // Limpiar campos del formulario
  document.getElementById('rNombre').value   = '';
  document.getElementById('rCorreo').value   = '';
  document.getElementById('rTelefono').value = '';
  document.getElementById('rPass').value     = '';
  document.getElementById('rPass2').value    = '';

  // Redirigir al tab de login después de 1.8 segundos
  setTimeout(function() {
    showTab('login');
  }, 1800);
}

/* ── Mostrar/ocultar contraseña ─────────────────────────────────── */
function togglePass(inputId, iconEl) {
  var input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    iconEl.classList.remove('bi-eye');
    iconEl.classList.add('bi-eye-slash');
  } else {
    input.type = 'password';
    iconEl.classList.remove('bi-eye-slash');
    iconEl.classList.add('bi-eye');
  }
}

/* ── Mostrar mensaje de error o éxito ───────────────────────────── */
function mostrarMensaje(msg, tipo) {
  var el = document.getElementById('loginErr');
  el.className = 'alert alert-' + tipo + ' py-2 small';
  el.textContent = msg;
  el.classList.remove('d-none');
  gsap.from(el, { y: -8, opacity: 0, duration: 0.3, ease: 'power2.out' });
}

/* ── Presionar Enter para enviar el formulario ──────────────────── */
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') {
    return;
  }
  var loginVisible = document.getElementById('formLogin').style.display !== 'none';
  if (loginVisible) {
    login();
  } else {
    register();
  }
});





/* ── Animación inicial de la tarjeta ────────────────────────────── */
gsap.registerPlugin(ScrollTrigger);
gsap.from('#loginCard', { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' });
