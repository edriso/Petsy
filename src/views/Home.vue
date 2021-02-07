<template>
  <div id="home">
    <h1 class="text-center text-primary mb-3">Adopt a new best friend!</h1>

    <NewPet />

    <b-table responsive striped hover bordered :items="allPets" sortBy="name">
      <template #table-caption>
        There are {{ allPets.length }} Cats &amp; Dogs for Adoption
      </template>
    </b-table>
  </div>
</template>

<script>
import NewPet from "@/components/NewPet";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { NewPet },
  computed: {
    ...mapGetters(["allPets"]),
  },
};
</script>
