<template>
    <v-container fluid>
      <v-radio-group v-model="payment">
        <template v-slot:label>
          <h1>Zahlungsmethode</h1>
        </template>
        <v-card class="height80 pt-5 pl-10 mt-5" elevation="5">
          <v-radio value="VORKASSE">
          <template v-slot:label>
            <v-row>

              <v-col cols="6">
                <h1>Vorkasse</h1>
              </v-col>
            </v-row>
          </template>
        </v-radio>
        </v-card>

        <v-card class="height80 pt-5 pl-10 mt-3" elevation="5">
        <v-radio value="AUF_RECHNUNG">
          <template v-slot:label>
            <v-row>

              <v-col cols="6">
                <h1>Auf Rechnung</h1>
              </v-col>
            </v-row>
          </template>
        </v-radio>
      </v-card>
      </v-radio-group>
      <v-row>
        <v-col cols="5">
          <v-btn
          large
          rounded
          dark
          color="purple"
          @click="savePayment()"
          class="fullWidth mb-10"
        >
          Weiter zur Bestellübersicht
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default  {
  name: "paymentInfo",
  props:{
  },
  data: () => ({
    payment: null
  }),
  methods: {
    savePayment: function(){
      if(this.payment === null){
        return;
      }
      this.$emit("changePaymentMethod", this.payment);

    }
  }
  
}
</script>
<style>
.height80{
  height: 80px;
}
.alignleft{
  text-align: left;
}
.alignright{
  text-align: right;
}
</style>