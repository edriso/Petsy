<template>
  <div id="cats">
    <b-table
      responsive
      hover
      bordered
      :items="cats"
      :fields="fields"
      v-if="cats"
    >
      <template #cell(name)="data">
        <router-link :to="`/pets/cat/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>

      <template #table-caption>Cats for Adoption</template>
    </b-table>

    <NewPet />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NewPet from "@/components/NewPet";

export default {
  name: "Cats",
  components: { NewPet },
  computed: {
    ...mapState(["cats", "fields"]),
  },
};
</script>
