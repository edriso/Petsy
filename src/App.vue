<template>
  <div id="app" class="pb-1">
    <b-container>
      <Navbar />

      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#app a {
  transition: color 150ms ease-in-out;
}

#app a:hover {
  text-decoration: none;
}

#app .table {
  color: #2c3e50;
}

.btn:active,
.btn:focus {
  box-shadow: none !important;
}

.card .card-header {
  font-size: 130%;
}
</style>
