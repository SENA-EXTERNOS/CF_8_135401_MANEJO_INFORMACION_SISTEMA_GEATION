<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán los requisitos aplicables de la normativa ambiental, la normativa de calidad, la norma de seguridad, la norma de producto y las normas técnicas y normas obligatorias. Se estudiarán los requisitos legales y, para finalizar, se abordará el concepto de matriz legal y la técnica para su elaboración.

    .row.mb-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mb-5(data-aos="fade-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/_BrXH7L3IZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
