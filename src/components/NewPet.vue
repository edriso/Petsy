<template>
  <div id="new-pet">
    <b-button id="modal-button" variant="primary" pill v-b-modal.new-pet-modal>
      +
    </b-button>

    <b-modal scrollable id="new-pet-modal" title="Add a New Pet">
      <b-form @submit.prevent="onSubmit" @reset="onReset" id="new-pet-form">
        <b-form-group label="Pet Name:" label-for="pet-name">
          <b-form-input
            id="pet-name"
            v-model="formData.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Pet Breed:" label-for="pet-breed">
          <b-form-input
            id="pet-breed"
            v-model="formData.breed"
            placeholder="Enter breed"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Species:" label-for="pet-species">
          <b-form-select id="pet-species" v-model="formData.species" required>
            <option value="">Please select an option</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </b-form-select>
        </b-form-group>

        <b-form-group label="Gender:" label-for="pet-gender">
          <b-form-select id="pet-gender" v-model="formData.gender">
            <option value="">Please select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </b-form-select>
        </b-form-group>

        <b-form-group label="Pet Age in Years:" label-for="pet-age">
          <b-form-input
            id="pet-age"
            v-model="formData.age"
            placeholder="Enter age"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Pet Color:" label-for="pet-color">
          <b-form-input
            id="pet-color"
            v-model="formData.color"
            placeholder="Enter color"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Pet Weight in Pounds:" label-for="pet-weight">
          <b-form-input
            id="pet-weight"
            v-model="formData.weight"
            placeholder="Enter weight"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Pet Location:" label-for="pet-location">
          <b-form-input
            id="pet-location"
            v-model="formData.location"
            placeholder="Enter location"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Pet Notes:" label-for="pet-notes">
          <b-form-input
            id="pet-notes"
            v-model="formData.notes"
            placeholder="Enter notes"
          ></b-form-input>
        </b-form-group>
      </b-form>

      <template #modal-footer>
        <b-button
          type="reset"
          variant="secondary"
          size="sm"
          class="mr-2"
          form="new-pet-form"
          >Reset</b-button
        >
        <b-button type="submit" variant="primary" size="sm" form="new-pet-form"
          >Submit</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewPet",
  data() {
    return {
      formData: {
        name: "",
        breed: "",
        species: "",
        gender: "",
        age: null,
        color: "",
        weight: null,
        location: "",
        notes: "",
      },
    };
  },
  methods: {
    ...mapActions(["addPet"]),
    onReset() {
      this.formData = {
        name: "",
        breed: "",
        species: "",
        gender: "",
        age: null,
        color: "",
        weight: null,
        location: "",
        notes: "",
      };
    },
    onSubmit() {
      this.addPet(this.formData);
      this.onReset();
      this.$bvModal.hide("new-pet-modal");
    },
  },
};
</script>

<style>
#modal-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>
