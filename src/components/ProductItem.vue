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
            @click="showProductDetails(product.id)"
          >
          <div align="center" justify="center">
            <v-img
          
              contain
              :src="product.imageLink"
            ></v-img>
          </div>
          <v-card-title><strong>{{ product.name }}</strong></v-card-title>
          <v-card-subtitle class="descriptionShort lowOpacity">
            <strong>{{product.description}}</strong>
          </v-card-subtitle>
          <v-card-subtitle class="descriptionShort">
            {{ product.price }} EUR
          </v-card-subtitle>

          </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
   import axios from 'axios'

  export default {
    data: () => ({
        bpm: 1,
      products: [],
    }),
     methods: {
        decrement () {
          this.bpm--
        },
        increment () {
          this.bpm++
        },
        showProductDetails (id){
          window.location.href = "/product/"+id;
        }
       
      },
    mounted () {
    axios
      .get('http://localhost:8402/products',{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      .then(response => (
        this.products = response.data.products
        ))
  }
  };
  </script>
  
  <style>
  </style>