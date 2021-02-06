<template>
  <div id="pet" v-if="pet.name">
    <b-card
      :header="`${pet.name} (${pet.species})`"
      header-bg-variant="dark"
      header-text-variant="white"
      class="text-capitalize"
    >
      <b-card-text v-if="pet.breed">Breed: {{ pet.breed }} </b-card-text>
      <b-card-text v-if="pet.gender">Gender: {{ pet.gender }}</b-card-text>
      <b-card-text v-if="pet.age"> Age: {{ pet.age }} years old </b-card-text>
      <b-card-text> Color: {{ pet.color }} </b-card-text>
      <b-card-text v-if="pet.weight">
        Weight: {{ pet.weight }} Pounds
      </b-card-text>
      <b-card-text> Location: {{ pet.location }} </b-card-text>
      <template #footer v-if="pet.notes">
        <span class="text-muted"> Notes: {{ pet.notes }} </span>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Pet",
  data() {
    return {
      pet: {},
    };
  },
  computed: {
    ...mapState(["cats", "dogs"]),
  },
  created() {
    // exactly will be like this.cats||this.dags which is equals this['cats]||this['dogs]
    const selectedPet = this[this.$route.params.species + "s"][
      this.$route.params.id
    ];
    this.pet = selectedPet;
  },
};
</script>
