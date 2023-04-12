<template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Bestellung
            </th>
            <th class="text-left">
              Datum
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Gesamtsumme
            </th>
            <th class="text-left">
              Aktionen
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in orders"
            :key="item.orderId"
          >
            <td>{{ item.orderId }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.totalAmount }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </template>
  <script>
  export default {

    name: "OrderManagement",
    props: {
        orders: Array,
    }

  }
</script>