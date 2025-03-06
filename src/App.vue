<template>
    <Header />
    <main>
        <router-view />
    </main>
  </template>
  

  <script>
  import Header from './components/Header.vue';

  export default {
    components: {
        Header
    }
  }

</script>
  
  <style scoped>
  main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  </style>
  