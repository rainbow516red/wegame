<template>
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
    </b-col>

    <b-col cols="4">
      <v-commend></v-commend>
    </b-col>

    <b-col cols="8">
      <v-special></v-special>
    </b-col>

    <b-col cols="4">
      <v-QR></v-QR>
    </b-col>

    <b-col cols="8">
      <v-article></v-article>
    </b-col>

    <b-col cols="4">
      <v-attention></v-attention>
    </b-col>
  </b-row>

</template>

<script>
  import vCarousel from '../page/Carousel';
  import vCommend from '../page/Commend';
  import vSpecial from '../page/Special';
  import vQR from '../page/QR';
  import vArticle from '../page/Article';
  import vAttention from '../page/Attention';

  export default {
    name: "Index",
    components: {
      vCarousel,
      vCommend,
      vSpecial,
      vQR,
      vArticle,
      vAttention,
    }
  }
</script>

<style scoped>

</style>
