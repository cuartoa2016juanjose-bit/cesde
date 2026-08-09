/* ═══════════════════════════════════════════════════════════════════
   APP.JS — Configuración de entidades + helpers de localStorage
   Sin APIs ni backend. Todo en localStorage del navegador.
   Sin async/await ni try/catch — funciones básicas con if/else
═══════════════════════════════════════════════════════════════════ */

/* ── Entidades del sistema ─────────────────────────────────────── */
var ENTITIES = {

  proyectos: {
    label: 'Proyectos',
    icon: 'bi-folder2-open',
    cols: [
      { k: 'id',           h: 'ID'      },
      { k: 'nombre',       h: 'Nombre'  },
      { k: 'tipo',         h: 'Tipo'    },
      { k: 'estado',       h: 'Estado', badge: true },
      { k: 'fechaInicio',  h: 'Inicio'  },
      { k: 'fechaFin',     h: 'Fin'     }
    ],
    fields: [
      { k: 'nombre',       l: 'Nombre',       req: true },
      { k: 'tipo',         l: 'Tipo',         req: true },
      { k: 'descripcion',  l: 'Descripción',  type: 'textarea' },
      { k: 'fechaInicio',  l: 'Fecha Inicio', type: 'date', req: true },
      { k: 'fechaFin',     l: 'Fecha Fin',    type: 'date' },
      { k: 'estado',       l: 'Estado',       type: 'select',
        options: ['Activo','Inactivo','Pendiente','Finalizado'], req: true }
    ]
  },

  participantes: {
    label: 'Participantes',
    icon: 'bi-people',
    cols: [
      { k: 'id',        h: 'ID'        },
      { k: 'nombre',    h: 'Nombre'    },
      { k: 'correo',    h: 'Correo'    },
      { k: 'ubicacion', h: 'Ubicación' },
      { k: 'rol',       h: 'Rol',      badge: true }
    ],
    fields: [
      { k: 'nombre',    l: 'Nombre',    req: true },
      { k: 'correo',    l: 'Correo',    type: 'email' },
      { k: 'ubicacion', l: 'Ubicación', req: true },
      { k: 'rol',       l: 'Rol',       req: true,
        type: 'select', options: ['Investigador','Estudiante','Asesor','Externo'] }
    ]
  },

  patrocinios: {
    label: 'Patrocinios',
    icon: 'bi-trophy',
    cols: [
      { k: 'id',       h: 'ID'           },
      { k: 'nombre',   h: 'Patrocinador' },
      { k: 'correo',   h: 'Correo'       },
      { k: 'contacto', h: 'Contacto'     },
      { k: 'tipo',     h: 'Tipo'         },
      { k: 'aporte',   h: 'Aporte'       }
    ],
    fields: [
      { k: 'nombre',   l: 'Nombre',        req: true },
      { k: 'correo',   l: 'Correo',        type: 'email' },
      { k: 'contacto', l: 'Contacto',      req: true },
      { k: 'tipo',     l: 'Tipo',
        type: 'select', options: ['Económico','Especie','Servicios','Otro'] },
      { k: 'aporte',   l: 'Aporte (COP)', decimal: true }
    ]
  },

  recursos: {
    label: 'Recursos',
    icon: 'bi-boxes',
    cols: [
      { k: 'id',        h: 'ID'        },
      { k: 'nombre',    h: 'Nombre'    },
      { k: 'categoria', h: 'Categoría' },
      { k: 'estado',    h: 'Estado',   badge: true },
      { k: 'ubicacion', h: 'Ubicación' }
    ],
    fields: [
      { k: 'nombre',    l: 'Nombre',    req: true },
      { k: 'categoria', l: 'Categoría', req: true,
        type: 'select', options: ['Tecnológico e Informático','Cultural y Artístico','Investigativo y Académico','Deportivo y Recreativo'] },
      { k: 'estado',    l: 'Estado',    req: true,
        type: 'select', options: ['Activo','Inactivo','En mantenimiento'] },
      { k: 'ubicacion', l: 'Ubicación', req: true }
    ]
  },

  mantenimientos: {
    label: 'Mantenimiento',
    icon: 'bi-tools',
    cols: [
      { k: 'id',          h: 'ID'          },
      { k: 'tecnico',     h: 'Técnico'     },
      { k: 'descripcion', h: 'Descripción' },
      { k: 'estado',      h: 'Estado',     badge: true },
      { k: 'categoria',   h: 'Categoría'   },
      { k: 'fecha',       h: 'Fecha'       }
    ],
    fields: [
      { k: 'tecnico',     l: 'Nombre Técnico', req: true },
      { k: 'descripcion', l: 'Descripción',    req: true, type: 'textarea' },
      { k: 'estado',      l: 'Estado',         req: true,
        type: 'select', options: ['Activo','Inactivo','Pendiente','Completado'] },
      { k: 'categoria',   l: 'Categoría',      req: true,
        type: 'select', options: ['Preventivo','Correctivo','Predictivo'] },
      { k: 'fecha',       l: 'Fecha de Ingreso', type: 'date' }
    ]
  },

  usuarios: {
    label: 'Usuarios',
    icon: 'bi-person-badge',
    adminOnly: true,
    cols: [
      { k: 'id',       h: 'ID'       },
      { k: 'nombre',   h: 'Nombre'   },
      { k: 'email',    h: 'Correo'   },
      { k: 'telefono', h: 'Teléfono' },
      { k: 'rol',      h: 'Rol',     badge: true }
    ],
    fields: [
      { k: 'nombre',   l: 'Nombre',     req: true },
      { k: 'email',    l: 'Correo',     type: 'email', req: true },
      { k: 'password', l: 'Contraseña', type: 'password' },
      { k: 'telefono', l: 'Teléfono' },
      { k: 'rol',      l: 'Rol',        req: true,
        type: 'select', options: ['Admin','Cliente'] }
    ]
  }
};

