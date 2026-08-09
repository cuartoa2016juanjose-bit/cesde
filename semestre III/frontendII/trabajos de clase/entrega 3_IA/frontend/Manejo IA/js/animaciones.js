/* ═══════════════════════════════════════════════════════════════════
   ANIMACIONES.JS — Animaciones GSAP para la Vista Pública
   Solo se usa en public.html. Requiere GSAP + ScrollTrigger.
   Sin async/await ni try/catch — funciones básicas con if/else
═══════════════════════════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

/* ── Navbar: efecto sombra al hacer scroll ─────────────────────── */
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('mainNav');
  if (!navbar) { return; }
  if (window.scrollY > 20) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});

/* ── Hero: animación de entrada ────────────────────────────────── */
gsap.from('.hero-badge', {
  y: -30, opacity: 0, duration: 0.6, ease: 'back.out(1.5)', delay: 0.2
});
gsap.from('.hero-title', {
  y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.4
});
gsap.from('.hero-subtitle', {
  y: 30, opacity: 0, duration: 0.7, ease: 'power2.out', delay: 0.65
});
gsap.from('.hero-btns', {
  y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.85
});
gsap.from('.hero-stats .stat-item', {
  y: 30, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out', delay: 1.05
});
gsap.from('.hero-img-wrap', {
  x: 60, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.5
});

/* ── Sección: Quiénes Somos ────────────────────────────────────── */
gsap.from('.quienes-label', {
  scrollTrigger: { trigger: '#quienes', start: 'top 85%' },
  y: 20, opacity: 0, duration: 0.5, ease: 'power2.out'
});
gsap.from('.quienes-title', {
  scrollTrigger: { trigger: '#quienes', start: 'top 82%' },
  y: 30, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.1
});
gsap.from('.quienes-text', {
  scrollTrigger: { trigger: '#quienes', start: 'top 80%' },
  y: 20, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.2
});
gsap.from('.quienes-feature', {
  scrollTrigger: { trigger: '.quienes-features', start: 'top 85%' },
  x: -30, opacity: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out'
});
gsap.from('.quienes-img-card', {
  scrollTrigger: { trigger: '#quienes', start: 'top 80%' },
  x: 50, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2
});

/* ── Sección: Servicios ────────────────────────────────────────── */
gsap.from('.servicios-header', {
  scrollTrigger: { trigger: '#servicios', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
});
gsap.from('.servicio-card', {
  scrollTrigger: { trigger: '.servicios-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out'
});

/* ── Sección: Proyectos destacados ─────────────────────────────── */
gsap.from('.proyectos-header', {
  scrollTrigger: { trigger: '#proyectos', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
});
gsap.from('.proyecto-card', {
  scrollTrigger: { trigger: '.proyectos-grid', start: 'top 85%' },
  y: 50, opacity: 0, duration: 0.6, stagger: 0.13, ease: 'back.out(1.2)'
});

/* ── Sección: Contacto ─────────────────────────────────────────── */
gsap.from('.contacto-inner', {
  scrollTrigger: { trigger: '#contacto', start: 'top 80%' },
  y: 40, opacity: 0, duration: 0.7, ease: 'power3.out'
});
gsap.from('.contacto-item', {
  scrollTrigger: { trigger: '.contacto-items', start: 'top 85%' },
  x: -20, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out'
});

/* ── Contador animado de estadísticas ──────────────────────────── */
function animarContadores() {
  var contadores = document.querySelectorAll('.stat-number[data-target]');
  for (var i = 0; i < contadores.length; i++) {
    (function (el) {
      var destino = parseInt(el.getAttribute('data-target'), 10);
      var sufijo  = el.getAttribute('data-suffix') || '';
      gsap.fromTo(
        { val: 0 },
        { val: destino, duration: 1.8, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.round(this.targets()[0].val) + sufijo; }
        }
      );
    })(contadores[i]);
  }
}

ScrollTrigger.create({
  trigger: '.hero-stats',
  start: 'top 90%',
  once: true,
  onEnter: animarContadores
});

/* ── Hover flotante en cards de servicios ──────────────────────── */
var servicioCards = document.querySelectorAll('.servicio-card');
for (var sc = 0; sc < servicioCards.length; sc++) {
  (function (card) {
    card.addEventListener('mouseenter', function () {
      gsap.to(card, { y: -6, duration: 0.25, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', function () {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.inOut' });
    });
  })(servicioCards[sc]);
}

/* ── Hover flotante en cards de proyectos ──────────────────────── */
var proyectoCards = document.querySelectorAll('.proyecto-card');
for (var pc = 0; pc < proyectoCards.length; pc++) {
  (function (card) {
    card.addEventListener('mouseenter', function () {
      gsap.to(card, { y: -5, duration: 0.25, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', function () {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.inOut' });
    });
  })(proyectoCards[pc]);
}

/* ── Modo oscuro ───────────────────────────────────────────────── */
function toggleDarkMode() {
  var body   = document.body;
  var btn    = document.getElementById('btnDarkMode');
  var icono  = btn ? btn.querySelector('i') : null;
  var esDark = body.classList.toggle('dark-mode');

  if (icono) {
    icono.className = esDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }

  localStorage.setItem('sia_dark', esDark ? '1' : '0');

  gsap.from('body', { opacity: 0.85, duration: 0.25, ease: 'none' });
}

// Restaurar preferencia de modo oscuro al cargar
(function () {
  if (localStorage.getItem('sia_dark') === '1') {
    document.body.classList.add('dark-mode');
    var icono = document.querySelector('#btnDarkMode i');
    if (icono) { icono.className = 'bi bi-sun-fill'; }
  }
})();

/* ── Smooth scroll para los enlaces del navbar ─────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  var enlaces = document.querySelectorAll('a[href^="#"]');
  for (var e = 0; e < enlaces.length; e++) {
    (function (el) {
      el.addEventListener('click', function (ev) {
        var destino = document.querySelector(el.getAttribute('href'));
        if (!destino) { return; }
        ev.preventDefault();
        gsap.to(window, {
          scrollTo: { y: destino, offsetY: 70 },
          duration: 0.8,
          ease: 'power3.inOut'
        });
        // Cerrar menú móvil si está abierto
        var navCollapse = document.getElementById('navbarCollapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
          navCollapse.classList.remove('show');
        }
      });
    })(enlaces[e]);
  }
});
