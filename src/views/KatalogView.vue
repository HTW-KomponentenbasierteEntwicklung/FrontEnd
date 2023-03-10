<template>
  <v-app>
    <NavBar />
    <v-container fluid class="paddingTop100">
      <v-row >
        <v-col cols="12">
          <h1>Our products</h1>
        </v-col>
      </v-row>
      <ProductItem/>
    </v-container>
  </v-app>
</template>
<script>
import ProductItem from "@/components/ProductItem.vue";
import NavBar from "../components/NavBar.vue";


export default  {
  name: "KatalogView",
  data: () => ({
    toggle_exclusive: 1,
    dialog: false
  }),
  
  components: {
    NavBar,
    ProductItem
}

}

</script>
<style>
.paddingTop100{
  padding-top: 100px !important;
}</style>