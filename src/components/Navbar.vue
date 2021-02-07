<template>
  <div id="navbar">
    <b-breadcrumb>
      <b-breadcrumb-item>
        <router-link to="/">Home</router-link>
      </b-breadcrumb-item>
      <b-breadcrumb-item>
        <router-link to="/cats">Cats</router-link>
      </b-breadcrumb-item>
      <b-breadcrumb-item>
        <router-link to="/dogs">Dogs</router-link>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#navbar a {
  color: #888;
}

#navbar a:hover {
  color: #2c3e50;
}

#navbar a.router-link-exact-active {
  font-weight: bold;
  color: #2c3e50;
}
</style>
