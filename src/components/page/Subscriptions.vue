<template>
  <b-row>
    <b-col cols="3">
      <v-all-attention></v-all-attention>
    </b-col>
    <b-col cols="6">
      <v-friend></v-friend>
    </b-col>
  </b-row>
</template>

<script>
import vAllAttention from   '../page/AllAttention'
import vFriend from '../page/Friend'
    export default {
        name: "Subscriptions",
      name:"Friend",
      components:{
vAllAttention,
        vFriend,
      }
    }

</script>

<style scoped>

</style>
