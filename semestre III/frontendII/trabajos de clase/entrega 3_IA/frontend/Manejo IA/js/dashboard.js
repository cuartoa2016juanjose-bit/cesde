/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD.JS — CRUD completo con localStorage
   Depende de: app.js (ENTITIES, lsGetAll, lsCreate, lsUpdate,
                        lsDelete, esc)
   Sin async/await ni try/catch — funciones básicas con if/else
═══════════════════════════════════════════════════════════════════ */

/* ── Variables globales ─────────────────────────────────────────── */
var entidadActual   = null;
var editandoId      = null;
var itemsActuales   = [];
var bsModal         = null;
var bsModalEliminar = null;
var idParaEliminar  = null;
var entidadEliminar = null;
var sessionUser     = null;

/* ── Verificar sesión al cargar la página ───────────────────────── */
function verificarSesion() {
  var raw = sessionStorage.getItem('sessionUser');
  if (!raw) {
    window.location.href = 'index.html';
    return;
  }
  sessionUser = JSON.parse(raw);
  document.getElementById('hdrName').textContent = sessionUser.nombre;

  var rolBadge = document.getElementById('hdrRol');
  if (rolBadge) {
    rolBadge.textContent = sessionUser.rol;
    if (sessionUser.rol === 'Admin') {
      rolBadge.className = 'badge bg-danger ms-2';
    } else {
      rolBadge.className = 'badge bg-primary ms-2';
    }
  }

  iniciarDashboard();

  // Cargar la primera entidad disponible según el rol
  var claves = Object.keys(ENTITIES);
  var primeraClave = null;
  for (var i = 0; i < claves.length; i++) {
    var cfg = ENTITIES[claves[i]];
    if (cfg.adminOnly && sessionUser.rol !== 'Admin') {
      continue;
    }
    primeraClave = claves[i];
    break;
  }
  if (primeraClave !== null) {
    cargarEntidad(primeraClave);
  }
}

// Ejecutar verificación al cargar
verificarSesion();

/* ── Cerrar sesión ──────────────────────────────────────────────── */
function logout() {
  sessionStorage.removeItem('sessionUser');
  window.location.href = 'index.html';
}

/* ═══════════════════════════════════════════════════════════════════
   INICIALIZACIÓN DEL DASHBOARD
═══════════════════════════════════════════════════════════════════ */
function iniciarDashboard() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.app-navbar', { y: -40, opacity: 0, duration: 0.5, ease: 'power3.out' });
  construirSidebar();
  gsap.from('.nav-item-link', { x: -20, duration: 0.4, stagger: 0.07, delay: 0.15, ease: 'power2.out' });
  gsap.from('.app-footer',    { y: 20,  opacity: 0, duration: 0.5, delay: 0.3, ease: 'power2.out' });
}

