<template>
<v-app>
      <NavBar />
      <v-container fluid class="paddingTop100 alignleft px-15">
        <v-row>
          <v-col cols="3">
            <v-card class="rounded-xl shadowCenter">
          <v-img src="cover.png" max-height="50%" max-width="100%" contain>
            <v-card-title class=" mt-5 ml-5">
              <h1 align="left" >Hallo {{username}}</h1>
            </v-card-title>
          </v-img>
          
        <v-list id="menuList" class="mx-5">
            <v-list-item
            v-for="(item, i) in items" :key="i" @click="show = item.action"
          ><v-hover v-slot="{ hover }">
            <v-list-item-title :key="i" :class="{ 'bold-hover': hover }" class="mx-5">
              {{item.title}}
              </v-list-item-title>
              
          </v-hover>
       
          </v-list-item>
          
        </v-list>
        <div align="center" class="mx-10 py-5">
          <v-btn class="rounded-xl shadowCenter fullGrowX" @click="logout()"><h3>ABMELDEN</h3></v-btn>
        </div>
        
        </v-card>
          </v-col>
        <v-col cols="9">
          <div class="ml-5" v-if="show === 'orderManagement'">
            <OrderManagement :orders="orders"/>
          </div>
          <div class="ml-5" v-if="show === 'favorites'">
            <Favorite :products="products"/>
          </div>
        </v-col>

        </v-row>
        
        
</v-container>
</v-app>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  import OrderManagement from "../components/OrderManagement.vue";
  import Favorite from "@/components/FavoriteList.vue";
  import Vue from "vue";
 export default {
  components: {
      NavBar,
      OrderManagement,
      Favorite,
  },
    data: () => ({
        username: "Mia",
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        show: "accountData",
        anrede: ["Herr", "Frau"],
        items: [
      { title: 'Meine Bestellungen', action: 'orderManagement' },
      { title: 'Wunschliste', action: "favorites" },
    ],
        orders: [
              {
                OrderNr: '#123',
                Date: "19-12-2021",
                Status: "In Bearbeitung",
                Sum: "423.99 € für 2 Artikel",
                Aktion: "Anzeigen"
              }
              
            ],
        products: [
        { img: "01.png", title: "Cabbage", subtitle: "1kg", price: "$13" },
        { img: "02.png", title: "Perry's Ice Cream", subtitle: "1kg", price: "$23" },
        ]
  }),
    methods: {
      logout: function(){
        Vue.$keycloak.logout();
      }
    }}
  </script>
  <style>
  body {
    font-size: 16px ;
    font-weight: 400 ;
}

.paddingTop100{
    padding-top: 100px !important;
  }
  .alignleft {
    text-align: left !important;
  }

  .whiteFont{
    color: white;
  }
  .v-list-item{
    border-bottom: .0625rem solid #ebebeb;
  }

  .v-list-item__title.bold-hover{
    font-weight: bold;
  }
  .fullGrowX{
    width: 100%;
    background-color: white !important;
    
  }
  .shadowCenter{
    box-shadow: 0 2px 8px 0 rgb(88 88 88 / 32%)
  }
  @media screen and (min-width: 375px){
    .variableFontSize {
    font-size: calc(24px + 24*(100vw - 375px)/ 1545);
  }
}
.v-list-item {
  border-bottom: 0;
}
  </style>