import { AgriculturaIcons } from "../src/icons/Icons";
import { IndusIcons } from "../src/icons/Icons";
import { ComerIcon } from "../src/icons/Icons";
import { ConstruIcon } from "../src/icons/Icons";
import { TransIcon } from "../src/icons/Icons";
import { HosteIcon } from "../src/icons/Icons";
import { InfoIcon } from "../src/icons/Icons";
import { InmoIcon } from "../src/icons/Icons";
import { CienIcon } from "../src/icons/Icons";
import { AdminIcon } from "../src/icons/Icons";
import { EduIcon } from "../src/icons/Icons";
import { SaniIcon } from "../src/icons/Icons";
import { ArtiIcon } from "../src/icons/Icons";
import { OtroIcon } from "../src/icons/Icons";

export const tribus = [
  {
    id: "agricultura",
    nombre: "Agricultura",
    contexto: "El empleo agrícola ha disminuido en los últimos años debido a la mecanización y al uso de tecnologías avanzadas para el control de cultivos. Aunque mejora la eficiencia, se reduce la necesidad de mano de obra tradicional y se demandan perfiles más cualificados. A diferencia de otras ramas del sector agrícola, la silvicultura y explotación forestal muestran una evolución positiva en empleo. Este subsegmento se beneficia de políticas medioambientales y de la creciente demanda de gestión sostenible de los recursos naturales.",
    tribu: "Mapuches Guardianes del Territorio",
    descripcion:
      "“Hijos de la tierra fértil, los Mapuches han aprendido a escuchar el murmullo del suelo y el canto de las estaciones. Sus manos hacen brotar semillas que alimentan a todas las tribus.”",
    imagen: AgriculturaIcons,
    desbloqueada: true,
    reto: {
      tipo: "verdadero-falso",
      preguntas: [
        {
          enunciado:
            "Responde: 'A diferencia de la agricultura, las profesiones relacionadas con el cuidado y gestión de los bosques o montes forestales muestran una evolución positiva en empleo.'",
          respuestaCorrecta: "Verdadero",
        },
        {
          enunciado:
            "Responde: 'El empleo agrícola a crecido de manera constante en los últimos años debido al aumento de la población.'",
          respuestaCorrecta: "Falso",
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
    contexto: "El sector industrial español sigue siendo clave en el empleo, destacando ramas como la alimentaria, metalúrgica, automotriz y química. En 2024, los proyectos estratégicos PERTE (Proyectos Estratégicos para la Recuperación y Transformación Económica) impulsan su modernización, con foco en sostenibilidad, digitalización e innovación tecnológica, especialmente en áreas como el vehículo eléctrico, energías renovables y semiconductores. ",
    tribu: "Sioux Forjadores de Acero",
    descripcion:
      "“Los Sioux son maestros del metal y la transformación. De sus talleres salen herramientas, máquinas y objetos que sostienen la vida del planeta.”",
    imagen: IndusIcons,
    desbloqueada: false,
    reto: {
      tipo: "ordenar-secuencia",
      preguntas: [
        {
          enunciado:
            "Ordena las fases básicas en la producción de una tortilla de patatas.",
          opciones: [
            "Se baten los huevos en un bol",
            "Se fríen las patatas",
            "Se pelan y cortan las patatas",
            "Se mezcla todo y se cuaja en la sartén",
            "Se da la vuelta y se sirve",
          ],
          respuestaCorrecta: [
            "Se pelan y cortan las patatas",
            "Se fríen las patatas",
            "Se baten los huevos en un bol",
            "Se mezcla todo y se cuaja en la sartén",
            "Se da la vuelta y se sirve",
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
    contexto: "La alta demanda de vivienda y la rehabilitación de inmuebles impulsan el crecimiento del sector de la construcción en España. Sin embargo, la falta de profesionales cualificados y el envejecimiento de la plantilla dificultan cubrir las vacantes, especialmente en las actividades de edificación y construcción especializada, que lideran la recuperación del sector.",
    tribu: "Zapotecas Arquitectos del Horizonte",
    descripcion:
      "“Constructores de ciudades, puentes y refugios, los Zapotecas miran siempre al horizonte: donde otros ven vacío, ellos ven estructuras posibles.”",
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
      contexto: "El comercio sigue siendo un pilar estratégico de la economía española por su peso en el empleo y su impacto en el PIB. En los últimos años, se ha transformado profundamente por la digitalización y la globalización, lo que ha impulsado el comercio electrónico, la logística inteligente y nuevas formas de consumo conectadas a plataformas digitales.",
    tribu: "Navajos Maestros del Trueque",
    descripcion:
      "“Los Navajos son viajeros del mercado: conocen el valor de cada objeto y el poder de cada intercambio. Su habilidad para negociar los convierte en puentes entre tribus.”",
    imagen: ComerIcon,
    desbloqueada: false,
    reto: {
      tipo: "relacionar",
      instrucciones:
        "Relaciona cada formato de comercio con el ejemplo que mejor lo represente.",
      columnaA: [
        "Hipermercado multinacional",
        "Franquicia de comida",
        "Mercado tradicional",
        "Venta de productos usados",
        "Comercio 100% electrónico",
      ],
      columnaB: [
        "Amazon",
        "Wallapop",
        "Burger King",
        "Tienda de barrio",
        "Carrefour",
      ],
      respuestaCorrecta: {
        "Hipermercado multinacional": "Carrefour",
        "Franquicia de comida": "Burger King",
        "Mercado tradicional": "Tienda de barrio",
        "Venta de productos usados": "Wallapop",
        "Comercio 100% electrónico": "Amazon",
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
    contexto: "El sector de Logística se encuentra en plena transformación, impulsada por importantes tendencias globales. La reducción de la huella de carbono y la adaptación al cambio climático son los más significativos para el 66% y el 50% de las empresas,  respectivamente. En cuanto a las tecnologías clave que pueden redefinir el futuro del sector, destacan la inteligencia artificial, la robótica, la automatización y aquellas que impulsan la transición energética. Por ello, los perfiles profesionales más demandados estarán vinculados a dichas tecnologías.",
    tribu: "Apaches Rutas Sin Fin",
    descripcion:
      "“Los Apaches nunca permanecen demasiado tiempo en un mismo lugar. Sus caravanas cruzan territorios, mares y cielos, asegurando que todo llegue a su destino.”",
    imagen: TransIcon,
    desbloqueada: false,
    reto: {
      tipo: "encuentra-impostor",
      preguntas: [
        {
          enunciado:
            "¿Cuál de las siguientes no es una tecnología clave para el sector?",
          opciones: ["El vapor", "Inteligencia artificial", "Robótica"],
          respuestaCorrecta: "El vapor",
        },
        {
          enunciado:
            "¿Cuál de los siguientes perfiles no está relacionado con el sector?",
          opciones: [
            "Especialistas en vehículos autónomos",
            "Especialistas en vehículos eléctricos",
            "Especialistas en rosquillas",
          ],
          respuestaCorrecta: "Especialistas en rosquillas",
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
    contexto: "El sector de la Hostelería sigue situándose en un escenario favorable. La actividad turística alcanzó los 184.002 millones de euros en 2023, aproximadamente el 12,3% del PIB en España. El Gobierno de España está elaborando la Estrategia de Turismo Sostenible de España 2030, una agenda nacional de turismo para afrontar los retos del sector en el medio y largo plazo, impulsando los tres pilares de la sostenibilidad: socioeconómica, medioambiental y territorial.",
    tribu: "Mayas Anfitriones del Sol",
    descripcion:
      "“Los Mayas dominan el arte de recibir. Sus aldeas son oasis de descanso, donde viajeros de todas las tribus encuentran calor, alimento y hospitalidad.”",
    imagen: HosteIcon,
    desbloqueada: false,
    reto: {
      tipo: "completar-frases",
      preguntas: [
        {
          enunciado:
            "La actividad turística alcanzó los 184.002 millones de euros en 2023, aproximadamente el ______ % del PIB en España.",
          opciones: ["11%", "12,3%", "14%"],
          respuestaCorrecta: "12,3%",
        },
        {
          enunciado:
            "El Gobierno de España está elaborando la Estrategia de Turismo Sostenible de España 2030, una agenda nacional de turismo para afrontar los retos del sector en el medio y largo plazo, impulsando los tres pilares de la sostenibilidad: socioeconómica, medioambiental y:",
          opciones: ["Literaria", "Teritorial", "Artística"],
          respuestaCorrecta: "Teritorial",
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
    contexto: "Dentro de esta sección destaca la actividad de Programación, consultoría y otras actividades informáticas que cuenta con 38.602 empresas activas en 2024, de las cuales más de la mitad son autónomos; también incluye grandes empresas, con más de  53 mil trabajadores. El empleo ha ido aumentando en sectores expuestos a la Inteligencia Artificial; entre las empresas que han adoptado IA predominan las más grandes y las más productivas. El desarrollo de la IA requerirá también la mejora continua de la ciberseguridad.",
    tribu: "Incas Mensajeros del Viento",
    descripcion:
      "“Los Incas dominan el arte de enviar mensajes a través del aire, de la luz y de las señales invisibles. Son los portadores de noticias, ideas e historias.”",
    imagen: InfoIcon,
    desbloqueada: false,
    reto: {
      tipo: "multiple-choice",
      preguntas: [
        {
          enunciado:
            "Responde: 'Big Data se refiere al manejo y análisis de conjuntos de datos tan grandes y complejos que no pueden procesarse con herramientas tradicionales. Ayuda a detectar _______ ________'",
          opciones: [
            "Intrusos en la organización",
            "Patrones y tendencias",
            "Mentiras de los empleados",
          ],
          respuestaCorrecta: "Patrones y tendencias",
        },
        {
          enunciado:
            "Responde: 'Una IA aprende a través de entrenamiento con grandes cantidades de datos. Reconoce patrones en esos datos y ajusta sus modelos internos para mejorar su precisión. La IA genera sus respuestas ______ _______' ",
          opciones: [
            "Desde cero",
            "Consultando a expertas",
            "A partir de patrones",
          ],
          respuestaCorrecta: "A partir de patrones",
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
    contexto: "El mercado inmobiliario español atraviesa una fase de crecimiento moderado, con precios al alza y escasez de oferta frente a una demanda robusta. Las políticas públicas buscan facilitar el acceso a la vivienda a través de ayudas económicas para jóvenes, construcción de vivenda protegida y la rehabilitación de edificios antiguos, en línea con una tendencia hacia la sostenibilidad y la eficiencia energética.",
    tribu: "Guaraníes Dueños de la Llave",
    descripcion:
      "“Los Guaraníes son los guardianes de hogares, tierras y espacios de convivencia. Su símbolo es la llave, porque para ellos cada puerta abierta representa una oportunidad.”",
    imagen: InmoIcon,
    desbloqueada: false,
    reto: {
      tipo: "clasificar",
      instrucciones:
        "Clasifica cada elemento como 'Problemas de vivienda' o 'Posibles soluciones a la vivienda'. A cada categoría le pertenecen 3 elementos.",
      elementos: [
        "Ayudas para el alquiler",
        "Rehabilitación de edificios antiguos",
        "Precios muy altos",
        "Alquileres vacacionales",
        "Creación de vivienda protegida",
        "Escasez de oferta de vivienda",
      ],
      categorias: {
        "Problemas de la vivienda": [
          "Escasez de oferta de vivienda",
          "Alquileres vacacionales",
          "Precios muy altos",
        ],
        "Posibles soluciones": [
          "Creación de vivienda protegida",
          "Rehabilitación de edificios antiguos",
          "Ayudas para el alquiler",
        ],
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
    contexto: "El sector de actividades profesionales, científicas y técnicas está creciendo gracias a la digitalización y al uso de nuevas tecnologías. Profesiones como la consultoría, la investigación de mercados, la ingeniería y la arquitectura tienen cada vez más oportunidades de empleo, sobre todo porque las empresas necesitan servicios especializados para mejorar su competitividad. En el ámbito jurídico, la tecnología (Legal Tech) está cambiando la forma de trabajar. Ahora se usan contratos inteligentes, plataformas en línea para resolver conflictos y herramientas de inteligencia artificial. Esto ayuda a reducir costes y a que los servicios legales sean más accesibles.",
    tribu: "Quechuas Sabios de la Montaña",
    descripcion:
      "“A los Quechuas se los reconoce por su sabiduría y su búsqueda incansable del conocimiento. Habitan en lo alto de las montañas, donde observan el cielo y estudian los misterios de la naturaleza.”",
    imagen: CienIcon,
    desbloqueada: false,
    reto: {
      tipo: "verdadero-falso",
      preguntas: [
        {
          enunciado:
            "Responde: 'El sector profesional ofrece nuevas oportunidades de empleo gracias a la digitalización y los servicios especializados.'",
          respuestaCorrecta: "Verdadero",
        },
        {
          enunciado:
            "Responde: 'La tecnología en el sector jurídico ha dificultado el acceso a los servicios legales'",
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
    contexto: "En 2024, más de 198.000 empresas operan en actividades como oficinas, jardinería, alquiler, agencias de viajes, empleo y seguridad. Seis de cada diez tienen menos de siete años, lo que refleja un sector dinámico y en expansión, aunque con baja longevidad empresarial. Estas actividades han crecido por encima de la media nacional en creación de nuevas empresas.",
    tribu: "Tarahumaras Chamanes del Papeleo",
    descripcion:
      "“Los Tarahumaras son guardianes del orden. Entre pergaminos, sellos y registros, organizan la vida del planeta. Aunque su trabajo parece invisible, todas las tribus dependen de ellos.”",
    imagen: AdminIcon,
    desbloqueada: false,
    reto: {
      tipo: "ordenar-secuencia",
      preguntas: [
        {
          enunciado:
            "Ordena los pasos habituales para redactar y enviar un correo electrónico profesional en una oficina.",
          opciones: [
            "Escribir el cuerpo del mensaje",
            "Revisar que todo esté correcto",
            "Definir el asunto",
            "Añadir destinatarios",
            "Adjuntar documentos si es necesario",
            "Pulsar 'Enviar'",
          ],
          respuestaCorrecta: [
            "Añadir destinatarios",
            "Definir el asunto",
            "Escribir el cuerpo del mensaje",
            "Adjuntar documentos si es necesario",
            "Revisar que todo esté correcto",
            "Pulsar 'Enviar'",
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
    contexto: "La educación en España se adapta a los cambios del mercado laboral, incorporando competencias técnicas y transversales como idiomas, TIC y habilidades blandas. Entre 2020 y 2024, el empleo ha crecido notablemente, con más afiliaciones y contrataciones, especialmente en el sector educativo, donde se reforzó la plantilla docente tras la pandemia.",
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
        "Proyectar una película",
        "Presentar lecciones en clase",
        "Acceso online a recursos y tareas",
        "Consultar información estructurada",
      ],
      respuestaCorrecta: {
        Pizarra: "Presentar lecciones en clase",
        "Libro de texto": "Consultar información estructurada",
        Proyector: "Proyectar una película",
        "Plataforma online": "Acceso online a recursos y tareas",
        Cuaderno: "Tomar apuntes",
      },
    },
    profesiones: [
      {
        nombre: "Profesores de enseñanza primaria, secundaria y universitaria",
        link: "https://www.sepe.es/dctm/perfiles:09019af480260fbd/RElTRVdFQg==/PROFESORES%20DE%20ENSE%C3%91ANZA%20SECUNDARIA.pdf",
        descripcion:
          "Imparten clases en centros educativos siguiendo los planes oficiales en distintos niveles.",
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
    contexto: "El envejecimiento de la población en España está impulsando el crecimiento del sector de los cuidados y la atención sociosanitaria. Este sector demanda cada vez más personal cualificado, con mejores condiciones laborales y formación especializada. La sanidad y el sector geriátrico son un campo ideal para aplicar nuevas tecnologías como la telemedicina, la robótica, la realidad virtual o las aplicaciones móviles. Estas innovaciones permiten mejorar la calidad de vida de los pacientes y optimizar los servicios de salud.",
    tribu: "Chasca Sanadores de la Luz",
    descripcion:
      "“Los Chasca caminan entre la vida y la fragilidad, curando heridas del cuerpo y del espíritu. Se reconocen por llevar lámparas que nunca se apagan, símbolo de la esperanza.”",
    imagen: SaniIcon,
    desbloqueada: false,
    reto: {
      tipo: "encuentra-impostor",
      preguntas: [
        {
          enunciado:
            "¿Cuál de los siguientes NO es un centro de atención sanitaria?",
          opciones: [
            "Hospital público",
            "Residencia geriátrica",
            "Centro comercial",
          ],
          respuestaCorrecta: "Centro comercial",
        },
        {
          enunciado:
            "¿Cuál de los siguientes NO es una innovación aplicada al sector sanitario?",
          opciones: ["Las vacunas", "Gatos robots", "Telemedicina"],
          respuestaCorrecta: "Las vacunas",
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
    contexto: "El sector de los videojuegos en España ha crecido exponencialmente, convirtiéndose en una de las principales industrias culturales. Su impacto va más allá del entretenimiento, generando empleo, exportaciones y formación especializada. En 2024, el sector de los videojuegos superó por primera vez los 2.408 millones de euros de facturación. Por otra parte, con 154 rodajes y más de 218 millones de euros generados en 2024, Canarias se ha convertido en un destino clave para producciones audiovisuales. Este auge ha impulsado el empleo local y dinamizado la economía insular. En sólo un año, este sector ha sido capaz de generar más de 14.000 empleos directos en las islas.",
    tribu: "Yaquis Creadores de Sueños",
    descripcion:
      "“Los Yaquis pintan, cantan, bailan y narran mundos imposibles. Su misión es mantener vivo el espíritu del planeta a través del arte y la creatividad.”",
    imagen: ArtiIcon,
    desbloqueada: false,
    reto: {
      tipo: "completar-frases",
      preguntas: [
        {
          enunciado:
            "Completa la frase: 'En 2024, el sector de los videojuegos superó por primera vez los _______ millones de euros de facturación'",
          opciones: ["5", "2.408", "1.430"],
          respuestaCorrecta: "2.408",
        },
        {
          enunciado:
            "Completa la frase: 'En sólo un año, este sector ha sido capaz de generar más de ________ empleos directos en las islas.'",
          opciones: ["14.000", "9.800", "25.000"],
          respuestaCorrecta: "14.000",
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
    contexto: "La digitalización también está transformando el sector funerario, y una gran parte de la sociedad, especialmente los más jóvenes, exige servicios modernos. Entre los más solicitados se encuentran los servicios funerales vía streaming y la gestión de la comunicación de despedidas a través de redes sociales. Más aún, el 70,3% considera importante el borrado de la huella digital. Por otra parte, el autocuidado se ha convertido en una prioridad para los consumidores. En 2022, el consumo per cápita en cosmética y perfumería alcanzó los 185€, superando cifras prepandemia. El sector ha crecido un 11,3% respecto a 2021, impulsado por la innovación y la diversificación de canales. España es un gran exportador de perfumes, ocupando el segundo puesto a nivel mundial.",
    tribu: "Totones Dueños de Todo un Poco",
    descripcion:
      "“Los Totones se ocupan de los aspectos más diversos y delicados de la vida: desde la belleza del presente hasta el cuidado en la despedida final.”",
    imagen: OtroIcon,
    desbloqueada: false,
    reto: {
      tipo: "multiple-choice",
      preguntas: [
        {
          enunciado:
            "Entre los servicios más valorados dentro del sector funerario se encuentran:",
          opciones: [
            "Catering vegano",
            "Borrado de huella digital",
            "La vida eterna",
          ],
          respuestaCorrecta: "Borrado de huella digital",
        },
        {
          enunciado:
            "España es un gran exportador de perfumes, ocupando el puesto número:",
          opciones: ["Dos", "Diez", "Tercero"],
          respuestaCorrecta: "Dos",
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