/* ═══════════════════════════════════════════════════════════════════
   CONSTRUIR SIDEBAR SEGÚN ROL
═══════════════════════════════════════════════════════════════════ */
function construirSidebar() {
  var esAdmin = sessionUser && sessionUser.rol === 'Admin';
  var html = '';

  // Si es Cliente, mostrar solo su perfil y solicitudes
  if (!esAdmin) {
    html = '<div class="sidebar-section">Panel Cliente</div>';
    html += '<a class="nav-item-link" id="nav-miPerfil" href="#" onclick="cargarVistaCliente(\'miPerfil\'); return false;">';
    html += '<i class="bi bi-person-circle"></i>Mi Perfil</a>';
    html += '<a class="nav-item-link" id="nav-solicitudes" href="#" onclick="cargarVistaCliente(\'solicitudes\'); return false;">';
    html += '<i class="bi bi-bag-check"></i>Mis Solicitudes</a>';
    html += '<a class="nav-item-link" id="nav-proyectos" href="#" onclick="cargarVistaCliente(\'proyectos\'); return false;">';
    html += '<i class="bi bi-folder2-open"></i>Proyectos</a>';
    html += '<a class="nav-item-link" id="nav-participantes" href="#" onclick="cargarVistaCliente(\'participantes\'); return false;">';
    html += '<i class="bi bi-people"></i>Participantes</a>';
    html += '<a class="nav-item-link" id="nav-recursos" href="#" onclick="cargarVistaCliente(\'recursos\'); return false;">';
    html += '<i class="bi bi-boxes"></i>Recursos</a>';
    html += '<a class="nav-item-link" id="nav-mantenimientos" href="#" onclick="cargarVistaCliente(\'mantenimientos\'); return false;">';
    html += '<i class="bi bi-tools"></i>Mantenimiento</a>';
    html += '<a class="nav-item-link" id="nav-patrocinios" href="#" onclick="cargarVistaCliente(\'patrocinios\'); return false;">';
    html += '<i class="bi bi-trophy"></i>Patrocinios</a>';
    document.getElementById('sidebarItems').innerHTML = html;
    return;
  }

  // Admin: mostrar todas las entidades
  html = '<div class="sidebar-section">Administración</div>';
  var claves = Object.keys(ENTITIES);
  for (var i = 0; i < claves.length; i++) {
    var key = claves[i];
    var cfg = ENTITIES[key];
    if (cfg.adminOnly && !esAdmin) {
      continue;
    }
    html += '<a class="nav-item-link" id="nav-' + key + '" href="#" onclick="cargarEntidad(\'' + key + '\'); return false;">';
    html += '<i class="bi ' + cfg.icon + '"></i>' + cfg.label + '</a>';
  }
  document.getElementById('sidebarItems').innerHTML = html;
}

