<template>
    <v-app>
      <NavBar />
      <v-container fluid class="paddingTop100 px-15">
    <v-row>
        <v-col cols="12">
        <h1 class="variableFontSize">Mein Warenkorb</h1>
     </v-col>
    </v-row>
    <v-row>
        <v-col cols="lg-8">
          <CartList :cartItems="cartItems" :updateItem="updateItem"/>
        </v-col>
        <v-col cols="lg-4">
          <v-card elevation="10" class="pt-10 px-10 sticky rounded-border">
          <h2 class="alignleft mb-5">Gesamtbetrag</h2>
          <v-row>
            <v-col cols="xs-8" >
              <h3 class="alignleft">Zwischensumme</h3>
            </v-col>
            <v-col cols="xs-4">
              <h3 class="rightAlign"> {{ totalSum }} €</h3>
        
            </v-col>
          </v-row>

          <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Gutscheincode"
                      class="d-none d-sm-none d-md-flex"
                      filled
                      prepend-inner-icon="mdi-magnify"
                      solo
                      flat
                      background-color=""
                      rounded
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2" class="marginLeft">
                    <v-btn
                      color="grey"
                      rounded
                      dark
                      x-large
                      class="py-7 d-none d-sm-none d-md-flex" 
                    >
                      EINLÖSEN
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="xs-8">
              <h3 class="alignleft">Gesamtsumme</h3>
            </v-col>
            <v-col cols="xs-4">
              <h3 class="rightAlign">{{totalSum}} €</h3>
        
            </v-col>
                </v-row>
              <v-row>
                <v-col cols="lg-12">
                  <v-btn color="purple"
                      rounded dark x-large class="fullWidth">ZUR KASSE</v-btn>
                </v-col>
              </v-row>
        </v-card>
        </v-col>
    </v-row>
    <v-dialog id="cartDialog" v-model="showDialog" class="width50">
          <div class=" my-10 flex spaceBetween px-10">
          <h2>Artikel bearbeiten</h2>
          <v-btn icon @click="closeDialog()"><v-icon>mdi-close</v-icon></v-btn>
          </div>
          <v-row class="px-10 pb-10">
            <v-col cols="4">
              <div><v-img  :src=toUpdateItem.imageLink class="roundedBorder"></v-img></div>
            </v-col>
            <v-col cols="8">
              <h2>{{toUpdateItem.productname}}</h2>
              <h1>{{toUpdateItem.productPrice}} EUR</h1>
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
                  <v-btn rounded large color="purple" dark  elevation="5" @click="changeAmount()"> Speichern </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-dialog>
    
      </v-container>
    </v-app>
</template>
<script>
import CartList from "@/components/CartList.vue";
import NavBar from "../components/NavBar.vue";
import axios from "axios";
  export default {
  components: {
    NavBar,
    CartList
},

  data: () => ({
    totalSum: 0,
    showDialog: false,
    toUpdateItem: {name:"", price: 0, amount: 0},
    editAmount: 0,
    maxAmount:0,
    warningText: "",
    cartItems: [
        {id:"123", img: "01.png", productName: "Crabbe Trabbe", size: "7cm", price: "45,50 €", amount: 1},
        {id: "345",img: "02.png", productName: "Crabbe Trabbe", size: "12cm", price: "45,50 €", amount: 1},
        {id:"123", img: "01.png", productName: "Crabbe Trabbe", size: "7cm", price: "45,50 €", amount: 1},
        {id: "345",img: "02.png", productName: "Crabbe Trabbe", size: "12cm", price: "45,50 €", amount: 1},
        {id:"123", img: "01.png", productName: "Crabbe Trabbe", size: "7cm", price: "45,50 €", amount: 1},
        {id: "345",img: "02.png", productName: "Crabbe Trabbe", size: "12cm", price: "45,50 €", amount: 1},
    ]
  }),
  methods:{
    updateItem: function(id){
      this.toUpdateItem = this.cartItems.find(item => item.id === id);
      this.editAmount = this.toUpdateItem.amount;
      this.showDialog= true;
      axios
      .get('http://localhost:8402/product/'+this.toUpdateItem.productId,{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      .then(response => (
        this.maxAmount = response.data.amount
        ))
    },
    incrementAmount: function(){
      if(this.editAmount === this.maxAmount){
        this.warningText = "Only "+this.maxAmount+" items left.";
      }else{
        this.editAmount++;
        this.warningText = "";
      }
    },
    decrementAmount: function(){
      if(this.editAmount === 0){
        this.warningText = "Amount cannot go under 0."
      }else{
        this.editAmount--;
        this.warningText = "";
      }
    },
    changeAmount: function(){
      axios
      .put('http://localhost:3030/changeAmount?username='+this.$username, this.toUpdateItem,{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`
      }})
      .then(() => {
        this.reloadCart();
        this.closeDialog();
      }
      )

    },
    reloadCart: function(){
      axios
      .get('http://localhost:3030/cart?username='+this.$username,{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      .then(response => {
        this.cartItems = response.data.items;
        this.totalSum = response.data.totalAmount;
        console.log(this.cartItems);
      })
    },
    closeDialog: function(){
      this.showDialog = false;
    }
  },
  mounted () {
    this.reloadCart();
  }
}
</script>
<style>
.rounded-border{
  border-radius: 25px !important;
}
.sticky {
  position: sticky;
  top: 100px;
}
.marginLeft{
  margin-top: 10px;
  margin-left: -144px;
}
.paddingTop100{
    padding-top: 100px !important;
  }
  .alignleft {
    text-align: left !important;
  }
  .fullWidth {
    width: 100% !important;
  }
.rightAlign{
  text-align: right !important;
}
  .wrapper {
	display: flex;
}
.quantity {
  border: none;
  text-align: center;
    width: 50px;
 
  font-size: 16px;
  color: #43484D;
  font-weight: 400;
	border: 2px solid #55439d;
  border-radius: 25px;
}
.opacText{
  opacity: 0.5;
  font-weight: 700;
}
.shadowCenter{
    box-shadow: 0 0.125rem 0.5rem 0 rgb(88 88 88 / 32%);
  }

  @media screen and (min-width: 375px){
    .variableFontSize {
    font-size: calc(24px + 24*(100vw - 375px)/ 1545);
  }
}
@media screen and (min-width: 48em){
.changeOrderCol {
    margin-top: 0.5rem;
    order: 3;
}
}
</style>