<template>
  <div>
    <h2>{{ species }} for adoption</h2>
    <b-table striped hover :items="pets">
      <template #cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>

<style scoped>

</style>
