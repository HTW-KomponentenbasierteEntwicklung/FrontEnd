<template>
    <v-list id="cartListNotRemovable" >
            <v-list-item
            v-for="(item, i) in cartItems" :key="i">
            <v-card class="fullWidth mb-2 rounded-border" elevation="2"  >
                <div >
                    <div class=" flex spaceBetween ">
                        <div class="width20"><v-img :src="item.img"></v-img></div>
                    <h4 class="mt-5">Crabbe Trabbe</h4>
                <h5 class="mt-5 mr-2"> {{ item.price }}</h5>
                </div>
                </div>
              
            </v-card>
            
            
                     
          </v-list-item>
          
        </v-list>
</template>
<script>
  export default {
    props:{
        cartItems: Array,
},
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
#cartListNotRemovable .v-list-item {
    padding-left: 0;
    padding-right: 0;
}
.flex{
  display: flex;
}
.spaceBetween {
  justify-content: space-between;
}
.width20{
    width: 25% !important;
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