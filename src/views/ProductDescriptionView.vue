<template>
    <v-app>
      <NavBar />
      <v-container fluid class="paddingTop100 alignleft marginx">
        <v-row >
          <v-col cols="6">
          <div align="center" justify="center">
            <v-img

              contain
              :src=product.imageLink
            ></v-img>
          </div>
        </v-col>
          <v-col cols="4" class="">
            <h3>Hallo, ich bin</h3>
            <h1 class="productTitle">{{product.name}}</h1>
            <h2>{{product.price}} EUR</h2>
            <div align="center" justify="center">
              <v-row>
                <v-col cols="10">
                  
                    <v-btn id="idCartButton" rounded color="purple" dark large class="my-5 bigButton" @click="editCartItem()"><h2>In den Warenkorb</h2></v-btn>
                </v-col>
              <v-col cols="2">
                <v-btn
              icon
              color="black"
              x-large
              class="my-3"
            >
              <v-icon>far fa-heart</v-icon>
            </v-btn>
              </v-col>
              </v-row>
              
            </div>

            <v-divider ></v-divider>
            <Accordion>
        <AccordionItem>
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <p class="mt-2" ><v-icon class="mr-2 opac">fa-eye</v-icon>Beschreibung</p>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>{{product.description}}</span>
          </template>
          
        </AccordionItem>
        <AccordionItem>
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <p class="mt-2"><v-icon class="mr-2 opac">fa-heart</v-icon>Material und Pflege</p>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Material: {{product.material}}</span>
          </template>
          
        </AccordionItem>
        <AccordionItem>
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <p class="mt-2"><v-icon class="mr-2 opac">fa-ruler</v-icon>Größenangaben</p>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Größe: {{product.size}}</span>
          </template>
          
        </AccordionItem>
      </Accordion>
            <v-divider></v-divider>
          </v-col>
        
        </v-row>
        <v-dialog id="itemAddedToCartDialog" v-model="showDialog" class="width50">
          <div class=" my-10 flex spaceBetween px-10">
          <h2>Artikel bearbeiten</h2>
          <v-btn icon @click="closeDialog()"><v-icon>mdi-close</v-icon></v-btn>
          </div>
          <v-row class="px-10 pb-10">
            <v-col cols="4">
              <div><v-img  :src=product.imageLink class="roundedBorder"></v-img></div>
            </v-col>
            <v-col cols="8">
              <h2>{{product.name}}</h2>
              <h1>{{product.price}} EUR</h1>
              <v-row class="my-5">
              
                <v-col cols="6">
                  <v-row>
                  <v-btn icon @click="decrementAmount()"><v-icon>mdi-minus</v-icon></v-btn>
                  <h3>{{editAmount}}</h3>
                  <v-btn icon @click="incrementAmount()" ><v-icon>mdi-plus</v-icon></v-btn>
                  </v-row>
                  <h4>{{warningText}}</h4>
                </v-col>
                <v-col cols="6">
                  <v-btn rounded large color="purple" dark  elevation="5" @click="addToCart()"> Speichern </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-dialog>

      </v-container>
    </v-app>
  </template>
  <script>
  import NavBar from "../components/NavBar.vue";
  import Accordion from "../components/AccordionElement.vue";
  import AccordionItem from "../components/AccordionItem";
  import axios from 'axios'

  export default  {
    name: "ProductsView",
    data: () => ({
      toggle_exclusive: 1,
      dialog: false,
      product: {name: "", price: 1, material: "", description: "", size:""},
      addedItem: {},
      showDialog: false,
      warningText: "",
      editAmount: 1
    }),
    mounted () {
      let productId =  this.$route.params.id
      axios
      .get('http://localhost:8402/product/'+productId,{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      .then(response => {
        this.product = response.data;
        this.addedItem.productId = this.product.id;
        this.addedItem.productname = this.product.name;
        this.addedItem.productPrice = this.product.price;
        this.addedItem.imageLink = this.product.imageLink;

      }
        )
         },
    methods: {
      editCartItem: function(){
      this.addedItem.amount = 1;
      this.showDialog = true;


      },
      incrementAmount: function(){
      if(this.editAmount === this.product.amount){
        this.warningText = "Only "+this.product.amount+" items left.";
      }else{
        this.editAmount++;
        this.warningText = "";
      }
    },
    decrementAmount: function(){
      if(this.editAmount === 1){
        this.warningText = "Amount cannot go under 1."
      }else{
        this.editAmount--;
        this.warningText = "";
      }
    },
    closeDialog: function(){
      this.showDialog = false;
    },
    addToCart: function(){
      this.addedItem.amount = this.editAmount;
      console.log(this.addedItem);
      axios
      .post('http://localhost:3030/cart?username='+this.$username, this.addedItem,{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      this.closeDialog();
    }
    },
    components: {
      NavBar,
      Accordion,
    AccordionItem
  }
  }
  </script>
  <style>
  .paddingTop100{
    padding-top: 100px !important;
  }
  .alignleft {
    text-align: left !important;
  }
  .marginx{
    margin-left: 10%;
  }
  .moreDetails{
    color: black !important;

  }
  .borderTopBottom {
    border-top: 1px solid grey;
    border-bottom: 1px solid red‚;
    padding-top: 5%;
    padding-bottom:5%;
  }
  .opac{
    opacity: 0.5;
  }
  .bigButton{
    width: 100%;
  }
  #idCartButton:not(.on-hover) {
    border: thin solid;
    background-color: white;
 }
   
  
  @media screen and (min-width: 375px){
    .productTitle {
    font-size: calc(32px + 24*(100vw - 375px)/ 1545);
}
  }
  @media screen and (max-width: 47.9375em){
    .productTitle {
    font-size: 1.5rem;
}
  }
  </style>