/* ═══════════════════════════════════════════════════════════════════
   VISTA CLIENTE
═══════════════════════════════════════════════════════════════════ */
function cargarVistaCliente(vista) {
  // Quitar clase activa de todos los links
  var links = document.querySelectorAll('.nav-item-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  var navActivo = document.getElementById('nav-' + vista);
  if (navActivo) {
    navActivo.classList.add('active');
  }
  entidadActual = null;

  if (vista === 'miPerfil') {
    renderizarMiPerfil();
  } else if (vista === 'solicitudes') {
    renderizarSolicitudes();
  } else {
    renderizarSoloLecturaCliente(vista);
  }
}

/* ── Mi Perfil ───────────────────────────────────────────────────── */
function renderizarMiPerfil() {
  var u = sessionUser;
  var usuarios = lsGetAll('usuarios');
  var datosUsuario = null;
  for (var i = 0; i < usuarios.length; i++) {
    if (String(usuarios[i].id) === String(u.id)) {
      datosUsuario = usuarios[i];
      break;
    }
  }
  if (datosUsuario === null) {
    datosUsuario = u;
  }

  var html = '';
  html += '<div class="page-head-row mb-4" id="pageHead">';
  html += '  <div>';
  html += '    <div class="page-title"><i class="bi bi-person-circle me-2 text-primary"></i>Mi Perfil</div>';
  html += '    <div class="page-count">Información personal</div>';
  html += '  </div>';
  html += '</div>';
  html += '<div class="card content-card p-4" style="max-width:520px">';
  html += '  <div class="mb-3">';
  html += '    <label class="form-label fw-semibold small">Nombre</label>';
  html += '    <input type="text" class="form-control" id="pNombre" value="' + esc(datosUsuario.nombre) + '">';
  html += '  </div>';
  html += '  <div class="mb-3">';
  html += '    <label class="form-label fw-semibold small">Correo</label>';
  html += '    <input type="email" class="form-control" id="pEmail" value="' + esc(datosUsuario.email) + '">';
  html += '  </div>';
  html += '  <div class="mb-3">';
  html += '    <label class="form-label fw-semibold small">Teléfono</label>';
  html += '    <input type="text" class="form-control" id="pTelefono" value="' + esc(datosUsuario.telefono || '') + '">';
  html += '  </div>';
  html += '  <div class="mb-4">';
  html += '    <label class="form-label fw-semibold small">Nueva Contraseña <span class="text-muted">(dejar vacío para no cambiar)</span></label>';
  html += '    <input type="password" class="form-control" id="pPass" placeholder="••••••••">';
  html += '  </div>';
  html += '  <button class="btn btn-primary fw-semibold" onclick="guardarPerfil()">';
  html += '    <i class="bi bi-save me-2"></i>Guardar cambios';
  html += '  </button>';
  html += '</div>';

  document.getElementById('mainContent').innerHTML = html;
  gsap.from('#pageHead', { y: -14, opacity: 0, duration: 0.4, ease: 'power2.out' });
  gsap.from('.content-card', { y: 20, opacity: 0, duration: 0.45, ease: 'power3.out' });
}

function guardarPerfil() {
  var nombre   = document.getElementById('pNombre').value.trim();
  var email    = document.getElementById('pEmail').value.trim().toLowerCase();
  var telefono = document.getElementById('pTelefono').value.trim();
  var pass     = document.getElementById('pPass').value;

  if (!nombre || !email) {
    mostrarToast('Nombre y correo son obligatorios.', 'danger');
    return;
  }

  var actualizaciones = { nombre: nombre, email: email, telefono: telefono };
  if (pass) {
    actualizaciones.password = pass;
  }

  var resultado = lsUpdate('usuarios', sessionUser.id, actualizaciones);
  if (resultado !== null) {
    sessionUser.nombre = nombre;
    sessionUser.email  = email;
    sessionStorage.setItem('sessionUser', JSON.stringify(sessionUser));
    document.getElementById('hdrName').textContent = nombre;
    mostrarToast('Perfil actualizado correctamente.', 'success');
  }
}

/* ── Vista solo lectura para cliente (Proyectos, Participantes, etc) ── */
function renderizarSoloLecturaCliente(key) {
  var cfg   = ENTITIES[key];
  var items = lsGetAll(key);

  var html = '';
  html += '<div class="page-head-row mb-3" id="pageHead">';
  html += '  <div>';
  html += '    <div class="page-title"><i class="bi ' + cfg.icon + ' me-2 text-primary"></i>' + cfg.label + '</div>';
  html += '    <div class="page-count">' + items.length + ' registro' + (items.length !== 1 ? 's' : '') + '</div>';
  html += '  </div>';
  html += '</div>';
  html += '<div class="card content-card" id="dataCard">';

  if (items.length === 0) {
    html += '<div class="state-box"><i class="bi bi-inbox"></i>No hay registros disponibles.</div>';
  } else {
    var thead = '';
    for (var h = 0; h < cfg.cols.length; h++) {
      thead += '<th>' + cfg.cols[h].h + '</th>';
    }
    html += '<div class="table-responsive"><table class="table app-table mb-0">';
    html += '<thead><tr>' + thead + '</tr></thead><tbody>';
    for (var i = 0; i < items.length; i++) {
      html += '<tr class="tbl-row">';
      for (var c = 0; c < cfg.cols.length; c++) {
        html += '<td>' + formatearCelda(items[i][cfg.cols[c].k], cfg.cols[c]) + '</td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table></div>';
  }
  html += '</div>';

  document.getElementById('mainContent').innerHTML = html;
  gsap.from('#pageHead', { y: -14, opacity: 0, duration: 0.4, ease: 'power2.out' });
  gsap.fromTo('.tbl-row', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' });
}

/* ── Solicitudes del cliente ─────────────────────────────────────── */
function renderizarSolicitudes() {
  var todasSolicitudes = lsGetAll('solicitudes');
  var misSolicitudes = [];
  for (var i = 0; i < todasSolicitudes.length; i++) {
    if (String(todasSolicitudes[i].clienteId) === String(sessionUser.id)) {
      misSolicitudes.push(todasSolicitudes[i]);
    }
  }

  var html = '';
  html += '<div class="page-head-row mb-3" id="pageHead">';
  html += '  <div>';
  html += '    <div class="page-title"><i class="bi bi-bag-check me-2 text-primary"></i>Mis Solicitudes</div>';
  html += '    <div class="page-count" id="pageCount">' + misSolicitudes.length + ' registro' + (misSolicitudes.length !== 1 ? 's' : '') + '</div>';
  html += '  </div>';
  html += '  <button class="btn btn-primary btn-sm fw-semibold" onclick="abrirCrearSolicitud()">';
  html += '    <i class="bi bi-plus-lg me-1"></i>Nueva Solicitud';
  html += '  </button>';
  html += '</div>';
  html += '<div class="card content-card" id="dataCard">';

  if (misSolicitudes.length === 0) {
    html += '<div class="state-box"><i class="bi bi-inbox"></i>No tienes solicitudes aún. Crea una nueva.</div>';
  } else {
    html += '<div class="table-responsive"><table class="table app-table mb-0">';
    html += '<thead><tr><th>ID</th><th>Descripción</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr></thead>';
    html += '<tbody>';
    for (var j = 0; j < misSolicitudes.length; j++) {
      var s = misSolicitudes[j];
      html += '<tr class="tbl-row">';
      html += '  <td>' + esc(s.id) + '</td>';
      html += '  <td>' + esc(s.descripcion) + '</td>';
      html += '  <td>' + formatearCelda(s.estado, { badge: true }) + '</td>';
      html += '  <td>' + esc(s.fecha || '—') + '</td>';
      html += '  <td>';
      html += '    <div class="d-flex gap-2">';
      html += '      <button class="btn btn-outline-primary btn-action" onclick="editarSolicitud(' + s.id + ')"><i class="bi bi-pencil"></i></button>';
      html += '      <button class="btn btn-outline-danger btn-action" onclick="confirmarEliminar(' + s.id + ', \'__solicitudes__\')"><i class="bi bi-trash"></i></button>';
      html += '    </div>';
      html += '  </td>';
      html += '</tr>';
    }
    html += '</tbody></table></div>';
  }
  html += '</div>';

  document.getElementById('mainContent').innerHTML = html;
  gsap.from('#pageHead', { y: -14, opacity: 0, duration: 0.4, ease: 'power2.out' });
  gsap.fromTo('.tbl-row', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' });
}

function abrirCrearSolicitud() {
  document.getElementById('modalTitle').textContent = 'Nueva Solicitud';
  document.getElementById('modalBody').innerHTML =
    '<div class="mb-3 form-field-item">' +
    '  <label class="form-label fw-semibold small">Descripción <span class="text-danger">*</span></label>' +
    '  <textarea class="form-control" id="f-desc" rows="3" placeholder="Describe tu solicitud..."></textarea>' +
    '</div>' +
    '<div class="mb-3 form-field-item">' +
    '  <label class="form-label fw-semibold small">Estado</label>' +
    '  <select class="form-select" id="f-estado">' +
    '    <option value="Pendiente">Pendiente</option>' +
    '    <option value="En revisión">En revisión</option>' +
    '  </select>' +
    '</div>';

  editandoId    = null;
  entidadActual = '__solicitudes__';
  gsap.fromTo('.form-field-item', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, stagger: 0.06, ease: 'power2.out' });
  obtenerModal().show();
}

function editarSolicitud(id) {
  var todas = lsGetAll('solicitudes');
  var s = null;
  for (var i = 0; i < todas.length; i++) {
    if (String(todas[i].id) === String(id)) {
      s = todas[i];
      break;
    }
  }
  if (s === null) {
    return;
  }

  document.getElementById('modalTitle').textContent = 'Editar Solicitud #' + id;

  var opcionesEstado = ['Pendiente', 'En revisión', 'Aprobada', 'Rechazada'];
  var optsHtml = '';
  for (var j = 0; j < opcionesEstado.length; j++) {
    var seleccionado = s.estado === opcionesEstado[j] ? ' selected' : '';
    optsHtml += '<option value="' + opcionesEstado[j] + '"' + seleccionado + '>' + opcionesEstado[j] + '</option>';
  }

  document.getElementById('modalBody').innerHTML =
    '<div class="mb-3 form-field-item">' +
    '  <label class="form-label fw-semibold small">Descripción <span class="text-danger">*</span></label>' +
    '  <textarea class="form-control" id="f-desc" rows="3">' + esc(s.descripcion) + '</textarea>' +
    '</div>' +
    '<div class="mb-3 form-field-item">' +
    '  <label class="form-label fw-semibold small">Estado</label>' +
    '  <select class="form-select" id="f-estado">' + optsHtml + '</select>' +
    '</div>';

  editandoId    = id;
  entidadActual = '__solicitudes__';
  gsap.fromTo('.form-field-item', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, stagger: 0.06, ease: 'power2.out' });
  obtenerModal().show();
}

/* ═══════════════════════════════════════════════════════════════════
   CARGAR ENTIDAD (ADMIN) — CRUD
═══════════════════════════════════════════════════════════════════ */
function cargarEntidad(key) {
  // Verificar permiso de administrador
  if (ENTITIES[key] && ENTITIES[key].adminOnly && sessionUser && sessionUser.rol !== 'Admin') {
    mostrarToast('Acceso denegado.', 'danger');
    return;
  }

  entidadActual = key;
  var cfg = ENTITIES[key];

  // Marcar link activo en sidebar
  var links = document.querySelectorAll('.nav-item-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  var navLink = document.getElementById('nav-' + key);
  if (navLink) {
    navLink.classList.add('active');
  }

  ScrollTrigger.getAll().forEach(function(t) { t.kill(); });

  var html = '';
  html += '<div class="page-head-row mb-3" id="pageHead">';
  html += '  <div>';
  html += '    <div class="page-title"><i class="bi ' + cfg.icon + ' me-2 text-primary"></i>' + cfg.label + '</div>';
  html += '    <div class="page-count" id="pageCount"></div>';
  html += '  </div>';
  html += '  <button class="btn btn-primary btn-sm fw-semibold" onclick="abrirCrear()">';
  html += '    <i class="bi bi-plus-lg me-1"></i>Nuevo';
  html += '  </button>';
  html += '</div>';
  html += '<div class="search-bar-wrap mb-3">';
  html += '  <div class="input-group input-group-sm">';
  html += '    <span class="input-group-text search-addon"><i class="bi bi-search"></i></span>';
  html += '    <input type="text" class="form-control search-input" id="searchInput" placeholder="Buscar en ' + cfg.label + '..." oninput="filtrarTabla(this.value)">';
  html += '    <button class="btn btn-outline-secondary" onclick="cargarEntidad(\'' + key + '\')" title="Recargar">';
  html += '      <i class="bi bi-arrow-clockwise"></i>';
  html += '    </button>';
  html += '  </div>';
  html += '</div>';
  html += '<div class="card content-card" id="dataCard">';
  html += '  <div class="state-box">';
  html += '    <div class="d-flex justify-content-center mb-3"><div class="spin-ring"></div></div>';
  html += '    Cargando datos...';
  html += '  </div>';
  html += '</div>';

  document.getElementById('mainContent').innerHTML = html;
  gsap.from('#pageHead', { y: -14, opacity: 0, duration: 0.4, ease: 'power2.out' });

  // Pequeño delay para mostrar el spinner (mejor experiencia visual)
  setTimeout(function() {
    itemsActuales = lsGetAll(key);
    renderizarTabla(key, itemsActuales);
  }, 180);
}

/* ═══════════════════════════════════════════════════════════════════
   RENDERIZAR TABLA
═══════════════════════════════════════════════════════════════════ */
function renderizarTabla(key, items) {
  var cfg = ENTITIES[key];
  var conteo = items.length + ' registro' + (items.length !== 1 ? 's' : '');
  document.getElementById('pageCount').textContent = conteo;

  if (items.length === 0) {
    document.getElementById('dataCard').innerHTML =
      '<div class="state-box"><i class="bi bi-inbox"></i>Sin registros. Usa <strong>Nuevo</strong> para agregar.</div>';
    gsap.from('#dataCard', { y: 20, opacity: 0, duration: 0.4, ease: 'power2.out' });
    return;
  }

  // Construir encabezados
  var thead = '';
  for (var i = 0; i < cfg.cols.length; i++) {
    thead += '<th>' + cfg.cols[i].h + '</th>';
  }
  thead += '<th>Acciones</th>';

  // Construir filas
  var tbody = '';
  for (var j = 0; j < items.length; j++) {
    var item = items[j];
    tbody += '<tr class="tbl-row">';
    for (var k = 0; k < cfg.cols.length; k++) {
      tbody += '<td>' + formatearCelda(item[cfg.cols[k].k], cfg.cols[k]) + '</td>';
    }
    tbody += '<td>';
    tbody += '  <div class="d-flex gap-2">';
    tbody += '    <button class="btn btn-outline-primary btn-action" title="Editar" onclick="abrirEditar(' + j + ')"><i class="bi bi-pencil"></i></button>';
    tbody += '    <button class="btn btn-outline-danger btn-action" title="Eliminar" onclick="confirmarEliminar(\'' + esc(String(item.id)) + '\', \'' + key + '\')"><i class="bi bi-trash"></i></button>';
    tbody += '  </div>';
    tbody += '</td>';
    tbody += '</tr>';
  }

  document.getElementById('dataCard').innerHTML =
    '<div class="table-responsive">' +
    '  <table class="table app-table mb-0">' +
    '    <thead><tr>' + thead + '</tr></thead>' +
    '    <tbody>' + tbody + '</tbody>' +
    '  </table>' +
    '</div>';

  gsap.from('#dataCard', { y: 24, opacity: 0, duration: 0.45, ease: 'power3.out' });
  gsap.fromTo('.tbl-row', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, delay: 0.1, ease: 'power2.out' });
}

/* ── Formatear celda ─────────────────────────────────────────────── */
function formatearCelda(val, col) {
  if (val === null || val === undefined || val === '') {
    return '<span class="text-muted small">—</span>';
  }
  var s = String(val);
  if (!col.badge) {
    return esc(s);
  }
  var v = s.toLowerCase();
  var cls = 'badge-gray';
  if (v.indexOf('activ') !== -1)    { cls = 'badge-green'; }
  else if (v.indexOf('inactiv') !== -1)  { cls = 'badge-red';  }
  else if (v.indexOf('pendient') !== -1) { cls = 'badge-blue'; }
  else if (v.indexOf('complet') !== -1)  { cls = 'badge-green';}
  else if (v.indexOf('rechaz') !== -1)   { cls = 'badge-red';  }
  else if (v.indexOf('admin') !== -1)    { cls = 'badge-red';  }
  else if (v.indexOf('cliente') !== -1)  { cls = 'badge-blue'; }
  return '<span class="status-badge ' + cls + '">' + esc(s) + '</span>';
}

/* ═══════════════════════════════════════════════════════════════════
   MODAL — CREAR / EDITAR
═══════════════════════════════════════════════════════════════════ */
function abrirCrear() {
  editandoId = null;
  var cfg = ENTITIES[entidadActual];
  document.getElementById('modalTitle').textContent = 'Nuevo — ' + cfg.label;
  construirFormulario(cfg.fields, {}, false);
  obtenerModal().show();
}

function abrirEditar(idx) {
  var item = itemsActuales[idx];
  editandoId = item.id;
  var cfg = ENTITIES[entidadActual];
  document.getElementById('modalTitle').textContent = 'Editar — #' + esc(String(item.id));
  construirFormulario(cfg.fields, item, true);
  obtenerModal().show();
}

function obtenerModal() {
  if (!bsModal) {
    bsModal = new bootstrap.Modal(document.getElementById('crudModal'));
  }
  return bsModal;
}

function construirFormulario(fields, data, esEdicion) {
  var html = '';
  for (var i = 0; i < fields.length; i++) {
    var f = fields[i];
    if (esEdicion && f.createOnly) {
      continue;
    }
    var v   = data[f.k] !== null && data[f.k] !== undefined ? String(data[f.k]) : '';
    var req = f.req ? '<span class="text-danger">*</span>' : '';
    var inp = '';

    if (f.type === 'textarea') {
      inp = '<textarea class="form-control" id="f-' + f.k + '" rows="3">' + esc(v) + '</textarea>';
    } else if (f.type === 'select') {
      var opts = '';
      for (var j = 0; j < f.options.length; j++) {
        var seleccionado = v === f.options[j] ? ' selected' : '';
        opts += '<option value="' + esc(f.options[j]) + '"' + seleccionado + '>' + esc(f.options[j]) + '</option>';
      }
      inp = '<select class="form-select" id="f-' + f.k + '">' + opts + '</select>';
    } else if (f.decimal) {
      var valDecimal = v ? parseFloat(v).toFixed(2) : '';
      inp = '<input type="number" step="0.01" min="0" class="form-control" id="f-' + f.k + '" value="' + esc(valDecimal) + '" onblur="if(this.value) this.value=parseFloat(this.value).toFixed(2)">';
    } else {
      var tipo = f.type || 'text';
      inp = '<input type="' + tipo + '" class="form-control" id="f-' + f.k + '" value="' + esc(v) + '">';
    }

    html += '<div class="mb-3 form-field-item">';
    html += '  <label class="form-label fw-semibold small">' + esc(f.l) + ' ' + req + '</label>';
    html += '  ' + inp;
    html += '</div>';
  }
  document.getElementById('modalBody').innerHTML = html;

  gsap.fromTo('.form-field-item',
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.25, stagger: 0.06, delay: 0.05, ease: 'power2.out' }
  );
}

/* ── Guardar registro (crear o editar) ──────────────────────────── */
function guardarRegistro() {
  // Caso especial: solicitudes del cliente
  if (entidadActual === '__solicitudes__') {
    var desc   = document.getElementById('f-desc').value.trim();
    var estado = document.getElementById('f-estado').value;

    if (!desc) {
      mostrarToast('La descripción es obligatoria.', 'danger');
      return;
    }

    if (editandoId) {
      lsUpdate('solicitudes', editandoId, { descripcion: desc, estado: estado });
      mostrarToast('Solicitud actualizada.', 'success');
    } else {
      var fechaHoy = new Date().toLocaleDateString('es-CO');
      lsCreate('solicitudes', {
        descripcion: desc,
        estado:      estado,
        fecha:       fechaHoy,
        clienteId:   sessionUser.id
      });
      mostrarToast('Solicitud creada correctamente.', 'success');
    }
    obtenerModal().hide();
    renderizarSolicitudes();
    return;
  }

  // CRUD normal de entidades admin
  var cfg      = ENTITIES[entidadActual];
  var esEdicion = editandoId !== null;
  var datos     = {};
  var primerError = null;
  var cantErrores = 0;

  for (var i = 0; i < cfg.fields.length; i++) {
    var f = cfg.fields[i];
    if (esEdicion && f.createOnly) {
      continue;
    }
    var el = document.getElementById('f-' + f.k);
    if (!el) {
      continue;
    }
    var v = el.value.trim();
    if (f.req && !v) {
      el.classList.add('is-invalid');
      if (primerError === null) {
        primerError = el;
      }
      cantErrores++;
    } else {
      el.classList.remove('is-invalid');
      datos[f.k] = v;
    }
  }

  if (cantErrores > 0) {
    var txt = cantErrores + ' campo' + (cantErrores > 1 ? 's' : '') + ' obligatorio' + (cantErrores > 1 ? 's' : '') + ' sin completar.';
    mostrarToast(txt, 'danger');
    if (primerError) {
      primerError.focus();
    }
    return;
  }

  // Mostrar spinner en botón
  var btn = document.getElementById('btnSave');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Guardando...';

  setTimeout(function() {
    if (esEdicion) {
      lsUpdate(entidadActual, editandoId, datos);
      mostrarToast('Registro actualizado correctamente.', 'success');
    } else {
      lsCreate(entidadActual, datos);
      mostrarToast('Registro creado correctamente.', 'success');
    }
    obtenerModal().hide();
    cargarEntidad(entidadActual);
    btn.disabled = false;
    btn.innerHTML = '<i class="bi bi-save me-1"></i>Guardar';
  }, 250);
}

/* ── Confirmar eliminación ───────────────────────────────────────── */
function confirmarEliminar(id, entityKey) {
  idParaEliminar  = id;
  entidadEliminar = entityKey || entidadActual;
  document.getElementById('deleteMsg').textContent =
    'El registro con ID "' + id + '" será eliminado permanentemente.';

  if (!bsModalEliminar) {
    bsModalEliminar = new bootstrap.Modal(document.getElementById('deleteModal'));
    document.getElementById('btnConfirmDelete').addEventListener('click', ejecutarEliminar);
  }
  bsModalEliminar.show();
}

function ejecutarEliminar() {
  var id        = idParaEliminar;
  var entityKey = entidadEliminar;

  var btn = document.getElementById('btnConfirmDelete');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Eliminando...';

  setTimeout(function() {
    var eliminado = lsDelete(entityKey, id);
    if (eliminado) {
      bsModalEliminar.hide();
      mostrarToast('Registro eliminado correctamente.', 'success');

      if (entityKey === '__solicitudes__') {
        renderizarSolicitudes();
      } else {
        cargarEntidad(entityKey);
      }
    }
    btn.disabled = false;
    btn.innerHTML = '<i class="bi bi-trash me-1"></i>Eliminar';
  }, 250);
}

/* ── Filtrar tabla por búsqueda ──────────────────────────────────── */
function filtrarTabla(query) {
  var q = query.toLowerCase().trim();
  if (!q) {
    renderizarTabla(entidadActual, itemsActuales);
    return;
  }
  var filtrados = [];
  for (var i = 0; i < itemsActuales.length; i++) {
    var item = itemsActuales[i];
    var valores = Object.values(item);
    var encontrado = false;
    for (var j = 0; j < valores.length; j++) {
      if (valores[j] !== null && String(valores[j]).toLowerCase().indexOf(q) !== -1) {
        encontrado = true;
        break;
      }
    }
    if (encontrado) {
      filtrados.push(item);
    }
  }
  renderizarTabla(entidadActual, filtrados);

  var count = document.getElementById('pageCount');
  if (count && filtrados.length !== itemsActuales.length) {
    count.textContent = filtrados.length + ' de ' + itemsActuales.length + ' registros';
  }
}

/* ═══════════════════════════════════════════════════════════════════
   TOASTS (mensajes flotantes)
═══════════════════════════════════════════════════════════════════ */
var TOAST_ICONS = {
  success: 'bi-check-circle-fill',
  danger:  'bi-x-circle-fill',
  info:    'bi-info-circle-fill',
  warning: 'bi-exclamation-triangle-fill'
};

function mostrarToast(msg, tipo) {
  if (!tipo) {
    tipo = 'info';
  }
  var id   = 'toast-' + Date.now();
  var icon = TOAST_ICONS[tipo] || TOAST_ICONS.info;
  var html =
    '<div id="' + id + '" class="toast align-items-center text-bg-' + tipo + ' border-0" role="alert">' +
    '  <div class="d-flex">' +
    '    <div class="toast-body d-flex align-items-center gap-2">' +
    '      <i class="bi ' + icon + '"></i>' + esc(msg) +
    '    </div>' +
    '    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>' +
    '  </div>' +
    '</div>';

  var box = document.getElementById('toastBox');
  box.insertAdjacentHTML('beforeend', html);
  var el = document.getElementById(id);
  new bootstrap.Toast(el, { delay: 3500, autohide: true }).show();
  gsap.fromTo(el, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, ease: 'power3.out' });

  setTimeout(function() {
    gsap.to(el, { x: 60, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: function() { el.remove(); } });
  }, 3200);
}
