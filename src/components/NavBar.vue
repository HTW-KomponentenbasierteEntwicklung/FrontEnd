<template>
    <v-app-bar id="idNavBar" app color="white" flat >
        <v-badge color="#D5F0DB" dot>
            <v-img src="1.png" contain width="50"></v-img>
        </v-badge>
        <v-toolbar-title class="ml-4" >
            <strong class="display-1">Sleepy</strong>
        </v-toolbar-title>
        <v-text-field id="searchInput"
                      label="Suche"
                      class=" ml-10"
                      prepend-inner-icon="mdi-magnify"
                      solo
                      flat
                      rounded
                      outlined

                    ></v-text-field>

        <v-spacer></v-spacer>
        <v-menu id="accountMenu"
        transition="slide-y-transition"
        bottom
        content-class="my-menu px-10"
      >
      <template v-slot:activator="{ on }">
        <v-badge icon dark color="transparent">
        <v-img src="darkbear.png" contain width="35" class="ml-5" v-on="on" ></v-img>
        </v-badge>
        </template>
        <h1 align="left" >Hallo {{username}}</h1>
        <v-divider></v-divider>
        <v-list id="menuList">
            <v-list-item
            v-for="(item, i) in items" :key="i" @click="changeView(item.navTo)"
          ><v-hover v-slot="{ hover }">
            <v-list-item-title :key="i" :class="{ 'on-hover': hover }">
              {{item.title}}
              </v-list-item-title>
          </v-hover>
       
          </v-list-item>
          
        </v-list>
        <v-divider></v-divider>
            <p id="abmeldenText" align="center" @click="logout()">Abmelden</p>
      </v-menu>
       
     
 
        <v-badge color="grey" overlap bottom right content="2" class="ml-5 mr-2 mt-1">
            <v-icon color="black" size="30">far fa-heart</v-icon>
        </v-badge>
        <v-badge color="grey" overlap bottom right content="3" class="ml-5 mr-2 mt-1">
            <v-icon size="30" color="black" @click="goToCart()">fas fa-shopping-cart</v-icon>
        </v-badge>


      


        
        <v-dialog id="cartDialog" v-model="addedToCart" class="width50">
          <div class=" my-10 flex spaceBetween px-10">
          <h2>Artikel in Warenkorb hinzugefügt</h2>
          <v-btn icon @click="closeAddToCart"><v-icon>mdi-close</v-icon></v-btn>
          </div>
          <v-row class="px-10 pb-10">
            <v-col cols="4">
              <div><v-img  src="01.png" class="roundedBorder"></v-img></div>
            </v-col>
            <v-col cols="8">
              <h2>Crabbe Trabbe</h2>
              <h1>140 EUR</h1>
              <v-row class="my-5">
                <v-col cols="6">
                  <v-btn rounded large color="white" elevation="5" @click="closeAddToCart">Weiter einkaufen</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn rounded large color="purple" dark  elevation="5"> Zum Warenkorb </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-dialog>
        
       
    </v-app-bar>
    
  </template>
  
  <script>
  import Vue from 'vue'

  export default {
    components: {
    },
    data: () => ({
      choosenTab: null,
        dialog: false,
        addedToCart: false,
        username: "",
        items: [
      { title: 'Mein Konto', navTo:"/account" }
    ]
  }),
    created() {
    this.username = this.$username;
  },
  
    methods:{
        openAddedToCartDialog(){
            this.addedToCart= true;
        },
        closeAddToCart(){
          this.addedToCart=false;
        },
        changeView(adress){
          window.location.href = adress;
        },
        logout(){
          Vue.$keycloak.logout();
        },
        goToCart(){
          window.location.href = "/cart";
        }
    }
   
    

  }
  </script>
  <style>
   .v-toolbar__title {
    font-size: 1rem !important
  }
  #loginDialog {
  position: absolute;
  z-index: 1;

}
.my-menu {
  margin-top: 40px;
  min-width: 300px !important;
  background-color: white;
  padding:5px;
}
.v-input__slot{
    margin-top: 10px !important;
    display: flex;
    color: dimgrey ;
    caret-color: dimgrey;
}
#menuList .v-list-item__title{
  text-align: left;
}
#menuList .v-list-item__title.on-hover {
  font-weight: bold;
  text-decoration: underline;
 }
#abmeldenText{
  font-weight: bold;
  text-decoration: underline;
 }
 #menuList .v-list-item {
  padding: 0;
}
#idNavBar >.v-toolbar__content {
  padding-bottom: 50px;
  padding-top: 50px;
  background-color: white;
}
.v-toolbar__extension {
  background-color: white;

}
.flex{
  display: flex;
}
.spaceBetween {
  justify-content: space-between;
}
#cartDialog{
  width: 50%;
}
.v-dialog {
  width: 50% !important;
  background-color: rgb(251, 246, 253);
}
.roundedBorder{
  border-radius: 20px;
}
.width50{
  height: auto;
}
</style>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  font-weight: bold
  text-decoration: underline

</style>