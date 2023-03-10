<template>
    <div>
    <v-form class="mr-10">
        <v-row>
                <v-col cols="12"><h2 class="alignLeft">Lieferadresse</h2></v-col>
                
            </v-row>
            <v-row class="height80">
              <v-col cols="4">
                <v-select id="idAnrede"
                :items="anrede"
                label="Anrede"
                v-model="orderContact.gender"
                outlined
                rounded
        ></v-select>
              </v-col>
            </v-row>
          <v-row class="height80">
            <v-col cols="6">
              <v-text-field
                v-model="orderContact.firstname"
                :rules="nameRules"
                label="Vorname"
                required
                rounded outlined
              ></v-text-field>  
              
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="orderContact.lastname"
                :rules="nameRules"
                label="Nachname"
                required
                rounded outlined
              ></v-text-field>  
              
            </v-col>
          </v-row>
          <v-row class="height80">
            <v-col cols="12">
              <v-text-field
                v-model="orderContact.email"
                :rules="nameRules"
                label="E-mail Adresse"
                required
                rounded outlined
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row class="height80">
            <v-col cols="8">
                <v-text-field
                v-model="orderContact.street"
                :rules="nameRules"
                label="Straße"
                required
                rounded outlined
              ></v-text-field>  
            </v-col>
            <v-col cols="4">
                <v-text-field
                v-model="orderContact.houseNr"
                :rules="nameRules"
                label="Haus Nr."
                required
                rounded outlined
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row class="">
            <v-col cols="4">
                <v-text-field
                v-model="orderContact.postalCode"
                :rules="nameRules"
                label="Postleitzahl"
                required
                rounded outlined
              ></v-text-field>  
            </v-col>
            <v-col cols="7">
                <v-text-field
                v-model="orderContact.city"
                :rules="nameRules"
                label="Ort"
                required
                rounded outlined
              ></v-text-field>  
            </v-col>
          </v-row>
         <v-row>
        <v-col cols="5">
          <v-btn
          large
          rounded
          dark
          color="purple"
          @click="saveContact"
          class="fullWidth mb-10 "
        >
          Weiter zur Zahlung
        </v-btn>
        </v-col>
      </v-row>
          </v-form>
    </div>
    
</template>
<script>
export default {
    name: "checkoutInfo",
    props:{
    },
    data: () => ({
        anrede: ["Herr", "Frau"],
        orderContact: {gender: "Herr", firstname:"", lastname:"", street:"", houseNr:"", postalCode:"", city:"", email:""}

    }),
    methods: {
      saveContact: function(){
          this.$emit("saveContact", this.orderContact);
      }
    }
}
</script>
<style>
.height80{
    height: 80px;
}
.alignLeft{
    text-align: left;
}
</style>