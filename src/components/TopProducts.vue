<template>

      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows

      >
        <v-slide-item
        v-for="(product, i) in products"
        :key="i"
        >
        <v-card
            class="ma-4"
            height="500"
            width="400"
          >
          
          <div align="center" justify="center">
            <v-img
              max-height="400"
              max-width="400"
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

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-icon class="pushtop mt-n15 mr-5">mdi-heart-outline</v-icon>
          </v-card-actions>
        </v-card>          

         
        </v-slide-item>
      </v-slide-group>
  </template>
  <script>

  export default {
    components: {
    },
    data: () => ({
        model: null,
        products: [
            { img: "01.png", title: "Cabbage", subtitle: "1kg", price: "$13" },
            { img: "02.png", title: "Perry's Ice Cream", subtitle: "1kg", price: "$23" },
            { img: "3.png", title: "Potato", subtitle: "1kg", price: "$17" },
            { img: "4.png", title: "Bundle Pack", subtitle: "Potato, Papaya, Oil, Cabbage", price: "$40" },
            { img: "5.png", title: "Oreo Biscuit", subtitle: "270GM", price: "$20" },
            { img: "6.png", title: "Papaya", subtitle: "1kg", price: "$10" },
        ],
    }),
}
</script>
<style>
.lowOpacity{
  opacity: 0.5;
  
}
.descriptionShort{
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
}

</style>
