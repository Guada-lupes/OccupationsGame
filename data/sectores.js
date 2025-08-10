const sectores = {
  agricultura: {
    pregunta: "¿Prefieres trabajar en exteriores o en tareas técnicas/gestión?",
    opciones: [
      {
        respuesta: "Exteriores",
        pregunta:
          "¿Quieres manejar maquinaria pesada o trabajar en cultivo y mantenimiento?",
        opciones: [
          {
            respuesta: "Maquinaria pesada",
            ocupaciones: [
              {
                nombre: "Maquinista forestal",
                link: "https://www.sepe.es/dam/jcr:426db5e7-3e2a-412f-8c88-89fff7b32a01/8322_2019.pdf",
                descripcion:
                  "Operan maquinaria pesada para trabajos forestales como tala, transporte y mantenimiento de bosques.",
              },
            ],
          },
          {
            respuesta: "Cultivo y mantenimiento",
            ocupaciones: [
              {
                nombre: "Trabajador/a de vivero forestal",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fdee/RElTRVdFQg==/TRABAJADORES%20CUALIFICADOS%20EN%20HUERTAS,%20INVERNADEROS,%20VIVEROS,%20JARD_N.pdf",
                descripcion:
                  "Se encargan de sembrar, cuidar y preparar plantas y árboles en viveros forestales.",
              },
            ],
          },
        ],
      },
      {
        respuesta: "Tareas técnicas / gestión",
        pregunta:
          "¿Buscas un rol más orientado a ingeniería o a restauración y conservación?",
        opciones: [
          {
            respuesta: "Ingeniería",
            ocupaciones: [
              {
                nombre: "Ingeniera/o forestal",
                link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
                descripcion:
                  "Diseña, gestiona y supervisa proyectos de conservación, explotación y mejora de recursos forestales.",
              },
              {
                nombre: "Técnica/o agrícola/forestal",
                link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
                descripcion:
                  "Apoya en la gestión de explotaciones agrícolas y forestales, controlando producción y calidad.",
              },
            ],
          },
          {
            respuesta: "Restauración y conservación",
            ocupaciones: [
              {
                nombre: "Técnica/o en restauración de ecosistemas",
                link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
                descripcion:
                  "Desarrolla proyectos para recuperar ecosistemas dañados y preservar la biodiversidad.",
              },
            ],
          },
        ],
      },
    ],
  },

  hosteleria: {
    pregunta:
      "¿Prefieres un trabajo en cocina, atención al cliente o apoyo en hostelería?",
    opciones: [
      {
        respuesta: "Cocina",
        pregunta: "¿Quieres ser cocinero o ayudante?",
        opciones: [
          {
            respuesta: "Cocinero",
            ocupaciones: [
              {
                nombre: "Cocinero/a",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fde9/RElTRVdFQg==/COCINEROS%20ASALARIADOS.pdf",
                descripcion:
                  "Elabora, presenta y conserva platos de cocina siguiendo normas de calidad y seguridad alimentaria.",
              },
            ],
          },
          {
            respuesta: "Ayudante",
            ocupaciones: [
              {
                nombre: "Ayudante de cocina",
                link: "https://www.sepe.es/dam/jcr:406f5d19-b84a-4166-8d60-3a2edd56a989/Ayudantes_cocina.pdf",
                descripcion:
                  "Asiste al cocinero en la preparación y montaje de platos, limpieza y mantenimiento de la cocina.",
              },
            ],
          },
        ],
      },
      {
        respuesta: "Atención al cliente",
        pregunta: "¿Prefieres servicio en mesa o en recepción?",
        opciones: [
          {
            respuesta: "Servicio en mesa",
            ocupaciones: [
              {
                nombre: "Camarero/a",
                link: "https://www.sepe.es/dam/jcr:491620ab-2042-4909-99e2-b6fb8775cf91/Camareros.pdf",
                descripcion:
                  "Atiende y sirve a los clientes en mesas, aconsejando sobre el menú y gestionando pedidos.",
              },
            ],
          },
          {
            respuesta: "Recepción",
            ocupaciones: [
              {
                nombre: "Recepcionista de hotel",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fde8/RElTRVdFQg==/RECEPCIONISTAS%20DE%20HOTEL.pdf",
                descripcion:
                  "Gestiona entradas, salidas y atención a huéspedes en establecimientos hoteleros.",
              },
            ],
          },
        ],
      },
      {
        respuesta: "Apoyo y mantenimiento",
            ocupaciones: [
              {
                nombre:
                  "Personal de limpieza de oficinas, hoteles y otros establecimientos similares",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fdc8/RElTRVdFQg==/PERSONAL%20DE%20LIMPIEZA%20DE%20OFICINAS,%20HOTELES%20Y%20OTROS%20ESTABLECIMIENTO%20SIMILARES.pdf",
                descripcion:
                  "Realiza labores de limpieza y mantenimiento en instalaciones y zonas comunes.",
              },
            ],
      },
    ],
  },
  industria: {
    pregunta: "¿Qué tipo de actividad te atrae más?",
    opciones: [
      {
        respuesta: "Alimentos y bebidas",
        pregunta: "¿Prefieres maquinaria o trabajo manual?",
        opciones: [
          {
            respuesta: "Maquinaria",
            ocupaciones: [
              {
                nombre: "Operadores de máquinas de embalaje",
                link: "https://www.sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Operadores_de_maquinas_de_Embalaje_Embotellamiento_y_Etiquetado.pdf",
                descripcion:
                  "Manejan máquinas de embalaje, embotellado y etiquetado para productos alimenticios.",
              },
              {
                nombre:
                  "Operadores de máquinas para elaborar productos alimenticios, bebidas y tabaco",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fd70/RElTRVdFQg==/OPERADORES%20DE%20MAQUINAS%20PARA%20ELABORAR%20PRODUCTOS%20ALIMENTICIOS,%20BEBIDAS%20Y%20TABACO%20.pdf",
                descripcion:
                  "Supervisan y operan maquinaria en la producción de alimentos, bebidas y tabaco.",
              },
            ],
          },
          {
            respuesta: "Manual",
            ocupaciones: [
              {
                nombre: "Matarifes y trabajadores de las industrias cárnicas",
                link: "https://www.sepe.es/dctm/perfiles:09019af480260fc5/RElTRVdFQg==/MATARIFES%20Y%20TRABAJADORES/AS%20DE%20LAS%20INDUSTRIAS%20C_RNICAS%20.pdf",
                descripcion:
                  "Realizan el sacrificio y despiece de animales, así como el procesamiento de carne.",
              },
            ],
          },
        ],
      },
      {
        respuesta: "Productos industriales",
        pregunta: "¿Prefieres maquinaria o trabajo manual?",
        opciones: [
          {
            respuesta: "Maquinaria",
            ocupaciones: [
              {
                nombre: "Carpinteros metálicos",
                link: "https://www.sepe.es/dam/jcr:0028a529-b12a-4b3e-a6bb-286ba47fef5b/Instaladores_de_cerramientos_metalicos_y_Carpinteros_metalicos-Excepto_montadores_de_estructuras_metalicas.pdf",
                descripcion:
                  "Fabrican, instalan y reparan estructuras y piezas metálicas.",
              },
            ],
          },
          {
            respuesta: "Manual",
            ocupaciones: [
              {
                nombre: "Soldadores y oxicortadores",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fdef/RElTRVdFQg==/SOLDADORES%20Y%20%20OXICORTADORES.pdf",
                descripcion:
                  "Unen y cortan piezas metálicas utilizando técnicas de soldadura y oxicorte.",
              },
              {
                nombre: "Chapistas y caldereros",
                link: "https://www.sepe.es/dam/jcr:0fe20b42-2e3f-4b37-8da3-841fc420d9e9/Chapistas_y_caldereros.pdf",
                descripcion:
                  "Fabrican, reparan y mantienen estructuras metálicas y recipientes a presión.",
              },
            ],
          },
        ],
      },
    ],
  },

  comercio: {
    pregunta:
      "¿Prefieres un trabajo orientado a la venta, la gestión administrativa o la reparación técnica?",
    opciones: [
      {
        respuesta: "Venta",
        pregunta: "¿Quieres atender en tienda o visitar clientes fuera?",
        opciones: [
          {
            respuesta: "En tienda",
            ocupaciones: [
              {
                nombre: "Vendedores en tiendas y almacenes",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fda5/RElTRVdFQg==/VENDEDORES%20EN%20TIENDAS%20Y%20ALMACENES.pdf",
                descripcion:
                  "Asesoran y venden productos directamente al público en comercios.",
              },
            ],
          },
          {
            respuesta: "Fuera de tienda",
            ocupaciones: [
              {
                nombre: "Agentes y representantes comerciales",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fddc/RElTRVdFQg==/AGENTES%20Y%20REPRESENTANTES%20COMERCIALES.pdf",
                descripcion:
                  "Realizan ventas y negociaciones con clientes fuera del establecimiento.",
              },
            ],
          },
        ],
      },
      {
        respuesta: "Gestión administrativa",
        ocupaciones: [
          {
            nombre:
              "Empleados administrativos con tareas de atención al público",
            link: "https://www.sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Empleados_administrativos.pdf",
            descripcion:
              "Gestionan trámites y ofrecen información y atención directa al cliente.",
          },
        ],
      },
      {
        respuesta: "Reparación técnica",
        ocupaciones: [
          {
            nombre: "Mecánicos y ajustadores de vehículos de motor",
            link: "https://www.sepe.es/dam/jcr:80e95261-dc7d-4dd0-82c6-22a518754723/Mecanicos_ajustadores_vehiculos_a_motor.pdf",
            descripcion: "Reparan, ajustan y mantienen vehículos automotores.",
          },
        ],
      },
    ],
  },
  transporte: {
    pregunta:
      "¿Prefieres trabajar conduciendo vehículos, en carga/descarga o en gestión logística?",
    opciones: [
      {
        respuesta: "Conducción de vehículos",
        pregunta: "¿Qué tipo de vehículo prefieres conducir?",
        opciones: [
          {
            respuesta: "Camiones",
            ocupaciones: [
              {
                nombre: "Conductores asalariados de camiones",
                link: "https://www.sepe.es/dctm/perfiles:09019af48024fdaa/RElTRVdFQg==/CONDUCTORES%20ASALARIADOS%20DE%20CAMIONES.pdf",
                descripcion:
                  "Transportan mercancías por carretera, asegurando su carga y cumpliendo la normativa.",
              },
            ],
          },
          {
            respuesta: "Automóviles, taxis y furgonetas",
            ocupaciones: [
              {
                nombre:
                  "Conductores asalariados de automóviles, taxis y furgonetas",
                link: "https://www.sepe.es/dam/jcr:84c6753d-5d88-4ccf-b9b8-ce8c2a83416b/Conductores_vehiculos_transporte_urbano_carretera.pdf",
                descripcion:
                  "Transportan pasajeros o mercancías ligeras en entornos urbanos y suburbanos.",
              },
            ],
          },
        ],
      },
      {
        respuesta: "Carga y descarga",
        ocupaciones: [
          {
            nombre: "Mozo de almacén",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fded/RElTRVdFQg==/EMPLEADOS%20DE%20CONTROL%20DE%20ABASTECIMIENTO%20E%20INVENTARIO.pdf",
            descripcion:
              "Reciben, organizan y preparan mercancías en almacenes.",
          },
        ],
      },
      {
        respuesta: "Operación de maquinaria de almacén",
        ocupaciones: [
          {
            nombre: "Operadores de grúas, montacargas y maquinaria similar",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fdf3/RElTRVdFQg==/CONDUCTORES%20DE%20GR_A,%20MONTACARGAS%20Y%20SIMILAR.pdf",
            descripcion: "Manejan grúas y equipos para mover cargas pesadas.",
          },
          {
            nombre: "Operadores de carretillas elevadoras",
            link: "https://www.sepe.es/dctm/perfiles:09019af4802608ff/RElTRVdFQg==/OPERADORES/AS%20DE%20CARRETILLAS%20ELEVADORAS%20.pdf",
            descripcion:
              "Operan carretillas para desplazar mercancías en almacenes y fábricas.",
          },
        ],
      },
    ],
  },

  informacion: {
    pregunta:
      "¿Prefieres un rol técnico, creativo o comercial en el ámbito TIC?",
    opciones: [
      {
        respuesta: "Técnico",
        ocupaciones: [
          {
            nombre: "Técnicos en operaciones de sistemas informáticos",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fdb5/RElTRVdFQg==/T_CNICOS%20EN%20OPERACIONES%20DE%20SISTEMAS%20INFORM_TICOS.pdf",
            descripcion:
              "Gestionan y mantienen sistemas y equipos informáticos.",
          },
          {
            nombre: "Técnicos en redes",
            link: "https://sepe.es/dam/jcr:ae4d8191-f416-467e-86e2-d808653fd7dc/Tecnicos_en_redes.pdf",
            descripcion: "Instalan, configuran y mantienen redes informáticas.",
          },
          {
            nombre: "Analistas y diseñadores de software y multimedia",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fdbe/RElTRVdFQg==/ANALISTA%20Y%20DISE%C3%91ADORES%20DE%20SOFTWARE%20Y%20MULTIMEDIA.pdf",
            descripcion:
              "Diseñan y desarrollan programas y aplicaciones multimedia.",
          },
        ],
      },
      {
        respuesta: "Creativo",
        ocupaciones: [
          {
            nombre: "Analistas, programadores y diseñadores Web y multimedia",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fdbe/RElTRVdFQg==/ANALISTA%20Y%20DISE%C3%91ADORES%20DE%20SOFTWARE%20Y%20MULTIMEDIA.pdf",
            descripcion:
              "Desarrollan aplicaciones y contenidos web con enfoque creativo.",
          },
          {
            nombre: "Diseñadores y administradores de bases de datos",
            link: "https://sepe.es/dctm/perfiles:09019af48024fd7e/RElTRVdFQg==/PROFESIONALES%20TECNOLOGIAS%20DE%20LA%20INFORMACION.pdf",
            descripcion:
              "Diseñan, gestionan y optimizan bases de datos para empresas y organizaciones.",
          },
        ],
      },
      {
        respuesta: "Comercial",
        ocupaciones: [
          {
            nombre:
              "Profesionales de la venta de tecnologías de la información y las comunicaciones",
            link: "https://www.sepe.es/dam/jcr:3c048980-c9dc-48e4-a590-9bae0cd594d6/Profesionales_de_la_venta_de_tecnologias_de_la_informacion_y_de_las_comunicaciones.pdf",
            descripcion:
              "Venden productos y servicios relacionados con las TIC.",
          },
        ],
      },
    ],
  },

  inmobiliarias: {
    pregunta:
      "¿Prefieres trabajar en ventas, gestión administrativa o mantenimiento?",
    opciones: [
      {
        respuesta: "Ventas",
        ocupaciones: [
          {
            nombre: "Administradores de fincas",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fda9/RElTRVdFQg==/AGENTES%20Y%20ADMINISTRADORES%20DE%20LA%20PROPIEDAD%20INMOBILIARIA.pdf",
            descripcion:
              "Gestionan operaciones inmobiliarias y administran fincas urbanas o rústicas.",
          },
          {
            nombre: "Agentes inmobiliarios",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fda9/RElTRVdFQg==/AGENTES%20Y%20ADMINISTRADORES%20DE%20LA%20PROPIEDAD%20INMOBILIARIA.pdf",
            descripcion:
              "Intermedian en la compraventa y arrendamiento de propiedades.",
          },
          {
            nombre: "Analistas de inversiones",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fde2/RElTRVdFQg==/ASESORES%20FINANCIEROS%20Y%20EN%20INVERSIONES.pdf",
            descripcion:
              "Evalúan oportunidades de inversión y asesoran sobre rentabilidad y riesgos.",
          },
          {
            nombre: "Tasadores",
            link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
            descripcion:
              "Determinan el valor de bienes inmuebles para operaciones de compraventa o crédito.",
          },
          
        ],
      },
      {
        respuesta: "Gestión administrativa",
        ocupaciones: [
          {
            nombre: "Administradores de fincas",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fda9/RElTRVdFQg==/AGENTES%20Y%20ADMINISTRADORES%20DE%20LA%20PROPIEDAD%20INMOBILIARIA.pdf",
            descripcion:
              "Organizan y supervisan el funcionamiento y mantenimiento de comunidades de vecinos.",
          },
        ],
      },
      {
        respuesta: "Diseño / mantenimiento",
        ocupaciones: [
          {
            nombre: "Conserjes de edificios",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fdab/RElTRVdFQg==/CONSERJES%20DE%20EDIFICIOS.pdf",
            descripcion:
              "Controlan accesos, atienden incidencias y realizan tareas básicas de mantenimiento.",
          },
        ],
      },
    ],
  },
  profesionales: {
    pregunta: "¿Prefieres un trabajo en el ámbito técnico o comercial?",
    opciones: [
      {
        respuesta: "Técnico",
        ocupaciones: [
          {
            nombre: "Técnicos de control de calidad",
            link: "https://sepe.es/dam/jcr:4f404f85-f290-4f07-99cb-dc6a3f571613/Tecnicos_en_control_de_calidad.pdf",
            descripcion:
              "Verifican que los procesos y productos cumplan con estándares de calidad.",
          },
          {
            nombre:
              "Técnicos en prevención de riesgos laborales y salud ambiental",
            link: "https://www.sepe.es/dam/jcr:a628d080-ec58-4c18-b8a7-97c674fdcf3d/Tecnicos_en_Prevencion_de_Riesgos_Laborales_y_Salud_Ambiental.pdf",
            descripcion:
              "Evalúan y controlan riesgos laborales, promoviendo entornos de trabajo seguros.",
          },
        ],
      },
      {
        respuesta: "Comercial / marketing",
        ocupaciones: [
          {
            nombre: "Azafatos de tierra",
            link: "https://www.sepe.es/dctm/perfiles:09019af480260fbf/RElTRVdFQg==/AZAFATOS/AS%20DE%20TIERRA%20.pdf",
            descripcion:
              "Atienden a pasajeros y clientes en aeropuertos y estaciones.",
          },
          {
            nombre: "Teleoperadores",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fda2/RElTRVdFQg==/VENDEDORES%20A%20DOMICILIO%20Y%20OPERADORES%20DE%20TELEMARKETING.pdf",
            descripcion:
              "Realizan ventas o atención al cliente por vía telefónica.",
          },
        ],
      },
    ],
  },

  administrativas: {
    pregunta: "¿Prefieres tareas con o sin atención al público?",
    opciones: [
      {
        respuesta: "Sin atención al público",
        ocupaciones: [
          {
            nombre:
              "Empleados administrativos sin tareas de atención al público",
            link: "https://www.sepe.es/dam/jcr:4c98d3b0-5be0-434c-bd31-b31f5e9e3bdd/4309_2019.pdf",
            descripcion:
              "Gestionan documentación, bases de datos y procesos internos de oficina.",
          },
          {
            nombre:
              "Trabajadores cualificados en huertas, invernaderos, viveros y jardines",
            link: "",
            descripcion:
              "Cultivan plantas, cuidan cultivos en invernaderos y mantienen jardines.",
          },
        ],
      },
      {
        respuesta: "Con atención al público",
        ocupaciones: [
          {
            nombre: "Profesionales del trabajo y la educación social",
            link: "https://www.sepe.es/dam/jcr:99b1e736-aaef-4c43-be6b-691b7987ed3a/Profesionales_del_trabajo_y_de_la_educacion_social.pdf",
            descripcion:
              "Intervienen en programas de apoyo y desarrollo social en comunidades.",
          },
          {
            nombre: "Repartidores, recadistas y mensajeros a pie",
            link: "https://sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Repartidores_a_domicilio_a_pie_o_en_vehiculo_no_motorizado.pdf",
            descripcion:
              "Distribuyen mercancías y correspondencia en distancias cortas, a pie o en vehículo ligero.",
          },
          {
            nombre: "Vigilantes de seguridad y similares habilitados para ir armados",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fd77/RElTRVdFQg==/PERSONAL%20DE%20SEGURIDAD%20PRIVADA.pdf",
            descripcion:
              "Protegen bienes y personas, controlan accesos y reaccionan ante incidentes.",
          },
        ],
      },
    ],
  },
  educacion: {
    pregunta:
      "¿Quieres enseñar en educación reglada, no reglada o dar apoyo comercial?",
    opciones: [
      {
        respuesta: "Educación reglada",
        ocupaciones: [
          {
            nombre:
              "Profesor/a de enseñanza primaria, secundaria y universitaria",
            link: "https://www.sepe.es/dam/jcr:1a7f844f-392a-4df0-8f2a-f3bb1eb5b0b6/Profesores_de_educacion_primaria,_secundaria_y_universitaria.pdf",
            descripcion:
              "Imparten clases en centros educativos siguiendo los planes oficiales en distintos niveles.",
          },
          {
            nombre: "Técnico/a en educación infantil",
            link: "https://www.sepe.es/dam/jcr:0ad1f24a-6b43-4a4e-a03d-312394d53fa3/Tecnicos_en_educacion_infantil.pdf",
            descripcion:
              "Atienden y educan a niños de 0 a 6 años, favoreciendo su desarrollo integral.",
          },
        ],
      },
      {
        respuesta: "Educación no reglada",
        ocupaciones: [
          
          {
            nombre: "Profesor/a de inglés",
            link: "https://www.sepe.es/dam/jcr:de0b4ff2-0270-4e76-b505-7d1f6e00ecb3/Profesores_de_ensenanza_no_reglada_de_idiomas.pdf",
            descripcion: "Especialista en la enseñanza del idioma inglés.",
          },
          {
            nombre: "Profesor/a de formación profesional en mecánica",
            link: "https://www.sepe.es/dam/jcr:383d2729-8b1c-42aa-8d4f-74296339d1c6/Profesores_de_formacion_profesional_mecanica.pdf",
            descripcion:
              "Imparten formación en mantenimiento y reparación mecánica.",
          },
        ],
      },
      {
        respuesta: "Apoyo comercial",
        ocupaciones: [
          {
            nombre: "Agente comercial especializado en educación",
            link: "https://www.sepe.es/dam/jcr:cf7e601b-7282-41b7-bc27-5377743e19a8/Agentes_y_representantes_comerciales.pdf",
            descripcion:
              "Promueven y venden productos o servicios educativos a instituciones y particulares.",
          },
        ],
      },
    ],
  },

  sanitarias: {
    pregunta:
      "¿Prefieres trabajar en el ámbito sanitario, cuidados personales o animación social?",
    opciones: [
      {
        respuesta: "Sanitario",
        ocupaciones: [
          {
            nombre: "Auxiliar de enfermería",
            link: "https://www.sepe.es/dam/jcr:88725df7-e559-4ed5-ac9a-491d90d722b9/Auxiliares_enfermeria.pdf",
            descripcion:
              "Apoyan al personal de enfermería en la atención a pacientes en centros de salud.",
          },
          {
            nombre: "Enfermero/a no especializado/a",
            link: "https://www.sepe.es/dam/jcr:a214f4c2-edab-4af1-89a1-ad352a84cea4/Enfermeros_no_especializados.pdf",
            descripcion:
              "Prestan atención y cuidados generales a pacientes en distintos entornos.",
          },
        ],
      },
      {
        respuesta: "Cuidados personales",
        ocupaciones: [
          {
            nombre:
              "Trabajador/a de los cuidados a las personas",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fd9f/RElTRVdFQg==/TRABAJADORES%20DE%20LOS%20CUIDADOS%20A%20LAS%20PERSONAS.pdf",
            descripcion:
              "Ayudan a pacientes en su higiene, alimentación y movilidad en centros de salud.",
          },
        ],
      },
      {
        respuesta: "Animación / educación social",
        ocupaciones: [
          {
            nombre: "Cuidador/a de niños en guarderías y centros educativos",
            link: "https://www.sepe.es/dctm/perfiles:09019af48024fd9f/RElTRVdFQg==/TRABAJADORES%20DE%20LOS%20CUIDADOS%20A%20LAS%20PERSONAS.pdf",
            descripcion:
              "Atienden y cuidan a niños en centros infantiles y escolares.",
          },
          {
            nombre: "Monitor/a de actividades recreativas y de entretenimiento",
            link: "https://www.sepe.es/dam/jcr:74c15950-98df-4be9-acf9-7743f19b9c07/Animadores_de_tiempo_libre.pdf",
            descripcion:
              "Organizan y dirigen actividades lúdicas para distintos públicos.",
          },
          
        ],
      },
    ],
  },
  artisticas: {
    pregunta:
      "¿Prefieres actividades artísticas, deportivas o de gestión cultural?",
    opciones: [
      {
        respuesta: "Artísticas",
        ocupaciones: [
          {
            nombre: "Técnico/a de sonido y cámara",
            link: "https://www.sepe.es/dam/jcr:7ddc0d61-6d17-4e74-9aa8-0df06f4f6421/Tecnicos_de_sonido_y_de_imagen.pdf",
            descripcion:
              "Controlan equipos de sonido e imagen en producciones audiovisuales.",
          },
        ],
      },
      {
        respuesta: "Deportivas / recreativas",
        ocupaciones: [
          {
            nombre: "Instructor/a de actividades deportivas",
            link: "https://www.sepe.es/dam/jcr:3dd539a1-43b4-4adf-a22e-272ed5b5d13a/Instructores_de_actividades_deportivas.pdf",
            descripcion:
              "Enseñan y entrenan en distintas disciplinas deportivas.",
          },
          {
            nombre: "Bañista-socorrista",
            link: "https://www.sepe.es/dam/jcr:2b4d5a49-2601-4d9b-bf0d-37c62a0f539f/Socorristas.pdf",
            descripcion:
              "Vigilan zonas acuáticas y asisten en casos de emergencia.",
          },
          {
            nombre: "Animador/a comunitario/a",
            link: "https://www.sepe.es/dam/jcr:aa1e99c4-40f5-4704-b0c4-bfc4f51a3537/Animadores_comunitarios.pdf",
            descripcion:
              "Dinamizan actividades para fomentar la integración y la cohesión social.",
          },
        ],
      },
      {
        respuesta: "Gestión cultural / marketing",
        ocupaciones: [
          {
            nombre: "Guía turístico/a especializado/a",
            link: "https://www.sepe.es/dam/jcr:df7e81b8-73ff-4d29-94cc-2b707cfe96cb/Guias_turisticos.pdf",
            descripcion:
              "Acompaña e informa a visitantes en rutas y actividades turísticas.",
          },
        ],
      },
    ],
  },

  otros: {
    pregunta:
      "¿Prefieres trabajo en estética, lavandería o servicios funerarios?",
    opciones: [
      {
        respuesta: "Estética y bienestar",
        ocupaciones: [
          {
            nombre: "Peluquero/a",
            link: "https://www.sepe.es/dam/jcr:02958c9f-af1d-435e-b1a5-b379df78beb0/Peluqueros_especialistas_tratamientos_estetica.pdf",
            descripcion: "Cortan, peinan y realizan tratamientos capilares.",
          },
          {
            nombre:
              "Especialista en tratamientos de estética, bienestar y afines",
            link: "https://www.sepe.es/dctm/perfiles:09019af480261101/RElTRVdFQg==/ESPECIALISTAS%20EN%20TRATAMIENTOS%20DE%20EST_TICA%20Y%20BIENESTAR%20Y%20AFINES%20.pdf",
            descripcion:
              "Realizan tratamientos faciales, corporales y de bienestar.",
          },
        ],
      },
      {
        respuesta: "Lavandería / tintorería",
        ocupaciones: [
          {
            nombre: "Operador/a de máquinas de lavandería y tintorería",
            link: "https://www.sepe.es/dam/jcr:044db129-1423-468b-a041-e2289f3ec4ce/Operadores_de_maquinas_de_lavanderia_y_tintoreria.pdf",
            descripcion:
              "Manejan equipos para lavar, secar y planchar prendas.",
          },
        ],
      },
      {
        respuesta: "Servicios funerarios",
        ocupaciones: [
          {
            nombre: "Empleado/a de pompas fúnebres",
            link: "https://www.sepe.es/HomeSepe/es/que-es-observatorio/deteccion-necesidades-formativas/buscador-necesidades-formativas/resultados-busqueda/detalle-necesidades-formativas.html?idOcu=5892",
            descripcion:
              "Realizan tareas de preparación y organización de servicios funerarios.",
          },
          {
            nombre: "Embalsamador/a",
            link: "https://sede.sepe.gob.es/es/portaltrabaja/resources/pdf/especialidades/SANP0108.pdf",
            descripcion:
              "Realizan tratamientos de conservación y preparación de cadáveres para su presentación.",
          },
        ],
      },
    ],
  },
};

export default sectores;
