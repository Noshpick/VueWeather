<template>
  <header class="header__main">
    <div class="nav__link">
      <h1>ПОГОДНОЕ ПРИЛОЖЕНИЕ 🌤️</h1>
      <div class="nav__button">
        <router-link class="nav__item" to="/">Weather</router-link>
        <router-link class="nav__item" to="/geo">Geo</router-link>
        <router-link class="nav__item" to="/soon">Soon</router-link>
        <button v-if="isAuthenticated" @click="logout" class="logout-btn">Выйти</button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const isAuthenticated = ref(false);
    const router = useRouter();

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        isAuthenticated.value = !!user;
      });
    });

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
      } catch (error) {
        alert("Ошибка: " + error.message);
      }
    };

    return { isAuthenticated, logout };
  },
};
</script>

<style scoped>
.header__main {
  width: 100%;
  color: white;
  text-align: center;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.nav__button {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.nav__item {
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  color: white;
  border-bottom: 1px solid gray;
  transition: color 0.3s ease-in-out;
}

.nav__item:hover {
  color: lightgray;
}

.logout-btn {
  background: red;
  color: white;
  border: none;
  padding: 9px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: darkred;
}
</style>
