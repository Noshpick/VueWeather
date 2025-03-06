<template>
    <div v-if="isAuthChecked">
      <Header v-if="isAuthenticated" />
      <main>
        <router-view />
      </main>
    </div>
    <div v-else class="loading-screen">
      <p>Загрузка...</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { auth } from "./firebase";
  import Header from "./components/Header.vue";
  
  export default {
    components: {
      Header,
    },
    setup() {
      const isAuthenticated = ref(false);
      const isAuthChecked = ref(false);
  
      onMounted(() => {
        auth.onAuthStateChanged((user) => {
          isAuthenticated.value = !!user;
          isAuthChecked.value = true;
        });
      });
  
      return { isAuthenticated, isAuthChecked };
    },
  };
  </script>
  
  <style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 20px;
  }
  </style>
  