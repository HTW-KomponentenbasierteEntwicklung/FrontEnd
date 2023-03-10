<template>
    <v-row justify="center" class="space px-16 mx-20">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        v-for="(product, i) in products"
        :key="i"
      >
      <v-card
            class="ma-4"
            width="100%"
          >
          <div align="center" justify="center">
            <v-img
          
              contain
              :src="product.img"
            ></v-img>
          </div>
          <v-card-title><strong>{{ product.title }}</strong></v-card-title>
          <v-card-subtitle class="descriptionShort lowOpacity">
            <strong>hihihi</strong>
          </v-card-subtitle>
          <v-card-subtitle class="descriptionShort">
            {{ product.price }}
          </v-card-subtitle>

          </v-card>
      </v-col>
    </v-row>
</template>
<script>
  export default {
    props: {
        products: Array,
    }
  }
</script>