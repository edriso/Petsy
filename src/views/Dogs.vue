<template>
  <div id="dogs">
    <b-table
      responsive
      hover
      bordered
      :items="dogs"
      :fields="fields"
      v-if="dogs"
    >
      <template #cell(name)="data">
        <router-link :to="`/pets/dog/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>

      <template #table-caption>Dogs for Adoption</template>
    </b-table>

    <NewPet />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NewPet from "@/components/NewPet";

export default {
  name: "Dogs",
  components: { NewPet },
  computed: {
    ...mapState(["dogs", "fields"]),
  },
};
</script>
