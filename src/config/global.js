export default {
  global: {
    componenteFormativo: 'Identificación de los requisitos normativos',
    descripcionCurso:
      'En el marco de las obligaciones impuestas a los empleadores, existe una matriz legal que recopila los requisitos normativos aplicables a la organización correspondiente, según sus objetivos y actividad productiva. Una vez cumplido este conjunto de normas, se debe prestar especial atención a la resolución de las dudas que surjan, para lo cual es importante la asesoría pertinente del caso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Matriz de requisitos legales o matriz legal',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Requisitos legales para los diferentes sistemas de gestión',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Matriz de requisitos legales o matriz legal',
      referencia:
        'PREVENT SGSST. (2019). <i>COMO implementar la MATRIZ LEGAL para el SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-jY2pm2Kfds&t=1s',
    },
    {
      tema: 'Normativa',
      referencia: 'Virtual Training Lteam. (2015).<i> ISO 9001:2015</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TEKS9R0nLEY',
    },
    {
      tema: 'Requisitos legales para los diferentes sistemas de gestión',
      referencia:
        'ISOTools. (s.f.). <i>Herramientas tecnológicas para la gestión de GRC</i>.',
      tipo: 'Artículo',
      link:
        'https://www.isotools.org/2020/10/30/herramientas-tecnologicas-para-la-gestion-de-grc/',
    },
    {
      tema: 'Normativa',
      referencia:
        'Procem Consultores. (2022). <i>Pasos para implementar un SIG (Sistema Integrado de Gestión)</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1KT7lALoIdI',
    },
  ],
  glosario: [
    {
      termino: 'ISO 14001:2015',
      significado:
        'tiene como objetivo facilitar a las organizaciones el diseño e implementación exitosa de un sistema de gestión ambiental, bajo criterios de eficacia.',
    },
    {
      termino: 'ISO 9001:2015',
      significado:
        'esta norma internacional promueve la adopción de un enfoque a procesos al desarrollar, implementar y mejorar la eficacia de un sistema de gestión de la calidad.',
    },
    {
      termino: 'Legislación',
      significado: 'conjunto de las leyes de un país.',
    },
    {
      termino: 'Matriz legal',
      significado:
        'Es la compilación de los requisitos normativos exigibles a la empresa acorde con las actividades propias e inherentes de su actividad productiva.',
    },
    {
      termino: 'Normatividad',
      significado:
        'se refiere a reglas o leyes que están establecidas en una organización o grupo.',
    },
    {
      termino: 'Recursos',
      significado:
        'elementos materiales o intelectuales que son necesarios para el desarrollo de un proceso.',
    },
    {
      termino: 'Requisito',
      significado:
        'necesidad o expectativa establecida, generalmente implícita u obligatoria.',
    },
    {
      termino: 'Riesgos',
      significado:
        'situación no deseada que puede generar un impacto en el logro de los objetivos.',
    },
    {
      termino: 'Seguridad y Salud en el Trabajo – SST',
      significado:
        'la disciplina que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores.',
    },
  ],
  referencias: [
    {
      referencia:
        'ATCAL S.A.S. (s.f.). <i>Normas que exigen el cumplimiento de requisitos legales.</i>',
      link:
        'https://www.implementandosgi.com/sistemas-de-gestion/normas-que-exigen-el-cumplimiento-de-requisitos-legales/',
    },
    {
      referencia:
        'Palacios, D. (2021). <i>Los 7 tipos de empresas y su clasificación</i>',
      link: 'https://blog.hubspot.es/sales/tipos-de-empresas',
    },
    {
      referencia:
        'ISOTools. (s.f.). <i>Herramientas tecnológicas para la gestión de GRC.</i>',
      link:
        'https://www.isotools.org/2020/10/30/herramientas-tecnologicas-para-la-gestion-de-grc/',
    },
    {
      referencia:
        'Nueva ISO. (2015). <i>Documentos obligatorios en la norma ISO14001:2015.</i>',
      link:
        'https://www.nueva-iso-14001.com/2015/10/documentos-obligatorios-norma-iso140012015/',
    },
    {
      referencia:
        'Nueva ISO. (2016). <i>Documentos obligatorios en la nueva ISO45001:2015.</i>',
      link:
        'https://www.nueva-iso-45001.com/2016/02/los-documentos-obligatorios-en-la-nueva-iso-45001/ ',
    },
    {
      referencia:
        'Ramírez, C. 2009. <i>Fundamentos de administración</i> (3ra ed.). Ecoe Ediciones. ',
      link:
        'https://www.academia.edu/34524753/Fundamentos_de_Administraci%C3%B3n_Carlos_Ram%C3%ADrez_Cardona_3ra_Ed_',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
