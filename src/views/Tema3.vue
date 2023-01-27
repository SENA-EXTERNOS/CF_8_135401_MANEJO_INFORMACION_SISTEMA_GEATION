<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Requisitos legales para los diferentes sistemas de gestión

    .row.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='')

      .col-lg-7
        p Para comenzar, es importante decir que las normas ISO son componentes normativos aceptados a nivel internacional, propuestas por la Organización Internacional para la Estandarización, y aplicadas al diseño e implementación de sistemas de gestión organizacional a nivel público y privado; su objetivo principal se enfoca en el aseguramiento de la calidad, la seguridad y eficiencia en la producción o prestación de servicios que hacen parte de un portafolio empresarial. La aplicación de las normas ISO, contribuye a la efectividad en los procesos de generación de valor, en las organizaciones que las apropian.
        p Estas normas son aplicables a cualquier sector, sin importar su actividad, aportando a la minimización de costos, la reducción de errores e incremento en la productividad. También velan por aumentar los niveles de satisfacción del cliente, a partir del cumplimiento de las expectativas de los usuarios. Además, aportan a la eliminación de barreras, asociadas al comercio internacional, a partir del concepto de ventaja competitiva. 

    .row.mb-3
      p Recuerde que, de acuerdo con su enfoque, las normas ISO pueden clasificarse de la siguiente forma:

    .row.justify-content-center.mb-5
      .col-lg-6
        ImagenInfografica.color-acento-botones.tamano-p-caliente
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')

          .tarjeta.tarjeta--blanca.p-3(x="3%" y="30%" numero="1")
            p Su enfoque se fundamenta en la <b>gestión de la calidad</b>, haciendo especial énfasis en la satisfacción del cliente, la capacidad productiva y la eficiencia en la prestación de servicios, asegurando el cumplimiento de los requerimientos de la organización, tanto a nivel interno, como externo.

          .tarjeta.tarjeta--blanca.p-3(x="87%" y="11%" numero="2")
            p Su enfoque se fundamenta en la <b>gestión ambiental</b>, permite gestionar los recursos de la organización, minimizando su impacto ambiental y asegurando el control de los residuos producto de su operación; propende por el mejoramiento en la imagen de la organización y el cumplimiento de las normativas y leyes vigentes, que se relacionan con aspectos medioambientales.

          .tarjeta.tarjeta--blanca.p-3(x="82%" y="80%" numero="3")
            p Desde el 2018, <b>sustituyó a la OHSAS 18001</b>; su enfoque se fundamenta en la seguridad y la salud en el trabajo y determina los requisitos mínimos a implementar, por parte de las organizaciones en su cotidianidad, con el fin de minimizar los riesgos laborales.
          
          .tarjeta.tarjeta--blanca.p-3(x="16%" y="83%" numero="4")
            p Su enfoque se fundamenta en centrarse en la <b>reducción del consumo</b>, minimización de la huella de carbono, así como también en la reducción de costos, promoviendo el uso de energías sostenibles y la eficiencia energética.

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4
          p Los sistemas de gestión, contribuyen <b>al alcance de los objetivos organizacionales</b> y permiten <b>identificar riesgos</b>, así como también formular <b>acciones preventivas</b>, <b>correctivas</b> y <b>de mejora</b>, fomentando la sostenibilidad y el mejoramiento continuo.

    .row.mb-3
      p Las normas están cimentadas en unos principios básicos en los que se fundamenta todo el sistema de gestión de la calidad, desde un enfoque hacia los sistemas integrados y, a partir de esta lógica, se pretende facilitar la gestión e inclusión de las que se consideren pertinentes para la organización; estas normas poseen una estructura común denominada, #[strong de alto nivel] de normas ISO, la cual facilita dicho proceso.
      p La estructura de alto nivel es una plantilla que permite el desarrollo de normas, conformada con unos títulos de capítulos idénticos y con el mismo número de artículos; y, por lo tanto, presenta la siguiente composición común:

    .row.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
          h4.text-center Capítulo 1
          p.text-center Alcance.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          h4.text-center Capítulo 2
          p.text-center Referencias normativas.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
          h4.text-center Capítulo 3
          p.text-center Términos y definiciones.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
          h4.text-center Capítulo 4
          p.text-center Contexto de la empresa.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img7.svg' alt='AvatarTop')
          h4.text-center Capítulo 5
          p.text-center Liderazgo.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img8.svg' alt='AvatarTop')
          h4.text-center Capítulo 6
          p.text-center Planificación.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
          h4.text-center Capítulo 7
          p.text-center Soporte.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
          h4.text-center Capítulo 8
          p.text-center Operación.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          h4.text-center Capítulo 9
          p.text-center Evaluación del desempeño.

        .tarjeta.tarjeta--morada.p-4
          .row.justify-content-center.mb-3
            .col-10
              img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
          h4.text-center Capítulo 10
          p.text-center Mejora.

    .row.mb-5
      p Es importante entender que la integración de los sistemas de gestión no solo obedece a la estructura, sino que también se incluyen conceptos comunes que facilitan su interacción, a partir de criterios que son compatibles entre sí.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Los requisitos legales y otros, son algunos de los elementos comunes considerados por la estructura de alto nivel de las normas ISO; dichos elementos se encuentran incluidos en los numerales “6.1.3 Determinación de los requisitos legales y otros requisitos” y “9.1.2 Evaluación del cumplimiento”; estos numerales son considerados de “gran complejidad” dado que implican la identificación de los requisitos y normas que sean aplicables, además de otros requisitos que se suscriban y la gestión de su cumplimiento.

    .row.mb-5
      p Es así como parte fundamental del proceso de gestión de los requisitos legales, tiene que ver con su identificación, hecho que está definido y tipificado en la etapa de planificación, incluida como parte de la estructura de alto nivel. Con el fin de lograrlo, es necesario establecer, implementar y mantener procesos que contribuyan al cumplimiento de los requisitos legales, facilitando su acceso de forma sencilla y garantizando su actualización.
      p Es, de esta manera, como la estructura de alto nivel, facilita:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img13.svg', alt='')      

      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Llevar")
            p Llevar o mantener un registro único de requisitos legales que sean aplicables, de conformidad con los tipos de normas ISO implementadas en la organización.

          .row(titulo="Usar")
            p La utilización de una matriz legal integrada, que sea actualizada de forma permanente.

          .row(titulo="Definir")
            p Determinar la información documentada que deberá ser evidenciada, para garantizar el cumplimiento de los requisitos legales relacionados con el sistema de gestión, y dar cumplimiento a los requisitos legales bajo esta lógica.

          .row(titulo="Evitar")
            p Prevenir la duplicidad de información a través del uso unificado de la información documentada, facilitando la alineación y los procesos comunicativos a nivel interno y externo, garantizando coherencia del sistema y la contribución de todos los miembros de la organización y sus sistemas de gestión, a una mejora continua.

    .row.justify-content-center.mb-5
      .col-lg-7
        p Teniendo en cuenta la estructura de alto nivel de las normas ISO y sus alcances, se expone ahora su verificación, la cual debe tener en cuenta el proceso de evaluación del desempeño, a partir del cual se lleva a cabo el seguimiento, medición, análisis y evaluación del cumplimiento de requisitos legales y de diversa naturaleza, con el fin de evitar incumplimientos y tomar acciones que propendan por el logro de los objetivos planteados por la organización, en la etapa de planificación.
        p El proceso de mejora continua de los sistemas de gestión, precisa de una revisión constante de la normativa vigente, además de la actualización de los otros requerimientos del sistema.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img14.svg', alt='')         

    .row.mb-5
      p En relación con los procesos de mejora continua, la identificación, evaluación y seguimiento de las obligaciones legales y demás obligaciones, permite a las organizaciones:

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='')       

      .col-lg-7.mt-5
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Formular acciones de mejora")
            p Formular acciones de mejora, basadas en el cumplimiento de la normativa vigente y aplicable, haciendo uso de las herramientas tendientes a la identificación y evaluación de la ejecución, además de los diferentes tipos de reportes relacionados con la medición de estas acciones.

          .row(numero="2" titulo="Brindar garantías de cumplimiento")
            p Ofrecer una garantía con respecto al cumplimiento de la normativa asociada a los sistemas de gestión y al desarrollo de procesos de mejora continua; de esta manera, las organizaciones estarán encaminadas hacia la obtención de resultados positivos, en caso de auditorías o evaluaciones, a nivel interno y externo.

    .row.justify-content-center.mb-3
          ul.vineta-titulos(data-aos="fade-down-right")
            li
              h2.mb-0.h2-vineta Requerimientos legales Norma ISO 9001:2015

    .row.mb-5
      p La versión más reciente de la norma no contiene un numeral que establezca de manera específica el cumplimiento de requisitos legales; sin embargo, a lo largo de su estructura, algunos numerales requieren del cumplimiento de requisitos específicos, los cuales son obligatorios para optar por la certificación. Por ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p Se enfoca en generar capacidades para proporcionar productos y servicios que satisfagan, de manera regular, los requisitos del cliente y los legales y reglamentarios aplicables. 
          p Pretende incrementar los niveles de satisfacción del cliente, por medio de la aplicación eficaz del sistema, abarcando los procesos relacionados con la mejora continua y el aseguramiento de la calidad, en concordancia con los requisitos del cliente y los legales y reglamentarios aplicables.

    .row.mb-5
      p A continuación, se presentan los <b>numerales de la norma</b> en los que se establece el cumplimiento de los requisitos legales:

    .row.justify-content-center.mb-5
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Contexto de la organización")
            h4 Subnumeral 4.1 Comprensión de la organización y su contexto. 
            p.ps-3.ps-lg-5 #[strong Nota 2.] El conocimiento del contexto externo puede verse facilitado al considerar cuestiones que surgen de los entornos legal, tecnológico, competitivo, de mercado, cultural, social y económico, ya sea internacional, nacional, regional o local.

          .row(titulo="Subnumeral 4.2 Comprensión de las necesidades y expectativas de las partes interesadas")
            p Debido a su efecto o potencial en la capacidad de la organización para proporcionar, regularmente, productos y servicios que satisfagan los requisitos del cliente y los legales y reglamentarios aplicables.

          .row(titulo="Subnumeral 5.1.2 Enfoque al cliente")
            p #[strong a)] Se determinan, se comprenden y se cumplen, de forma consistente, los requisitos del cliente, los legales y reglamentarios aplicables.

          .row(titulo="Subnumeral 8.2.2 Determinación de los requisitos para los productos y servicios")
            p Cuando se determinan los requisitos para los productos y servicios que se van a ofrecer a los clientes, la organización debe asegurarse que:
            p Los requisitos para los productos y servicios se definen, incluyendo: 
            p.ps-3 #[strong a)] cualquier requisito legal y reglamentario aplicable.

          .row(titulo="Subnumeral 8.2.3 Revisión de los requisitos para los productos y servicios")
            p Subnumeral 8.2.3.1 la organización debe llevar a cabo una revisión antes de comprometerse a suministrar productos y servicios a un cliente, para incluir:
            p.ps-3 #[strong d)] Los requisitos legales y reglamentarios adicionales aplicables a los productos y servicios.
     
          .row(titulo="Subnumeral 8.3.3 Entradas para el diseño y desarrollo")
            p La organización debe considerar:
            p.ps-3 #[strong a)] Los requisitos funcionales y de desempeño.
            p.ps-3 #[strong b)] Los requisitos legales y reglamentarios.

          .row(titulo="Subnumeral 8.4.2 Tipo y alcance del control")
            p.ps-3 #[strong c)] Tener en consideración:
            p.ps-3.ps-lg-5 #[strong 1)] El impacto potencial de los procesos, productos y servicios suministrados externamente, en la capacidad de la organización para cumplir regularmente los requisitos del cliente y los legales y reglamentarios aplicables.


          .row(titulo="Subnumeral 8.5.5 Actividades posteriores a la entrega")
            p Al determinar el alcance de las actividades posteriores que se requieren a la entrega, la organización debe considerar:
            p.ps-3 #[strong a)] Los requisitos legales y reglamentarios.

      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img16.svg', alt='') 

    .row.mb-5
      p De manera complementaria, la norma establece como parte del alcance del sistema de gestión, el mantenimiento de información documentada, tal y como se indica en los siguientes numerales:

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4
          p Determinación del alcance del Sistema de Gestión de la Calidad: el alcance del Sistema de Gestión de la Calidad de la organización, debe estar disponible y mantenerse como información documentada.
          p La organización debe conservar la información documentada: cuando sea aplicable: 
          p.ps-3 #[strong a)] sobre los resultados de la revisión.
          p.ps-3 #[strong b)] sobre cualquier requisito nuevo para los productos y servicios.

    .row.justify-content-center.mb-3
          ul.vineta-titulos(data-aos="fade-down-right")
            li
              h2.mb-0.h2-vineta Requerimientos legales Norma ISO 14001:2015

    .row.mb-5
      p Esta norma incluye numerales específicos enfocados en el cumplimiento de los requisitos legales.
      p Conozca, a continuación, cuáles son los numerales y qué establecen: 

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='') 

      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="6.1.3 Requisitos legales y otros requisitos")
            p La organización debe:
            p.ps-3 #[strong a)] determinar y tener acceso a los requisitos legales y otros requisitos relacionados con sus aspectos ambientales.
            p.ps-3 #[strong b)] determinar cómo estos requisitos legales y otros requisitos, se aplican a la organización.
            p.ps-3 #[strong c)] tener en cuenta estos requisitos legales y otros requisitos, cuando se establezca, implemente, mantenga y mejore continuamente, su sistema de gestión ambiental.
            p La organización debe mantener información documentada de sus requisitos legales y otros requisitos.

          .row(titulo="6.1.3 Requisitos legales y otros requisitos")
            p La organización determina con un nivel de detalle suficiente, los requisitos legales y otros requisitos que ha identificado en el apartado. 
            p.ps-3 #[strong 4.2 )] Que son aplicables a sus aspectos ambientales y cómo se aplican a la organización.
            p Los requisitos legales y otros requisitos, incluyen los requisitos legales que la organización debe cumplir, y los demás requisitos que la organización tiene que cumplir o que decide cumplir.

          .row(titulo="4.2 Comprensión de las necesidades y expectativas de las partes interesadas")
            p.ps-3 #[strong c)] Cuáles de estas necesidades y expectativas se convierten en requisitos legales y otros requisitos.

          .row(titulo="5.2 Política Ambiental")
            p La alta dirección debe establecer, implementar y mantener una política ambiental que, dentro del alcance definido de su sistema de gestión ambiental:
            p.ps-3 #[strong a)] Incluya un compromiso para cumplir con los requisitos legales y otros requisitos.

          .row(titulo="6.1.4 Planificación de las acciones")
            p La organización debe planificar:
            p.ps-3 #[strong 2)] Requisitos legales y otros requisitos.

          .row(titulo="7.3 Toma de conciencia")
            p La organización debe asegurarse que las personas que realicen el trabajo bajo el control de la organización, tomen conciencia de: 
            p.ps-3 #[strong a)] Las implicaciones de no satisfacer los requisitos del sistema de gestión ambiental, incluido el incumplimiento de los requisitos legales y otros requisitos de la organización.

          .row(titulo="7.4 Comunicación")
            p Cuando establece sus procesos de comunicación, la organización debe:
            ul.lista-ul
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | Tener en cuenta sus requisitos legales y otros requisitos;
                  li 
                    i.lista-ul__vineta
                    | Igual que la comunicación externa.

          .row(titulo="9.1.1 Evaluación del cumplimiento")
            p La organización debe establecer, implementar y mantener los procesos necesarios para evaluar el cumplimiento de sus requisitos legales y otros requisitos.
            p.ps-3 #[strong a)] determinar la frecuencia con la que se evaluará el cumplimiento.
            p.ps-3 #[strong b)] evaluar el cumplimiento y emprender las acciones que fueran necesarias.
            p.ps-3 #[strong c)] mantener el conocimiento y la comprensión de su estado de cumplimiento.

    .row.mb-5
      p Los requisitos legales mencionados en la norma y que están relacionados con los aspectos ambientales correspondientes a una organización, pueden incluir, en caso de ser aplicables:

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.ps-3 #[strong a)] Requisitos de entidades gubernamentales u otras autoridades pertinentes.
          p.ps-3 #[strong b)] Leyes y reglamentaciones internacionales, nacionales y locales.
          p.ps-3 #[strong c)] Requisitos especificados en permisos, licencias y otras formas de autorización.
          p.ps-3 #[strong d)] Órdenes, reglas u orientaciones emitidas por los organismos de reglamentación.
          p.ps-3 #[strong e)] Sentencias de cortes de justicia o tribunales administrativos.       

    .row.mb-5
      p Los requisitos legales y otros requisitos contemplan, además, algunos requisitos relacionados con las partes interesadas, que involucren al sistema de gestión ambiental que la organización decida adoptar, o que esté en obligación de cumplir. En caso de ser aplicables, pueden abarcar los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4
          ul.lista-ul--color
            li 
              i.fas.fa-circle.color-vineta1
              | Acuerdos con grupos de la comunidad u organizaciones no gubernamentales.
            li 
              i.fas.fa-circle.color-vineta1
              | Acuerdos con autoridades públicas o clientes.
            li 
              i.fas.fa-circle.color-vineta1
              | Requisitos de la organización.
            li 
              i.fas.fa-circle.color-vineta1
              | Principios o códigos de práctica voluntarios.
            li 
              i.fas.fa-circle.color-vineta1
              | Compromisos ambientales o de etiquetado voluntarios.
            li 
              i.fas.fa-circle.color-vineta1
              | Obligaciones que surgen por acuerdos contractuales con la organización.
            li 
              i.fas.fa-circle.color-vineta1
              | Normas pertinentes de la industria o de la organización.

    .row.justify-content-center.mb-3
          ul.vineta-titulos(data-aos="fade-down-right")
            li
              h2.mb-0.h2-vineta Requerimientos legales Norma ISO 45001:2018

    .row.mb-5
      p Al igual que las anteriores, la norma ISO 45001:2018 también contiene numerales relacionados con el cumplimiento de requisitos legales.
      p A continuación, presentamos cada numeral y qué establece: 

    .row.justify-content-center.mb-5
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="6.1.3 Determinación de los requisitos legales y otros requisitos")
            p La organización debe establecer, implementar y mantener procesos para:
            p.ps-3 #[strong a)] Determinar y tener acceso a los requisitos legales y otros requisitos actualizados que son aplicables a sus peligros, riesgos y su SGSST.
            p.ps-3 #[strong b)] Determinar cómo estos requisitos legales y otros requisitos aplican a la organización y qué necesita comunicarse.
            p.ps-3 #[strong c)] Tener en cuenta estos requisitos legales y otros requisitos al establecer, implementar y mejorar de manera continua su sistema de gestión SST.
            p La organización debe mantener información documentada de sus requisitos legales y otros requisitos. 

          .row(titulo="Anexo 6.1.2.3")
            p Los requisitos legales pueden incluir:
            p.mb-4 Legislación (nacional, regional e internacional), incluyendo estatutos y reglamentos y otras normas jurídicas como decretos, permisos, licencias entre otros.
            p Otros requisitos pueden incluir:
            p Requisitos de la organización, contractuales, acuerdos con los empleados y partes interesadas.

          .row(titulo="6.3 Factores de éxito")
            p.ps-3 #[strong k)] El cumplimiento de los requisitos legales y otros requisitos.

          .row(titulo="6.0 Planificación")
            p.ps-3 #[strong 6.1] Acciones para abordar riesgos y oportunidades
            p.ps-3 #[strong 6.1.1] Generalidades
            p.ps-5 Al determinar los riesgos y oportunidades para el SG-SST y sus resultados previstos que es necesario abordar, la organización debe tener en cuenta:
            p.ps-5 *los requisitos legales y otros requisitos #[strong (véase 6.1.3)]

          .row(titulo="6.1.4 Planificación de acciones")
            p La organización debe planificar:
            p.ps-3 #[strong a)] Las acciones para:
            p.ps-5 #[strong 2)] abordar los requisitos legales y otros requisitos #[strong (véase 6.1.3)].

          .row(titulo="7.4 Comunicación")
            p.ps-3 #[strong 7.4.1] Generalidades.
            p.ps-3 #[strong 7.4.3] Comunicación externa
            p.ps-5 Al establecer sus procesos de comunicación, la organización debe: *tener en cuenta sus requisitos legales y otros requisitos.

          .row(titulo="8.1.3 Gestión del cambio")
            p La organización debe asegurarse que sus acuerdos en materia de contratación externa son coherentes con los requisitos legales y otros requisitos.

          .row(titulo="8.1.4.3 Contratación externa")
            p La organización debe establecer procesos para la implementación y el control de los cambios planificados temporales y permanentes, que impactan en el desempeño de la SST, incluyendo:
            p.ps-3 #[strong b)] cambios en los requisitos legales y otros requisitos.

          .row(titulo="9 Evaluación de desempeño")
            p #[strong 9.1] Seguimiento, medición, análisis y evaluación del desempeño
            p.ps-3 #[strong 9.1.1] Generalidades
            p.ps-5 #[strong 1)] el grado en que se cumplen los requisitos legales y otros requisitos.

          .row(titulo="9.1.2 Evaluación del cumplimiento")
            p La organización debe establecer, implementar y mantener procesos para evaluar el cumplimiento con los requisitos legales y otros requisitos. #[strong (véase 6.1.3)].
            p La organización debe:
            p.ps-3 #[strong c)] mantener el conocimiento y la comprensión de su estado de cumplimiento con los requisitos legales y otros requisitos.
            p En relación con la Seguridad y Salud en el Trabajo, el marco jurídico colombiano contempla los siguientes elementos: 
            ul.lista-ul--color
              li 
                i.fas.fa-circle.color-vineta1
                | Decreto 1072 de 2015.
              li 
                i.fas.fa-circle.color-vineta1
                | Resolución 0312 de 2019.           

      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img18.svg', alt='') 

    .row.mb-5
      p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
