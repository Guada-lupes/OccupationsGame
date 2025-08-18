import {AgriculturaIcons} from "../src/icons/Icons"
import {IndusIcons}from "../src/icons/Icons"
import {ComerIcon} from "../src/icons/Icons"
import {ConstruIcon}from "../src/icons/Icons"
import {TransIcon} from "../src/icons/Icons"
import {HosteIcon}from "../src/icons/Icons"
import {InfoIcon} from "../src/icons/Icons"
import {InmoIcon}from "../src/icons/Icons"
import {CienIcon} from "../src/icons/Icons"
import {AdminIcon}from "../src/icons/Icons"
import {EduIcon} from "../src/icons/Icons"
import {SaniIcon}from "../src/icons/Icons"
import {ArtiIcon} from "../src/icons/Icons"
import {OtroIcon}from "../src/icons/Icons"

export const tribus = [
  {
    id: "agricultura",
    nombre: "Agricultura",
    tribu: "Mapuches Guardianes del Territorio",
    descripcion:
      "“Hijos de la tierra fértil, los Mapuches han aprendido a escuchar el murmullo del suelo y el canto de las estaciones. Sus manos hacen brotar semillas que alimentan a todas las tribus. Visten colores verdes y ocres, símbolos de la vida y la cosecha. En las grandes celebraciones, comparten frutos y cereales con quienes los visitan, porque creen que el alimento debe ser siempre un bien común.”",
    imagen: AgriculturaIcons,
    desbloqueada: true,
    reto: {
      tipo: "verdadero-falso",
      preguntas: [
        {
          enunciado:
            "La rotación de cultivos ayuda a conservar la fertilidad del suelo.",
          respuestaCorrecta: "Verdadero",
        },
        {
          enunciado:
            "El algodón es un cultivo que requiere mucha agua para su producción.",
          respuestaCorrecta: "Verdadero",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Maquinista forestal",
        link: "https://www.sepe.es/dam/jcr:426db5e7-3e2a-412f-8c88-89fff7b32a01/8322_2019.pdf",
        descripcion:
          "Opera maquinaria pesada para talar, procesar y transportar madera en entornos forestales.",
      },
      {
        nombre: "Ingeniera/o forestal",
        link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
        descripcion:
          "Planifica y gestiona recursos forestales para un uso sostenible y conservación del medio ambiente.",
      },
      {
        nombre: "Técnica/o agrícola/forestal",
        link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
        descripcion:
          "Realiza tareas técnicas de apoyo en cultivos, montes y gestión de recursos naturales.",
      },
      {
        nombre: "Técnica/o en restauración de ecosistemas",
        link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
        descripcion:
          "Diseña y ejecuta proyectos para recuperar áreas degradadas y proteger la biodiversidad.",
      },
      {
        nombre: "Trabajador/a de vivero forestal",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdee/RElTRVdFQg==/TRABAJADORES%20CUALIFICADOS%20EN%20HUERTAS,%20INVERNADEROS,%20VIVEROS,%20JARD_N.pdf",
        descripcion:
          "Cultiva y cuida plantas, árboles y semillas para su posterior uso en reforestación o jardinería.",
      },
    ],
    siguienteTribu: "industria",
  },

  {
    id: "industria",
    nombre: "Industria manufacturera y suministros",
    tribu: "Sioux Forjadores de Acero",
    descripcion:
      "“Los Sioux son maestros del metal y la transformación. De sus talleres salen herramientas, máquinas y objetos que sostienen la vida del planeta. Su cultura valora el trabajo colectivo: cada creación lleva la marca de todo el clan. En sus forjas, el fuego nunca se apaga, pues creen que mantenerlo vivo es mantener el progreso encendido.”",
    imagen: IndusIcons,
    desbloqueada: false,
    reto: {
      tipo: "ordenar-secuencia",
      preguntas: [
        {
          enunciado:
            "Ordena las fases básicas en la producción de una prenda de ropa en la industria textil.",
          opciones: [
            "Diseño",
            "Corte de tela",
            "Confección",
            "Control de calidad",
            "Distribución",
          ],
          respuestaCorrecta: [
            "Diseño",
            "Corte de tela",
            "Confección",
            "Control de calidad",
            "Distribución",
          ],
        },
      ],
    },
    profesiones: [
      {
        nombre:
          "Operadoras/es de máquinas para elaborar productos alimenticios, bebidas y tabaco",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd70/RElTRVdFQg==/OPERADORES%20DE%20MAQUINAS%20PARA%20ELABORAR%20PRODUCTOS%20ALIMENTICIOS,%20BEBIDAS%20Y%20TABACO%20.pdf",
        descripcion:
          "Manejan y controlan maquinaria para procesar y elaborar alimentos, bebidas y productos de tabaco.",
      },
      {
        nombre: "Soldadoras/es y oxicortadoras/es",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdef/RElTRVdFQg==/SOLDADORES%20Y%20%20OXICORTADORES.pdf",
        descripcion:
          "Unen y cortan piezas metálicas mediante procesos de soldadura y oxicorte.",
      },
      {
        nombre: "Chapistas y caldereras/os",
        link: "https://www.sepe.es/dam/jcr:0fe20b42-2e3f-4b37-8da3-841fc420d9e9/Chapistas_y_caldereros.pdf",
        descripcion:
          "Fabrican, reparan y ajustan estructuras metálicas, chapas y calderería.",
      },
      {
        nombre: "Matarifes y trabajadoras/es de las industrias cárnicas",
        link: "https://www.sepe.es/dctm/perfiles:09019af480260fc5/RElTRVdFQg==/MATARIFES%20Y%20TRABAJADORES/AS%20DE%20LAS%20INDUSTRIAS%20C_RNICAS%20.pdf",
        descripcion:
          "Realizan el sacrificio de animales y el procesamiento de carne para su comercialización.",
      },
      {
        nombre: "Operadoras/es de máquinas de embalaje",
        link: "https://www.sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Operadores_de_maquinas_de_Embalaje_Embotellamiento_y_Etiquetado.pdf",
        descripcion:
          "Operan máquinas que envasan, embotellan o etiquetan productos para su distribución.",
      },
    ],
    siguienteTribu: "construccion",
  },
  {
    id: "construccion",
    nombre: "Construcción",
    tribu: "Zapotecas Arquitectos del Horizonte",
    descripcion:
      "“Constructores de ciudades, puentes y refugios, los Zapotecas miran siempre al horizonte: donde otros ven vacío, ellos ven estructuras posibles. Sus templos de piedra son espacios de encuentro entre tribus, porque creen que toda obra debe servir al bien común. Su cultura celebra la unión entre lo práctico y lo bello: para ellos, cada edificio es también una obra de arte.”",
    imagen: ConstruIcon,
    desbloqueada: false,
    reto: {
      tipo: "clasificar",
      instrucciones:
        "Clasifica cada elemento como 'Herramienta de construcción' o 'Material de construcción'.",
      elementos: [
        "Cemento",
        "Taladro",
        "Arena",
        "Andamio",
        "Ladrillo",
        "Martillo",
      ],
      categorias: {
        "Herramienta de construcción": ["Taladro", "Andamio", "Martillo"],
        "Material de construcción": ["Cemento", "Arena", "Ladrillo"],
      },
    },
    profesiones: [
      {
        nombre: "Encofradoras/es",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdd9/RElTRVdFQg==/ENCOFRADORES.pdf",
        descripcion:
          "Preparan y montan moldes para dar forma al hormigón en construcciones.",
      },
      {
        nombre: "Fontaneras/os",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd57/RElTRVdFQg==/FONTANEROS.pdf",
        descripcion:
          "Instalan y reparan sistemas de agua, desagües y calefacción.",
      },
      {
        nombre: "Carpinteras/os metálicos",
        link: "https://www.sepe.es/dam/jcr:0028a529-b12a-4b3e-a6bb-286ba47fef5b/Instaladores_de_cerramientos_metalicos_y_Carpinteros_metalicos-Excepto_montadores_de_estructuras_metalicas.pdf",
        descripcion:
          "Fabrican y montan elementos metálicos como puertas, ventanas o estructuras ligeras.",
      },
      {
        nombre: "Mecánicas/os-instaladoras/es de refrigeración y climatización",
        link: "https://www.sepe.es/dctm/perfiles:09019af480261104/RElTRVdFQg==/MEC_NICOS/AS-INSTALADORES/AS%20DE%20REFRIGERACI_N%20Y%20CLIMATIZACI_N%20.pdf",
        descripcion:
          "Montan, mantienen y reparan sistemas de refrigeración y climatización.",
      },
      {
        nombre: "Electricistas",
        link: "https://www.sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Electricistas_de_la_construccion_y_afines.pdf",
        descripcion:
          "Instalan, reparan y mantienen redes e instalaciones eléctricas en edificaciones.",
      },
    ],
    siguienteTribu: "comercio",
  },
  {
    id: "comercio",
    nombre:
      "Comercio al por mayor y al por menor, reparación de vehículos de motor y motocicletas",
    tribu: "Navajos Maestros del Trueque",
    descripcion:
      "“Los Navajos son viajeros del mercado: conocen el valor de cada objeto y el poder de cada intercambio. Su habilidad para negociar los convierte en puentes entre tribus. Sus campamentos son coloridos, repletos de mercancías y voces que ofrecen, regatean y celebran el trueque. Además, son hábiles reparadores: nada que llega a sus manos se da por perdido.”",
    imagen: ComerIcon,
    desbloqueada: false,
    reto: {
      tipo: "relacionar",
      instrucciones: "Relaciona cada tipo de comercio con un ejemplo adecuado.",
      columnaA: [
        "Comercio minorista",
        "Comercio mayorista",
        "Comercio electrónico",
        "Comercio ambulante",
        "Comercio internacional",
      ],
      columnaB: [
        "Amazon",
        "Mercado callejero",
        "Exportación de café",
        "Supermercado de barrio",
        "Distribuidora de bebidas para bares",
      ],
      respuestaCorrecta: {
        "Comercio minorista": "Supermercado de barrio",
        "Comercio mayorista": "Distribuidora de bebidas para bares",
        "Comercio electrónico": "Amazon",
        "Comercio ambulante": "Mercado callejero",
        "Comercio internacional": "Exportación de café",
      },
    },
    profesiones: [
      {
        nombre: "Vendedoras/es en tiendas y almacenes",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fda5/RElTRVdFQg==/VENDEDORES%20EN%20TIENDAS%20Y%20ALMACENES.pdf",
        descripcion:
          "Atiende a clientes, organiza productos y gestiona las ventas en comercios y almacenes.",
      },
      {
        nombre: "Mecánicas/os y ajustadoras/es de vehículos de motor",
        link: "https://www.sepe.es/dam/jcr:80e95261-dc7d-4dd0-82c6-22a518754723/Mecanicos_ajustadores_vehiculos_a_motor.pdf",
        descripcion:
          "Realizan mantenimiento, reparaciones y ajustes en vehículos de motor.",
      },
      {
        nombre:
          "Empleadas/os administrativas/os con tareas de atención al público",
        link: "https://www.sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Empleados_administrativos.pdf",
        descripcion:
          "Gestionan tareas administrativas y atienden a clientes o usuarios en persona o por medios digitales.",
      },
      {
        nombre: "Agentes y representantes comerciales",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fddc/RElTRVdFQg==/AGENTES%20Y%20REPRESENTANTES%20COMERCIALES.pdf",
        descripcion:
          "Promocionan y venden productos o servicios, visitando clientes y cerrando acuerdos comerciales.",
      },
    ],
    siguienteTribu: "transporte",
  },
  {
    id: "transporte",
    nombre: "Transporte y almacenamiento",
    tribu: "Apaches Rutas Sin Fin",
    descripcion:
      "“Los Apaches nunca permanecen demasiado tiempo en un mismo lugar. Sus caravanas cruzan territorios, mares y cielos, asegurando que todo llegue a su destino. Su cultura se basa en el movimiento y la libertad: creen que cada camino abierto es un nuevo lazo entre tribus. Guardan mapas y relatos de todas las rutas, convirtiéndose en memoria viviente de los caminos del planeta.”",
    imagen: TransIcon,
    desbloqueada: false,
    reto: {
      tipo: "encuentra-impostor",
      preguntas: [
        {
          enunciado: "¿Cuál de estos NO es un medio de transporte terrestre?",
          opciones: ["Autobús", "Tren", "Helicóptero"],
          respuestaCorrecta: "Helicóptero",
        },
        {
          enunciado:
            "¿Cuál de estos NO se utiliza para el transporte marítimo?",
          opciones: ["Ferry", "Petrolero", "Tranvía"],
          respuestaCorrecta: "Tranvía",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Conductoras/es asalariadas/os de camiones",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdaa/RElTRVdFQg==/CONDUCTORES%20ASALARIADOS%20DE%20CAMIONES.pdf",
        descripcion:
          "Conducen vehículos pesados para transporte de mercancías a nivel local, nacional o internacional, cumpliendo normativas de seguridad vial.",
      },
      {
        nombre:
          "Conductoras/es asalariadas/os de automóviles, taxis y furgonetas",
        link: "https://www.sepe.es/dam/jcr:84c6753d-5d88-4ccf-b9b8-ce8c2a83416b/Conductores_vehiculos_transporte_urbano_carretera.pdf",
        descripcion:
          "Transportan personas o mercancías en vehículos ligeros, ofreciendo servicio urbano o interurbano.",
      },
      {
        nombre: "Moza/o de almacén",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fded/RElTRVdFQg==/EMPLEADOS%20DE%20CONTROL%20DE%20ABASTECIMIENTO%20E%20INVENTARIO.pdf",
        descripcion:
          "Realizan tareas de carga, descarga, clasificación y control de inventarios en almacenes.",
      },
      {
        nombre: "Operadoras/es de grúas, montacargas",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdf3/RElTRVdFQg==/CONDUCTORES%20DE%20GR_A,%20MONTACARGAS%20Y%20SIMILAR.pdf",
        descripcion:
          "Manejan maquinaria pesada para elevar y mover cargas en puertos, almacenes o zonas industriales.",
      },
      {
        nombre: "Operadoras/es de carretillas elevadoras",
        link: "https://www.sepe.es/dctm/perfiles:09019af4802608ff/RElTRVdFQg==/OPERADORES/AS%20DE%20CARRETILLAS%20ELEVADORAS%20.pdf",
        descripcion:
          "Operan vehículos industriales para transporte interno de mercancías en fábricas, naves o almacenes.",
      },
    ],
    siguienteTribu: "hosteleria",
  },
  {
    id: "hosteleria",
    nombre: "Hostelería",
    tribu: "Mayas Anfitriones del Sol",
    descripcion:
      "“Los Mayas dominan el arte de recibir. Sus aldeas son oasis de descanso, donde viajeros de todas las tribus encuentran calor, alimento y hospitalidad. Adornan sus hogares con símbolos solares, porque creen que cada huésped trae consigo un nuevo amanecer. Su cultura se basa en el servicio y el cuidado: para ellos, atender al visitante es honrar al planeta mismo.”",
    imagen: HosteIcon,
    desbloqueada: false,
    reto: {
      tipo: "completar-frases",
      preguntas: [
        {
          enunciado:
            "En hostelería, el término 'check-in' se refiere al momento en que el cliente ______.",
          opciones: [
            "Paga la cuenta",
            "Llega y se registra",
            "Deja una propina",
          ],
          respuestaCorrecta: "Llega y se registra",
        },
        {
          enunciado:
            "El sistema 'todo incluido' significa que el cliente tiene acceso a comidas, bebidas y algunos servicios sin ______ adicional.",
          opciones: ["Costo", "Horario", "Turno"],
          respuestaCorrecta: "Costo",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Camareras/os",
        link: "https://www.sepe.es/dam/jcr:491620ab-2042-4909-99e2-b6fb8775cf91/Camareros.pdf",
        descripcion:
          "Atienden a los clientes en bares, restaurantes y hoteles, sirviendo alimentos y bebidas y asegurando una experiencia satisfactoria.",
      },
      {
        nombre: "Cocineras/os",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fde9/RElTRVdFQg==/COCINEROS%20ASALARIADOS.pdf",
        descripcion:
          "Preparan y cocinan platos siguiendo recetas y estándares de calidad, cuidando la presentación y el sabor.",
      },
      {
        nombre: "Ayudantes de cocina",
        link: "https://www.sepe.es/dam/jcr:406f5d19-b84a-4166-8d60-3a2edd56a989/Ayudantes_cocina.pdf",
        descripcion:
          "Asisten en la preparación de alimentos, limpieza y organización de la cocina, siguiendo indicaciones del cocinero.",
      },
      {
        nombre: "Personal de limpieza de oficinas, hoteles y similares",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdc8/RElTRVdFQg==/PERSONAL%20DE%20LIMPIEZA%20DE%20OFICINAS,%20HOTELES%20Y%20OTROS%20ESTABLECIMIENTO%20SIMILARES.pdf",
        descripcion:
          "Se encargan de mantener la higiene y el orden en habitaciones, oficinas y zonas comunes.",
      },
      {
        nombre: "Recepcionistas de hotel",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fde8/RElTRVdFQg==/RECEPCIONISTAS%20DE%20HOTEL.pdf",
        descripcion:
          "Atienden a los huéspedes en la recepción, gestionan reservas y ofrecen información y asistencia.",
      },
    ],
    siguienteTribu: "informacion",
  },
  {
    id: "informacion",
    nombre: "Información y comunicaciones",
    tribu: "Incas Mensajeros del Viento",
    descripcion:
      "“Los Incas dominan el arte de enviar mensajes a través del aire, de la luz y de las señales invisibles. Son los portadores de noticias, ideas e historias. Su cultura se basa en la conexión: creen que unir mentes y corazones es tan vital como el alimento. En sus festivales, liberan cometas y globos que representan la comunicación entre los pueblos.”",
    imagen: InfoIcon,
    desbloqueada: false,
    reto: {
      tipo: "multiple-choice",
      preguntas: [
        {
          enunciado:
            "¿Cuál de estas tecnologías se considera de comunicación masiva?",
          opciones: ["Teléfono fijo", "Televisión", "Walkie-talkie"],
          respuestaCorrecta: "Televisión",
        },
        {
          enunciado: "El protocolo HTTP se utiliza principalmente para:",
          opciones: [
            "Navegar por páginas web",
            "Hacer llamadas telefónicas",
            "Enviar mensajes de texto",
          ],
          respuestaCorrecta: "Navegar por páginas web",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Técnicas/os en operaciones de sistemas informáticos",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdb5/RElTRVdFQg==/T_CNICOS%20EN%20OPERACIONES%20DE%20SISTEMAS%20INFORM_TICOS.pdf",
        descripcion:
          "Instalan, configuran y mantienen sistemas informáticos y redes locales, asegurando su funcionamiento óptimo.",
      },
      {
        nombre: "Analistas, programadoras/es y diseñadoras/es Web y multimedia",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdbe/RElTRVdFQg==/ANALISTA%20Y%20DISE%C3%91ADORES%20DE%20SOFTWARE%20Y%20MULTIMEDIA.pdf",
        descripcion:
          "Desarrollan, programan y diseñan aplicaciones web y contenidos multimedia adaptados a diferentes dispositivos.",
      },
      {
        nombre: "Técnicas/os en redes",
        link: "https://sepe.es/dam/jcr:ae4d8191-f416-467e-86e2-d808653fd7dc/Tecnicos_en_redes.pdf",
        descripcion:
          "Diseñan, instalan y administran redes de comunicación, resolviendo problemas de conectividad y seguridad.",
      },
      {
        nombre: "Analistas y diseñadoras/es de software y multimedia",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdbe/RElTRVdFQg==/ANALISTA%20Y%20DISE%C3%91ADORES%20DE%20SOFTWARE%20Y%20MULTIMEDIA.pdf",
        descripcion:
          "Analizan necesidades y desarrollan soluciones de software, además de diseñar entornos interactivos.",
      },
      {
        nombre: "Diseñadoras/es y administradoras/es de bases de datos",
        link: "https://sepe.es/dctm/perfiles:09019af48024fd7e/RElTRVdFQg==/PROFESIONALES%20TECNOLOGIAS%20DE%20LA%20INFORMACION.pdf",
        descripcion:
          "Organizan, mantienen y optimizan bases de datos para un acceso eficiente y seguro a la información.",
      },
    ],
    siguienteTribu: "inmobiliarias",
  },
  {
    id: "inmobiliarias",
    nombre: "Actividades inmobiliarias",
    tribu: "Guaraníes Dueños de la Llave",
    descripcion:
      "“Los Guaraníes son los guardianes de hogares, tierras y espacios de convivencia. Su símbolo es la llave, porque para ellos cada puerta abierta representa una oportunidad. Custodian las aldeas y aconsejan a las tribus sobre cómo aprovechar y cuidar el territorio. Su cultura valora la seguridad y la pertenencia: creen que un lugar propio es el inicio de toda historia.”",
    imagen: InmoIcon,
    desbloqueada: false,
    reto: {
      tipo: "clasificar",
      instrucciones:
        "Clasifica cada elemento como 'Tipo de vivienda' o 'Espacio comercial'.",
      elementos: [
        "Apartamento",
        "Chalet",
        "Local de tienda",
        "Nave industrial",
        "Piso",
      ],
      categorias: {
        "Tipo de vivienda": ["Apartamento", "Chalet", "Piso"],
        "Espacio comercial": ["Local de tienda", "Nave industrial"],
      },
    },
    profesiones: [
      {
        nombre: "Mantenedoras/es y conserjes de edificios",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fdab/RElTRVdFQg==/CONSERJES%20DE%20EDIFICIOS.pdf",
        descripcion:
          "Se encargan de la supervisión, mantenimiento y funcionamiento de las instalaciones de un edificio.",
      },
      {
        nombre: "Agentes inmobiliarios",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fda9/RElTRVdFQg==/AGENTES%20Y%20ADMINISTRADORES%20DE%20LA%20PROPIEDAD%20INMOBILIARIA.pdf",
        descripcion:
          "Intermedian en operaciones de compra, venta y alquiler de propiedades, asesorando a clientes y negociando acuerdos.",
      },
      {
        nombre: "Analistas de inversiones",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fde2/RElTRVdFQg==/ASESORES%20FINANCIEROS%20Y%20EN%20INVERSIONES.pdf",
        descripcion:
          "Evalúan oportunidades de inversión, analizando riesgos y rentabilidad para recomendar las mejores opciones.",
      },
      {
        nombre: "Tasadoras/es (vivienda)",
        link: "https://www.sepe.es/dctm/perfiles:09019af48026087a/RElTRVdFQg==/Perfiles%20de%20la%20Oferta%20de%20Empleo%202024.pdf",
        descripcion:
          "Determinan el valor de mercado de propiedades residenciales o comerciales para compraventa, hipotecas o seguros.",
      },
      {
        nombre: "Administradoras/es de fincas",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fda9/RElTRVdFQg==/AGENTES%20Y%20ADMINISTRADORES%20DE%20LA%20PROPIEDAD%20INMOBILIARIA.pdf",
        descripcion:
          "Gestionan comunidades de propietarios y el mantenimiento de inmuebles, asegurando el cumplimiento de normativas.",
      },
    ],
    siguienteTribu: "ciencia",
  },
  {
    id: "ciencia",
    nombre: "Actividades profesionales, científicas y técnicas",
    tribu: "Quechuas Sabios de la Montaña",
    descripcion:
      "“A los Quechuas se los reconoce por su sabiduría y su búsqueda incansable del conocimiento. Habitan en lo alto de las montañas, donde observan el cielo y estudian los misterios de la naturaleza. Su cultura rinde culto a la investigación y a la precisión: cada descubrimiento es compartido con las demás tribus, porque creen que la ciencia solo cobra sentido cuando ilumina a todos.”",
    imagen: CienIcon,
    desbloqueada: false,
    reto: {
      tipo: "verdadero-falso",
      preguntas: [
        {
          enunciado:
            "El método científico implica observar, formular hipótesis y experimentar.",
          respuestaCorrecta: "Verdadero",
        },
        {
          enunciado:
            "En ciencia, una teoría comprobada deja de poder ser cuestionada.",
          respuestaCorrecta: "Falso",
        },
      ],
    },
    profesiones: [
      {
        nombre:
          "Técnicas/os en prevención de riesgos laborales y salud ambiental",
        link: "https://www.sepe.es/dam/jcr:a628d080-ec58-4c18-b8a7-97c674fdcf3d/Tecnicos_en_Prevencion_de_Riesgos_Laborales_y_Salud_Ambiental.pdf",
        descripcion:
          "Evalúan y controlan los riesgos en el entorno laboral, implementando medidas para prevenir accidentes y mejorar la salud ambiental.",
      },
      {
        nombre: "Técnicas/os de control de calidad",
        link: "https://sepe.es/dam/jcr:4f404f85-f290-4f07-99cb-dc6a3f571613/Tecnicos_en_control_de_calidad.pdf",
        descripcion:
          "Supervisan procesos y productos para asegurar que cumplen con las normativas y estándares de calidad.",
      },
      {
        nombre: "Azafatas/os de tierra",
        link: "https://www.sepe.es/dctm/perfiles:09019af480260fbf/RElTRVdFQg==/AZAFATOS/AS%20DE%20TIERRA%20.pdf",
        descripcion:
          "Atienden a pasajeros en aeropuertos, gestionando facturación, embarque y ofreciendo información y asistencia.",
      },
      {
        nombre: "Teleoperadoras/es",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fda2/RElTRVdFQg==/VENDEDORES%20A%20DOMICILIO%20Y%20OPERADORES%20DE%20TELEMARKETING.pdf",
        descripcion:
          "Realizan llamadas o atienden a clientes por teléfono para ofrecer productos, servicios o asistencia.",
      },
    ],
    siguienteTribu: "administracion",
  },
  {
    id: "administracion",
    nombre: "Actividades administrativas y servicios auxiliares",
    tribu: "Tarahumaras Chamanes del Papeleo",
    descripcion:
      "“Los Tarahumaras son guardianes del orden. Entre pergaminos, sellos y registros, organizan la vida del planeta. Aunque su trabajo parece invisible, todas las tribus dependen de ellos. Visten con túnicas llenas de símbolos y numerales, recordando que cada dato es sagrado. Su cultura venera la claridad y la transparencia: creen que el caos se combate con reglas claras y justas.”",
    imagen: AdminIcon,
    desbloqueada: false,
    reto: {
      tipo: "ordenar-secuencia",
      preguntas: [
        {
          enunciado:
            "Ordena los pasos habituales para archivar un documento en una oficina.",
          opciones: [
            "Clasificar por tipo",
            "Etiquetar",
            "Colocar en carpeta",
            "Registrar en inventario",
            "Guardar en archivo",
          ],
          respuestaCorrecta: [
            "Clasificar por tipo",
            "Registrar en inventario",
            "Etiquetar",
            "Colocar en carpeta",
            "Guardar en archivo",
          ],
        },
      ],
    },
    profesiones: [
      {
        nombre: "Trabajador social",
        link: "https://www.sepe.es/dam/jcr:99b1e736-aaef-4c43-be6b-691b7987ed3a/Profesionales_del_trabajo_y_de_la_educacion_social.pdf",
        descripcion:
          "Ayuda a personas y comunidades a mejorar su bienestar y resolver problemas sociales, coordinando recursos y servicios.",
      },
      {
        nombre: "Empleados administrativos sin tareas de atención al público",
        link: "https://www.sepe.es/dam/jcr:4c98d3b0-5be0-434c-bd31-b31f5e9e3bdd/4309_2019.pdf",
        descripcion:
          "Realizan tareas administrativas internas como gestión de archivos, datos y documentos sin interacción directa con el público.",
      },
      {
        nombre:
          "Vigilantes de seguridad y similares habilitados para ir armados",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd77/RElTRVdFQg==/PERSONAL%20DE%20SEGURIDAD%20PRIVADA.pdf",
        descripcion:
          "Protegen personas, bienes e instalaciones, utilizando armas de fuego cuando la normativa lo permite.",
      },
      {
        nombre:
          "Trabajadores cualificados en huertas, invernaderos, viveros y jardines",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd9c/RElTRVdFQg==/TRABAJADORES%20CUALIFICADOS%20EN%20ACTIVIDADES%20AGRICOLAS.pdf",
        descripcion:
          "Cultivan, cuidan y mantienen plantas y cultivos en entornos agrícolas especializados.",
      },
      {
        nombre: "Repartidores, recadistas y mensajeros a pie",
        link: "https://sepe.es/SiteSepe/contenidos/observatorio/perfiles/pdf/Repartidores_a_domicilio_a_pie_o_en_vehiculo_no_motorizado.pdf",
        descripcion:
          "Entregan paquetes, mensajes o productos a pie o mediante transporte no motorizado.",
      },
    ],
    siguienteTribu: "educacion",
  },
  {
    id: "educacion",
    nombre: "Educación",
    tribu: "Hopi Maestros de la Palabra",
    descripcion:
      "Guardianes de la palabra y el conocimiento, los Guaraníes del Saber transmiten historias, técnicas y aprendizajes que fortalecen a su pueblo.",
    imagen: EduIcon,
    desbloqueada: false,
    reto: {
      tipo: "relacionar",
      instrucciones:
        "Relaciona cada herramienta educativa con su uso principal.",
      columnaA: [
        "Pizarra",
        "Libro de texto",
        "Proyector",
        "Plataforma online",
        "Cuaderno",
      ],
      columnaB: [
        "Tomar apuntes",
        "Exponer contenido visual",
        "Presentar lecciones en clase",
        "Acceder a recursos y tareas",
        "Consultar información estructurada",
      ],
      respuestaCorrecta: {
        Pizarra: "Presentar lecciones en clase",
        "Libro de texto": "Consultar información estructurada",
        Proyector: "Exponer contenido visual",
        "Plataforma online": "Acceder a recursos y tareas",
        Cuaderno: "Tomar apuntes",
      },
    },
    profesiones: [
      {
        nombre: "Profesores de enseñanza primaria, secundaria y universitaria",
        link: "https://www.sepe.es/dctm/perfiles:09019af480260fbd/RElTRVdFQg==/PROFESORES%20DE%20ENSE%C3%91ANZA%20SECUNDARIA.pdf",
        descripcion:
          "“Los Hopi son narradores, maestros y guías de la memoria. Bajo la sombra de sus árboles sagrados, cuentan historias y transmiten saberes a las nuevas generaciones. Su cultura valora la enseñanza como un legado que nunca termina: creen que cada palabra compartida se convierte en semilla de futuro. Sus ceremonias son círculos de aprendizaje, donde nadie enseña sin aprender.”",
      },
      {
        nombre: "Técnicos en educación infantil",
        link: "https://sepe.es/dam/jcr:d9a80588-c10d-4fd9-a03e-a7d1c8e094bc/Tecnicos_educacion_infantil.pdf",
        descripcion:
          "Cuidan y estimulan el aprendizaje temprano de niños en edad preescolar.",
      },
      {
        nombre: "Profesores de inglés",
        link: "https://sepe.es/dam/jcr:4cf6998f-839a-4597-9f14-dbe9a8e417e2/Profesores_Ensenanza_no_reglada_de_idiomas.pdf",
        descripcion:
          "Enseñan el idioma inglés a estudiantes de distintas edades y niveles.",
      },
      {
        nombre: "Profesores de formación profesional en mecánica",
        link: "https://www.sepe.es/dam/jcr:ba9c0133-d568-4faa-8f36-3c2f7fd71352/Tecnicos_en_mecanica.pdf",
        descripcion:
          "Forman a estudiantes en el manejo y reparación de maquinaria y sistemas mecánicos.",
      },
      {
        nombre: "Agentes comerciales especializados en educación",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fddc/RElTRVdFQg==/AGENTES%20Y%20REPRESENTANTES%20COMERCIALES.pdf",
        descripcion:
          "Promocionan y venden productos o servicios educativos a instituciones y particulares.",
      },
    ],
    siguienteTribu: "sanidad",
  },
  {
    id: "sanidad",
    nombre: "Actividades sanitarias y de servicios sociales",
    tribu: "Chasca Sanadores de la Luz",
    descripcion:
      "“Los Chasca caminan entre la vida y la fragilidad, curando heridas del cuerpo y del espíritu. Se reconocen por llevar lámparas que nunca se apagan, símbolo de la esperanza. Su cultura se basa en la compasión y el servicio: creen que cuidar a los vulnerables es la forma más alta de sabiduría. Allí donde hay dolor, los Chasca encienden la luz de la vida.”",
    imagen: SaniIcon,
    desbloqueada: false,
    reto: {
      tipo: "encuentra-impostor",
      preguntas: [
        {
          enunciado: "¿Cuál de estos NO es un profesional sanitario?",
          opciones: ["Médico", "Enfermero", "Arquitecto"],
          respuestaCorrecta: "Arquitecto",
        },
        {
          enunciado:
            "¿Cuál de estos NO se utiliza habitualmente en un hospital?",
          opciones: ["Estetoscopio", "Bisturí", "Regla de carpintero"],
          respuestaCorrecta: "Regla de carpintero",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Auxiliares de enfermería",
        link: "https://www.sepe.es/dam/jcr:88725df7-e559-4ed5-ac9a-491d90d722b9/Auxiliares_enfermeria.pdf",
        descripcion:
          "Brindan apoyo básico a enfermeros y médicos en la atención de pacientes.",
      },
      {
        nombre: "Enfermeros",
        link: "https://www.sepe.es/dam/jcr:a214f4c2-edab-4af1-89a1-ad352a84cea4/Enfermeros_no_especializados.pdf",
        descripcion:
          "Profesionales que proporcionan cuidados integrales de salud a pacientes.",
      },
      {
        nombre: "Trabajadores de los cuidados (sociosanitarios)",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd9f/RElTRVdFQg==/TRABAJADORES%20DE%20LOS%20CUIDADOS%20A%20LAS%20PERSONAS.pdf",
        descripcion:
          "Atienden las necesidades básicas de personas dependientes o en riesgo de exclusión.",
      },
      {
        nombre: "Cuidadores de niños en guarderías y centros educativos",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd9f/RElTRVdFQg==/TRABAJADORES%20DE%20LOS%20CUIDADOS%20A%20LAS%20PERSONAS.pdf",
        descripcion:
          "Cuidan y supervisan el desarrollo de niños en entornos educativos y recreativos.",
      },
      {
        nombre: "Monitores de actividades recreativas y de entretenimiento",
        link: "https://www.sepe.es/dam/jcr:74c15950-98df-4be9-acf9-7743f19b9c07/Animadores_de_tiempo_libre.pdf",
        descripcion:
          "Organizan y dinamizan actividades lúdicas y recreativas para grupos.",
      },
    ],
    siguienteTribu: "arte",
  },
  {
    id: "arte",
    nombre: "Actividades artísticas, recreativas y de entretenimiento",
    tribu: "Yaquis Creadores de Sueños",
    descripcion:
      "“Los Yaquis pintan, cantan, bailan y narran mundos imposibles. Su misión es mantener vivo el espíritu del planeta a través del arte y la creatividad. Sus aldeas son un estallido de colores, música y representaciones. Creen que el entretenimiento no es un lujo, sino un alimento del alma. En sus festivales, todas las tribus se reúnen para celebrar la imaginación.”",
    imagen: ArtiIcon,
    desbloqueada: false,
    reto: {
      tipo: "completar-frases",
      preguntas: [
        {
          enunciado:
            "El ________ es la técnica de pintar sobre paredes húmedas con pigmentos naturales.",
          opciones: ["Fresco", "Acrílico", "Óleo"],
          respuestaCorrecta: "Fresco",
        },
        {
          enunciado:
            "En música, el compás indica el número de ________ por cada medida.",
          opciones: ["Notas", "Tiempos", "Instrumentos"],
          respuestaCorrecta: "Tiempos",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Instructores de actividades deportivas",
        link: "https://www.sepe.es/dctm/perfiles:09019af480260fc3/RElTRVdFQg==/ENTRENADORES/AS,%20_RBITROS/AS%20E%20INSTRUCTORES/AS%20DEPORTIVOS/AS%20.pdf",
        descripcion:
          "Forman y entrenan a personas o grupos en distintas disciplinas deportivas.",
      },
      {
        nombre: "Bañistas-socorristas",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd87/RElTRVdFQg==/SOCORRISTAS.pdf",
        descripcion:
          "Garantizan la seguridad de los bañistas y responden ante emergencias acuáticas.",
      },
      {
        nombre: "Animadores comunitarios",
        link: "https://www.sepe.es/dam/jcr:74c15950-98df-4be9-acf9-7743f19b9c07/Animadores_de_tiempo_libre.pdf",
        descripcion:
          "Promueven actividades para mejorar la integración y la vida comunitaria.",
      },
      {
        nombre: "Técnicos de sonido y cámara",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fde7/RElTRVdFQg==/T_CNICOS%20DE%20GRABACI_N%20AUDIOVISUAL.pdf",
        descripcion:
          "Se encargan del registro y control de sonido e imagen en producciones.",
      },
      {
        nombre: "Guías turísticos",
        link: "https://www.sepe.es/dctm/perfiles:09019af48024fd5a/RElTRVdFQg==/GUIAS%20TURISTICOS.pdf",
        descripcion:
          "Orientan a turistas y visitantes transmitiendo información cultural y geográfica.",
      },
    ],
        siguienteTribu: "otros",
  },
  {
    id: "otros",
    nombre: "Otros",
    tribu: "Totones Dueños de Todo un Poco",
    descripcion:
      "“Los Totones se ocupan de los aspectos más diversos y delicados de la vida: desde la belleza del presente hasta el cuidado en la despedida final. Su cultura mezcla rituales de transformación con ceremonias de respeto a la muerte. Son versátiles y sabios, porque entienden que cada etapa de la vida merece atención y cuidado. Para ellos, no hay tarea pequeña si ayuda a preservar la dignidad.”",
    imagen: OtroIcon,
    desbloqueada: false,
    reto: {
      tipo: "multiple-choice",
      preguntas: [
        {
          enunciado:
            "¿Cuál de estas actividades entra en la categoría de 'otros servicios'?",
          opciones: ["Peluquería", "Cultivo de maíz", "Producción de cemento"],
          respuestaCorrecta: "Peluquería",
        },
        {
          enunciado: "Un taller de reparación de bicicletas pertenece a:",
          opciones: ["Servicios", "Industria", "Agricultura"],
          respuestaCorrecta: "Servicios",
        },
      ],
    },
    profesiones: [
      {
        nombre: "Operadores de máquinas de lavandería y tintorería",
        link: "https://www.sepe.es/dam/jcr:044db129-1423-468b-a041-e2289f3ec4ce/Operadores_de_maquinas_de_lavanderia_y_tintoreria.pdf",
        descripcion:
          "Manejan equipos para el lavado, secado y planchado de ropa y textiles.",
      },
      {
        nombre: "Peluqueros",
        link: "https://www.sepe.es/dam/jcr:02958c9f-af1d-435e-b1a5-b379df78beb0/Peluqueros_especialistas_tratamientos_estetica.pdf",
        descripcion:
          "Cortan, peinan y realizan tratamientos capilares y de estética.",
      },
      {
        nombre: "Especialistas en tratamientos de estética, bienestar y afines",
        link: "https://www.sepe.es/dctm/perfiles:09019af480261101/RElTRVdFQg==/ESPECIALISTAS%20EN%20TRATAMIENTOS%20DE%20EST_TICA%20Y%20BIENESTAR%20Y%20AFINES%20.pdf",
        descripcion:
          "Aplican tratamientos para el cuidado y bienestar físico y estético.",
      },
      {
        nombre: "Empleados de pompas fúnebres",
        link: "https://www.sepe.es/HomeSepe/es/que-es-observatorio/deteccion-necesidades-formativas/buscador-necesidades-formativas/resultados-busqueda/detalle-necesidades-formativas.html?idOcu=5892",
        descripcion: "Organizan y realizan servicios funerarios.",
      },
      {
        nombre: "Embalsamadores",
        link: "https://sede.sepe.gob.es/es/portaltrabaja/resources/pdf/especialidades/SANP0108.pdf",
        descripcion: "Preparan cuerpos para su conservación y exposición.",
      },
    ],
  },
];
