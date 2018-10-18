<template>
  <b-row>
    <b-col cols="2">
<v-writer1></v-writer1>
    </b-col>
    <b-col cols="10">
      <v-writer2></v-writer2>
    </b-col>
  </b-row>
</template>


<script>
  import vWriter1 from   '../page/Writer1'
  import vWriter2 from '../page/Writer2'
    export default {
        name: "Write",
      components:{
        vWriter1,
        vWriter2,
      }

    }
</script>

<style scoped>

</style>
