<template>
     <v-card
            :color="white"
            class="ma-4"
            height="500"
            width="400"
          >
          <div align="center" justify="center">
            <v-img
              max-height="400"
              max-width="400"
              contain
              :src="productImg"
            ></v-img>
          </div>
          <v-card-title><strong>{{ productName }}</strong></v-card-title>
          <v-card-subtitle class="descriptionShort lowOpacity">
            <strong>{{shortDescription}}</strong>
          </v-card-subtitle>
          <v-card-subtitle class="descriptionShort">
            {{ price }}
          </v-card-subtitle>
          </v-card>
</template>
<script>
  export default {
    props: [
      'productImg',
      "productName",
      "shortDescription",
      "price"
      
  ]

  }
</script>