<template>
  <div class="home-view-container">
    <h1 id="header">Adopt a new friend!</h1>
    <h3 id="info">Animals available to adopt: {{ animalsCount }}</h3>
    <button id="petFormButton" @click="togglePetForm()" class="btn btn-primary">Add New Pet</button>
    <b-form id="petForm" name="petForm" @submit.prevent="handleSubmit()" v-if="showPetForm">
      <b-form-group id="name" label="Pet Name:" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="formData.name"
          placeholder="Enter name"
          required
        />
      </b-form-group>

      <b-form-group id="species" label="Species" label-for="species-dropdown">
        <b-form-select
          id="species-dropdown"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        />
      </b-form-group>

      <b-form-group id="age" label="Pet's Age:" label-for="age-input">
        <b-form-input
          id="age-input"
          v-model="formData.age"
          placeholder="Enter age"
          required
        />
      </b-form-group>

      <b-button id="submit" type="submit" variant="primary">Submit</b-button>
      <b-button id="reset" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