/* ═══════════════════════════════════════════════════════════════════
   HELPERS DE LOCALSTORAGE
═══════════════════════════════════════════════════════════════════ */

// Llave de localStorage para cada entidad
function lsKey(entityKey) {
  return 'sia_' + entityKey;
}

// Obtiene todos los registros de una entidad
function lsGetAll(entityKey) {
  var datos = localStorage.getItem(lsKey(entityKey));
  if (datos === null) {
    return [];
  }
  var resultado = JSON.parse(datos);
  if (!resultado) {
    return [];
  }
  return resultado;
}

// Guarda el array completo de una entidad
function lsSaveAll(entityKey, items) {
  localStorage.setItem(lsKey(entityKey), JSON.stringify(items));
}

// Genera un ID único para nuevos registros
function lsNextId(entityKey) {
  var items = lsGetAll(entityKey);
  if (items.length === 0) {
    return 1;
  }
  var maxId = 0;
  for (var i = 0; i < items.length; i++) {
    var itemId = Number(items[i].id) || 0;
    if (itemId > maxId) {
      maxId = itemId;
    }
  }
  return maxId + 1;
}

// Crea un nuevo registro
function lsCreate(entityKey, data) {
  var items = lsGetAll(entityKey);
  var nuevoId = lsNextId(entityKey);
  var registro = { id: nuevoId };
  // Copiar propiedades de data al registro
  var claves = Object.keys(data);
  for (var i = 0; i < claves.length; i++) {
    registro[claves[i]] = data[claves[i]];
  }
  items.push(registro);
  lsSaveAll(entityKey, items);
  return registro;
}

// Actualiza un registro por id
function lsUpdate(entityKey, id, data) {
  var items = lsGetAll(entityKey);
  var idx = -1;
  for (var i = 0; i < items.length; i++) {
    if (String(items[i].id) === String(id)) {
      idx = i;
      break;
    }
  }
  if (idx === -1) {
    alert('Registro no encontrado.');
    return null;
  }
  var claves = Object.keys(data);
  for (var j = 0; j < claves.length; j++) {
    items[idx][claves[j]] = data[claves[j]];
  }
  lsSaveAll(entityKey, items);
  return items[idx];
}

// Elimina un registro por id
function lsDelete(entityKey, id) {
  var items = lsGetAll(entityKey);
  var filtrados = [];
  for (var i = 0; i < items.length; i++) {
    if (String(items[i].id) !== String(id)) {
      filtrados.push(items[i]);
    }
  }
  if (filtrados.length === items.length) {
    alert('Registro no encontrado.');
    return false;
  }
  lsSaveAll(entityKey, filtrados);
  return true;
}

/* ── Datos de ejemplo al primer arranque ───────────────────────── */
function seedData() {
  if (localStorage.getItem('sia_seeded')) {
    return;
  }

  // Admin por defecto
  var usuarios = JSON.parse(localStorage.getItem('sia_usuarios')) || [];
  var tieneAdmin = false;
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].rol === 'Admin') {
      tieneAdmin = true;
      break;
    }
  }
  if (!tieneAdmin) {
    usuarios.push({
      id: 1,
      nombre: 'Administrador',
      email: 'admin@sia.edu.co',
      password: 'Admin1234@',
      telefono: '3001234567',
      rol: 'Admin'
    });
    localStorage.setItem('sia_usuarios', JSON.stringify(usuarios));
  }

  // Proyectos de ejemplo
  if (!localStorage.getItem('sia_proyectos')) {
    localStorage.setItem('sia_proyectos', JSON.stringify([
      { id:1, nombre:'IA Educativa',   tipo:'Investigación',   descripcion:'Modelo de IA para aprendizaje',  fechaInicio:'2025-01-15', fechaFin:'2025-12-31', estado:'Activo'   },
      { id:2, nombre:'Campus Digital', tipo:'Infraestructura', descripcion:'Digitalización del campus',      fechaInicio:'2025-03-01', fechaFin:'2026-06-30', estado:'Pendiente'},
      { id:3, nombre:'Green SENA',     tipo:'Ambiental',       descripcion:'Proyecto de sostenibilidad',     fechaInicio:'2024-09-01', fechaFin:'2025-08-31', estado:'Activo'   }
    ]));
  }

  // Recursos de ejemplo
  if (!localStorage.getItem('sia_recursos')) {
    localStorage.setItem('sia_recursos', JSON.stringify([
      { id:1, nombre:'Portátil Dell i7',    categoria:'Tecnológico', estado:'Activo',           ubicacion:'Sala 201'      },
      { id:2, nombre:'Proyector Epson',      categoria:'Tecnológico', estado:'En mantenimiento', ubicacion:'Aula Magna'    },
      { id:3, nombre:'Mesa de Conferencias', categoria:'Mobiliario',  estado:'Activo',           ubicacion:'Sala Reuniones'}
    ]));
  }

  localStorage.setItem('sia_seeded', '1');
}

// Ejecutar seed al cargar
seedData();

/* ── Escape HTML ───────────────────────────────────────────────── */
function esc(s) {
  var texto = String(s !== null && s !== undefined ? s : '');
  texto = texto.replace(/&/g, '&amp;');
  texto = texto.replace(/</g, '&lt;');
  texto = texto.replace(/>/g, '&gt;');
  texto = texto.replace(/"/g, '&quot;');
  return texto;
}
