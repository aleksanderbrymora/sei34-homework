<template>
  <div id="app">
    <SideSearch @createOrUpdate="createOrUpdate" />

  </div>
</template>

<script>
  import SideSearch from "./components/SideSearch";
  export default {
    name: 'app',
    components: {
      SideSearch
    },
    data() {
      return {
        start: '',
        end: ''
      }
    },
    methods: {

    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap');
  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>
