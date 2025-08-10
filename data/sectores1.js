export const sectores = {
  industria: {
    pregunta: "¿Qué tipo de actividad te atrae más?",
    opciones: [
      {
        respuesta: "Alimentos y bebidas",
        pregunta: "¿Prefieres maquinaria o trabajo manual?",
        opciones: [
          { respuesta: "Maquinaria", ocupaciones: ["Operadores de embalaje", "Embotelladores"] },
          { respuesta: "Manual", ocupaciones: ["Matarifes", "Conserveros"] }
        ]
      },
      {
        respuesta: "Productos industriales",
        pregunta: "¿Prefieres maquinaria o trabajo manual?",
        opciones: [
          { respuesta: "Maquinaria", ocupaciones: ["Operadores de metales", "Plantas químicas"] },
          { respuesta: "Manual", ocupaciones: ["Soldadores", "Caldereros"] }
        ]
      },
      {
        respuesta: "Recursos y residuos",
        pregunta: "¿Prefieres un perfil técnico o logístico?",
        opciones: [
          { respuesta: "Técnico", ocupaciones: ["Técnicos en tratamiento de residuos/agua"] },
          { respuesta: "Logística", ocupaciones: ["Conductores", "Agentes comerciales"] }
        ]
      }
    ]
  },

  agricultura: {
    pregunta: "¿Prefieres trabajar en exteriores o en tareas técnicas/gestión?",
    opciones: [
      {
        respuesta: "Exteriores",
        pregunta: "¿Quieres manejar maquinaria pesada o trabajar en cultivo y mantenimiento?",
        opciones: [
          { respuesta: "Maquinaria pesada", ocupaciones: ["Maquinista forestal"] },
          { respuesta: "Cultivo y mantenimiento", ocupaciones: ["Trabajador de vivero forestal"] }
        ]
      },
      {
        respuesta: "Tareas técnicas / gestión",
        pregunta: "¿Buscas un rol más orientado a ingeniería o a restauración y conservación?",
        opciones: [
          { respuesta: "Ingeniería", ocupaciones: ["Ingeniero forestal", "Técnico agrícola/forestal"] },
          { respuesta: "Restauración y conservación", ocupaciones: ["Técnico en restauración de ecosistemas"] }
        ]
      }
    ]
  },

  comercio: {
    pregunta: "¿Prefieres un trabajo orientado a la venta, la gestión administrativa o la reparación técnica?",
    opciones: [
      {
        respuesta: "Venta",
        pregunta: "¿Quieres atender en tienda o visitar clientes fuera?",
        opciones: [
          { respuesta: "En tienda", ocupaciones: ["Vendedores en tiendas y almacenes"] },
          { respuesta: "Fuera de tienda", ocupaciones: ["Agentes y representantes comerciales"] }
        ]
      },
      { respuesta: "Gestión administrativa", ocupaciones: ["Empleados administrativos con tareas de atención al público no clasificados bajo otros epígrafes"] },
      { respuesta: "Reparación técnica", ocupaciones: ["Mecánicos y ajustadores de vehículos de motor"] }
    ]
  },

  transporte: {
    pregunta: "¿Prefieres trabajar conduciendo vehículos, en carga/descarga o en gestión logística?",
    opciones: [
      {
        respuesta: "Conducción de vehículos",
        pregunta: "¿Qué tipo de vehículo prefieres conducir?",
        opciones: [
          { respuesta: "Camiones", ocupaciones: ["Conductores asalariados de camiones"] },
          { respuesta: "Automóviles, taxis y furgonetas", ocupaciones: ["Conductores asalariados de automóviles, taxis y furgonetas"] },
          { respuesta: "Autobuses y tranvías", ocupaciones: ["Conductores de autobuses y tranvías"] }
        ]
      },
      { respuesta: "Carga y descarga", ocupaciones: ["Peones del transporte de mercancías y descargadores", "Mozo de almacén"] },
      { respuesta: "Operación de maquinaria de almacén", ocupaciones: ["Operadores de grúas, montacargas y maquinaria similar", "Operadores de carretillas elevadoras"] },
      { respuesta: "Gestión logística", ocupaciones: ["Empleados de logística y transporte de pasajeros y mercancías"] }
    ]
  },

  hosteleria: {
  pregunta: "¿Prefieres un trabajo en cocina, atención al cliente o apoyo en hostelería?",
  opciones: [
    {
      respuesta: "Cocina",
      pregunta: "¿Quieres ser cocinero o ayudante?",
      opciones: [
        { respuesta: "Cocinero", ocupaciones: ["Cocineros asalariados"] },
        { respuesta: "Ayudante", ocupaciones: ["Ayudantes de cocina", "Preparadores de comidas rápidas"] }
      ]
    },
    {
      respuesta: "Atención al cliente",
      pregunta: "¿Prefieres servicio en mesa o en recepción?",
      opciones: [
        { respuesta: "Servicio en mesa", ocupaciones: ["Camareros asalariados"] },
        { respuesta: "Recepción", ocupaciones: ["Recepcionista de hoteles"] }
      ]
    },
    {
      respuesta: "Apoyo y mantenimiento",
      pregunta: "¿Prefieres limpieza o tareas de almacén?",
      opciones: [
        { respuesta: "Limpieza", ocupaciones: ["Personal de limpieza de oficinas, hoteles y otros establecimientos similares"] },
        { respuesta: "Almacén", ocupaciones: ["Mozos de almacén"] }
      ]
    }
  ]
}
,

  inmobiliarias: {
    pregunta: "¿Prefieres trabajar en ventas, gestión administrativa o diseño/mantenimiento?",
    opciones: [
      {
        respuesta: "Ventas",
        ocupaciones: [
          "Agentes y representantes comerciales",
          "Agentes y administradores de la propiedad inmobiliaria",
          "Agentes inmobiliarios",
          "Especialistas en suelo",
          "Responsables de expansión o ventas",
          "Analistas de inversiones",
          "Expertos en viviendas de alquiler",
          "Tasadores",
          "Consultores inmobiliarios",
          "Administradores de fincas"
        ]
      },
      { respuesta: "Gestión administrativa", ocupaciones: ["Empleados administrativos con tareas de atención al público", "Profesionales de la publicidad y la comercialización"] },
      { respuesta: "Diseño / mantenimiento", ocupaciones: ["Arquitectos técnicos y técnicos urbanistas", "Diseñadores y decoradores de interior", "Mantenedores de edificios", "Conserjes de edificios", "Personal de limpieza de oficinas, hoteles y otros establecimientos similares"] }
    ]
  },

  profesionesTecnicas: {
    pregunta: "¿Prefieres un trabajo en el ámbito legal, técnico o comercial?",
    opciones: [
      { respuesta: "Legal", ocupaciones: ["Abogados", "Especialistas en administración de política de empresas"] },
      {
        respuesta: "Técnico",
        ocupaciones: [
          "Ingenieros",
          "Arquitectos",
          "Arquitectos técnicos y técnicos urbanistas",
          "Delineantes y dibujantes técnicos",
          "Técnicos de control de calidad",
          "Técnicos en prevención de riesgos laborales y salud ambiental",
          "Técnicos y analistas de laboratorio en química industrial"
        ]
      },
      { respuesta: "Comercial / marketing", ocupaciones: ["Profesionales de la publicidad y la comercialización", "Promotores de venta", "Agentes de encuestas", "Azafatos de tierra", "Teleoperadores"] }
    ]
  },

  adminAuxiliares: {
    pregunta: "¿Prefieres tareas administrativas, servicios de mantenimiento o atención al cliente?",
    opciones: [
      { respuesta: "Administrativas", ocupaciones: ["Empleados administrativos sin tareas de atención al público", "Empleados administrativos con tareas de atención al público", "Empleados de información al usuario", "Grabadores de datos", "Teleoperadores"] },
      { respuesta: "Mantenimiento / limpieza", ocupaciones: ["Personal de limpieza de oficinas, hoteles y otros establecimientos similares", "Supervisores de mantenimiento y limpieza", "Mantenedores de edificios", "Conserjes de edificios"] },
      { respuesta: "Atención social", ocupaciones: ["Profesionales del trabajo y la educación social", "Profesionales de apoyo al trabajo y a la educación social"] },
      { respuesta: "Reparto / logística ligera", ocupaciones: ["Repartidores, recadistas y mensajeros a pie"] }
    ]
  },

  educacion: {
    pregunta: "¿Quieres enseñar en educación reglada, no reglada o dar apoyo tecnológico/comercial?",
    opciones: [
      { respuesta: "Educación reglada", ocupaciones: ["Profesores de enseñanza primaria, secundaria y universitaria", "Técnicos en educación infantil"] },
      { respuesta: "Educación no reglada", ocupaciones: ["Profesores y profesionales de la enseñanza no clasificados bajo otros epígrafes", "Profesores de enseñanza no reglada de idiomas", "Profesores de inglés", "Profesores de formación profesional en mecánica"] },
      { respuesta: "Apoyo tecnológico / comercial", ocupaciones: ["Técnicos en tecnologías de la información y la comunicación (TIC)", "Agentes comerciales especializados en educación"] }
    ]
  },

  sanidadSocial: {
    pregunta: "¿Prefieres trabajar en el ámbito sanitario, cuidados personales o animación social?",
    opciones: [
      { respuesta: "Sanitario", ocupaciones: ["Auxiliares de enfermería de atención primaria", "Auxiliares de enfermería hospitalaria", "Enfermeros no especializados"] },
      { respuesta: "Cuidados personales", ocupaciones: ["Trabajadores de los cuidados a las personas en servicios de salud", "Trabajadores de los cuidados personales a domicilio"] },
      { respuesta: "Animación / educación social", ocupaciones: ["Profesionales de apoyo al trabajo y a la educación social", "Cuidadores de niños en guarderías y centros educativos", "Monitores de actividades recreativas y de entretenimiento", "Instructores de actividades deportivas", "Animadores comunitarios"] }
    ]
  },

  arteEntretenimiento: {
    pregunta: "¿Prefieres actividades artísticas, deportivas o de gestión cultural?",
    opciones: [
      { respuesta: "Artísticas", ocupaciones: ["Actores, compositores, músicos y cantantes", "Técnicos de sonido y cámara"] },
      { respuesta: "Deportivas / recreativas", ocupaciones: ["Monitores de actividades recreativas y de entretenimiento", "Instructores de actividades deportivas", "Bañistas-socorristas", "Animadores comunitarios"] },
      { respuesta: "Gestión cultural / marketing", ocupaciones: ["Especialistas en marketing digital cultural", "Organizadores de eventos culturales", "Guías turísticos especializados", "Técnicos de apoyo a actividades artísticas y recreativas", "Empleados de sala de juegos"] }
    ]
  },

  otros: {
    pregunta: "¿Prefieres trabajo en estética, lavandería o servicios funerarios?",
    opciones: [
      { respuesta: "Estética y bienestar", ocupaciones: ["Peluqueros", "Especialistas en tratamientos de estética, bienestar y afines"] },
      { respuesta: "Lavandería / tintorería", ocupaciones: ["Operadores de máquinas de lavandería y tintorería"] },
      { respuesta: "Servicios funerarios", ocupaciones: ["Empleados de pompas fúnebres y embalsamadores"] }
    ]
  }
};
