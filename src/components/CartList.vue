<template>
    <v-list id="cartList" class="mx-5">
            <v-list-item
            v-for="(item, i) in cartItems" :key="i">
            <v-card class="fullWidth mb-10 rounded-border" elevation="10"  @click="updateItem(item.id)">
              <v-row>
                <v-col cols="3">
                  <v-img :src="item.imageLink"></v-img>
                </v-col>
                <v-col cols="9">
                  <v-row>
                    <v-col cols="7">
                     <u > <h2 class="mt-5 alignleft">{{item.productName}}</h2> </u>
                      <div class="wrapper">
                        <h4 class="mr-2">Menge:{{item.amount}} </h4>

                      </div>
                    </v-col>
                    <v-col cols="1" class="changeOrderCol pl-2"><v-btn icon><v-icon>mdi-trash-can-outline </v-icon></v-btn> </v-col>
                    <v-col cols="md-4 xs-12">
                      <h2 class="rightAlign mt-10">{{ item.productPrice }} EUR</h2>
                      <h5 class="opacText rightAlign">Inkl. MwSt.</h5>
                    </v-col>
                  </v-row>
                  
                </v-col>
              </v-row>
            </v-card>
            
            
                     
          </v-list-item>
          
        </v-list>
</template>
<script>
  export default {
    props:{
        cartItems: Array,
        updateItem: Function
},
methods:{

}
  }
  </script>
  <style>
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