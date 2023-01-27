<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Matriz de requisitos legales o matriz legal

    .row.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='')

      .col-lg-7
        p Antes de dar un concepto claro sobre la matriz de requisitos legales o matriz legal, es pertinente aclarar las preguntas que surgen al abordar este tema.

    .row.mb-5
      p Conozcamos algunas de ellas:

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='')

      .col-lg-6.mt-5
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="¿Qué es?")
            p Es un documento donde se encuentran todas las normas que una empresa debe cumplir legalmente.

          .row(numero="2" titulo="¿Qué contiene?")
            p Los diferentes decretos, leyes y resoluciones que debe cumplir una organización.

          .row(numero="3" titulo="¿A quiénes aplica?")
            p Aplica a todas las personas jurídicas.

          .row(numero="4" titulo="¿Las empresas cumplen las mismas normas?")
            p No, porque una empresa que trabaja con químicos no tiene las mismas normas que una empresa que produce textiles.

    .row.mb-3
      p Ahora, su definición según el Decreto 1072 de 2015 es:

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Es la compilación de los requisitos normativos exigibles a la empresa, acorde con las actividades propias e inherentes de su actividad productiva, los cuales dan lineamientos normativos y técnicos para desarrollar un Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), el cual deberá actualizarse en la medida que sean emitidas nuevas disposiciones aplicables.

    .row.mb-3
      p Y para ampliar el tema, lo invitamos a ver el siguiente video:

    .row.mb-5(data-aos="fade-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-3
      p Teniendo claro qué es una matriz de requisitos legales o matriz legal, a continuación, se da cuenta de cuál es la normatividad para crearla:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='')      

      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Normatividad nacional")
            p Es la normatividad obligatoria a nivel nacional que deben cumplir todas las empresas. 

          .row(titulo="Normatividad departamental")
            p Es la normatividad específica que es emitida por el departamento donde se encuentra la empresa. 

          .row(titulo="Normatividad local")
            p Es la normatividad específica para promover trabajo o situaciones propias, y es emitida por las alcaldías o instituciones municipales. 

          .row(titulo="Normatividad según actividad de la empresa")
            p Es la normatividad específica al tipo de labor y actividad que realiza la empresa. Es importante tener en cuenta que se debe incluir la normatividad ambiental, de acuerdo con el impacto ambiental que genere la actividad de la empresa. 

          .row(titulo="Normatividad técnica sectorial")
            p Son las normas que definen un método específico, de acuerdo con el proceso productivo o la prestación de servicio, que realiza la empresa. 

          .row(titulo="Normatividad SG-SST")
            p De acuerdo con el Decreto 1072 de 2015, se debe identificar la normatividad aplicable a la empresa en SG-SST. 

    .row.mb-3
      p Cuando se tienen claras las normativas que debe seguir quien elabora la matriz legal o de requisitos legales, es momento de centrar la atención, entonces, en los pasos para su elaboración.
      p ¿Cuáles son esos pasos? Conózcalos a continuación:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--amarilla.p-5
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempoB")

    .row.mb-5
      p La matriz de requisitos legales debe incluir, en su formato, una serie de información dispuesta en columnas. A continuación, se presentan el diseño, la distribución y las particularidades de dicho formato:

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='')

      .tarjeta.tarjeta--blanca.p-3(x="73%" y="0%" numero="1")
        p En el encabezado se incluye la identificación de la empresa y el documento. Puede incluir el logo o solo el nombre de la empresa, o tener las dos opciones y, en algunos casos, se incluye el NIT.

      .tarjeta.tarjeta--blanca.p-3(x="52%" y="42%" numero="2")
        p En este punto se coloca el título del documento; en este caso, Matriz de requisitos legales o Matriz legal; poner la fecha de elaboración, de actualización y el nombre del responsable de la actualización.

      .tarjeta.tarjeta--blanca.p-3(x="13%" y="71%" numero="3")
        p Aquí se coloca una clasificación de la norma, si es general o específica.

      .tarjeta.tarjeta--blanca.p-3(x="20%" y="100%" numero="4")
        p Se debe indicar el tipo de la norma (decreto, resolución, ley, acuerdo, entre otros), con el número de la norma y el año en el cual fue expedida.

      .tarjeta.tarjeta--blanca.p-3(x="30%" y="100%" numero="5")
        p En este caso, el año de emisión se coloca en otra columna; pueden utilizarse las dos formas, tener toda la información en la columna norma, o generar otra para el año de emisión.

      .tarjeta.tarjeta--blanca.p-3(x="47%" y="100%" numero="6")
        p Se deben enumerar los artículos aplicables a la norma, o sea, aquellos de los cuales se debe dejar evidencia de su cumplimiento.

      .tarjeta.tarjeta--blanca.p-3(x="55%" y="100%" numero="7")
        p Se debe colocar un texto resumen sobre lo que trata la norma o los artículos aplicables.

      .tarjeta.tarjeta--blanca.p-3(x="65%" y="100%" numero="8")
        p Aquí se debe incluir: la descripción de la evidencia y, luego, en las columnas siguientes, si existió una actualización y el responsable que generó la evidencia.



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo:
          'Identificar la normatividad legal aplicable y buscar en fuentes apropiadas',
        texto:
          'Identificar la normatividad nacional, departamental, local, según actividad de la empresa y SG-SST. ',
        icono: require('@/assets/curso/temas/tema1/img4.svg'),
      },
      {
        titulo:
          'Crear un formato claro y registrar actividades como evidencia de cumplimiento',
        texto:
          'La matriz legal debe contener:<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Norma.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Año de publicación.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Descripción del requisito.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Título y artículos aplicables.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Plan de acción o actividades.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Evidencia de cumplimiento.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Fecha de seguimiento.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Observaciones',
        icono: require('@/assets/curso/temas/tema1/img5.svg'),
      },
      {
        titulo: 'Hacer seguimiento al desarrollo de las actividades',
        texto:
          'Es importante que la persona que se designe como responsable del seguimiento de la matriz legal, debe demostrar el cumplimiento de toda la legislación.<br>Para demostrar que la empresa realiza el cumplimiento, se pueden realizar charlas, reuniones, capacitaciones u otras actividades.',
        icono: require('@/assets/curso/temas/tema1/img6.svg'),
      },
      {
        titulo: 'Actualizar y divulgar la información',
        texto:
          'La matriz legal se debe actualizar cuando:<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Se expida, modifique o elimine un requisito existente.<br><i class="fa fa-circle" style="font-size:8px;color:darkblue"></i> Se incluyan nuevas líneas de negocio o se modifiquen procesos que apliquen requisitos legales.',
        icono: require('@/assets/curso/temas/tema1/img7.svg'),
      },
    ],
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
