<template>
    <div>
    <h3 class="variableFontSize">Meine Daten</h3>
          <p>Hier können Sie Ihre Daten ändern</p>
          <v-col cols="9">
            <v-form class="mr-10">
            <v-row>
              <v-col cols="2">
                <v-select id="idAnrede"
                :items="anrede"
                label="Anrede"
                outlined
                rounded
        ></v-select>
              </v-col>
            </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Vorname"
                required
                rounded outlined
              ></v-text-field>  
              
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nachname"
                required
                rounded outlined
              ></v-text-field>  
              
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="E-mail Adresse"
                required
                rounded outlined
              ></v-text-field>  
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Geburtsdatum"
            append-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            rounded outlined
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
            </v-col>
          </v-row>
          </v-form>
          </v-col>
          
        </div>
</template>
<script>
export default {

name: "CustomerDataManagement",
data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
}),


}
</script>