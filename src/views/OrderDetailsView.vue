<template>
    <v-app>
      <NavBar />
      <v-container fluid class="paddingTop100 width80">
        <v-row>
            <v-col cols="lg-12">
                <h1>Bestelldetails</h1>
                <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left font16">
                        Produkt
                    </th>
                    <th class="text-right font16">
                        Gesamtsumme
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="(item, i) in details"
                    :key="i"
                    >
                    <td class="text-left font16"><a class="pinkLink">{{ item.name }}</a> x{{ item.amount }}</td>
                    <td class="text-right font16">{{ item.price }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            <v-divider></v-divider>
            <v-row class="mt-5">
                <v-col cols="lg-9">
                    <h3 class="text-left">Zwischensumme:</h3>
                </v-col>
                <v-col cols="lg-3">
                    <h3>{{ preSum }}</h3>
                </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row >
                <v-col cols="lg-9">
                    <h3 class="text-left">Versandkosten:</h3>
                </v-col>
                <v-col cols="lg-3">
                    <h3>{{ versand }}</h3>
                </v-col>
                
            </v-row>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-row >
                <v-col cols="lg-9">
                    <h3 class="text-left">Gesamt:</h3>
                </v-col>
                <v-col cols="lg-3">
                    <h3>{{ totalSum }}</h3>
                </v-col>
                
            </v-row>
            <v-row>
                
                <v-col cols="lg-6">
                    <h1 class="text-left">Lieferadresse</h1>
                    <p class="text-left">My Linh Dao <br>Baumstraße 3 <br></p>
                </v-col>
            </v-row>
            </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  import axios from "axios"
  export default  {
    name: "orderDetailView",
    components: {
      NavBar,
    },
    data: () => ({
        preSum: "45,69 EUR",
        versand: "0 EUR",
        totalSum: "145,90 ",
        items:[
            {name: "Crabbe Trabbe", price: "12,50 EUR", amount: 1}
        ]
    }),
    mounted(){
        let orderId =  this.$route.params.id
         axios
      .get('http://localhost:8402/order/'+orderId,{
      headers: {
        'Authorization': `Bearer ${this.$keycloak.token}`

      }})
      .then(response => (
        this.items = response.data.order.items,
        this.totalSum = response.data.cart.totalAmount
        ))
    }
}
</script>
<style>
.pinkLink{
    color: rgb(181, 27, 208) !important;
}
.width80{
    width: 50%;
}
.paddingTop100{
    padding-top: 100px !important;
  }
.font16{
    font-size: 16px !important;
  }
</style>