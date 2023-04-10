<template>
  <v-app>
    <NavBar />
    
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
            <v-img src="cover.png" max-height="100%" max-width="100%" contain>
              <v-card-title class="top ml-10">
                <h2 class="title1">Order your</h2>
              </v-card-title>
              <v-card-title class="ml-10 mt-n8">
                <h1 class="title2">#most loved cuddle buddy</h1>
              </v-card-title>
            </v-img>
          </v-card>
          <v-container id="titleContainer" class="fullWidth mt-10">
            <v-row class="landingPageTitle px-10">
              <v-col cols="12" sm="12" align="left" >
                <h3>Explore the world of</h3>
              </v-col>
            </v-row>
            <v-row class="landingPageTitle px-10">
              <v-col cols="12" sm="10" align="left">
                <h2 ><strong>#BEAUTIFUL DIVERSITY</strong></h2>
              </v-col>

            </v-row>
          </v-container>

          <CategoryMenu />
          <v-container id="titleContainer" class="fullWidth">
            <v-row class="landingPageTitle px-10">
              <v-col cols="12" sm="12" align="left" >
                <h3>Take a look at our</h3>
              </v-col>
            </v-row>
            <v-row class="landingPageTitle px-10">
              <v-col cols="12" sm="10" align="left">
                <h2 ><strong>#TOP FAVORITES</strong></h2>
              </v-col>
              <v-col cols="12" sm="2" class="alignRight">
                <v-btn rounded color="purple" dark @click="showAllProducts()">Alle ansehen</v-btn>
              </v-col>
            </v-row>
          </v-container>
         
          
          <TopProducts/>
          
          <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <h3>What Our Clients Say</h3>
            </div>
            <ClientCard />
          </v-card>

        </v-col>
      </v-row>
    </v-container>
    <FooterSection />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterSection from "../components/FooterSection.vue";
import CategoryMenu from "../components/CategoryMenu.vue";
//import ProductItem from "../components/ProductItem.vue";
import ClientCard from "../components/ClientCard.vue";
import TopProducts from "../components/TopProducts.vue";
import axios from 'axios'


export default {
  name: "HomeView",
  data: () => ({
    toggle_exclusive: 1,
    dialog: false
  }),
  mounted () {
    axios
      .get('http://127.0.0.1:8402/pd/products',{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      .then(response => (this.info = response))
  },
  components: {
    NavBar,
    FooterSection,
    CategoryMenu,
    //ProductItem,
    ClientCard,
    TopProducts
},
  methods: {
    showAllProducts: function(){
      window.location.href = "/products";
    }
  }

};
</script>
<style >
.marginLeft {
  margin-left: -90px;
}
.mtop {
  margin-top: 100px;
}
.mbottom {
  margin-bottom: 100px;
}
.v-card.borderme {
  border: 2px solid rgb(156, 120, 201) !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}
.landingPageTitle > div{
  padding: 0;
}
.landingPageTitle {
  padding: 0 !important;
  width: 100% !important;
}

.alignRight{
  text-align: right;
}
.fullWidth{
    max-width: 100% !important;
    margin-left: 0;
    margin-right: 0;
  }
@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }
  h2.title2 {
    font-size: 15px;
  }
  .top {
    margin-top: 20px;
  }

}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}

</style>
