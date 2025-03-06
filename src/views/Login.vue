<template>
    <div class="auth-container">
      <h2>Вход</h2>
      <input type="email" v-model="email" placeholder="Email" @keyup.enter="login" />
      <input type="password" v-model="password" placeholder="Пароль" @keyup.enter="login" />
      <button @click="login">Войти</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>Нет аккаунта? <router-link class="reg" to="/register">Регистрация</router-link></p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    setup() {
        const email = ref("");
        const password = ref("");
        const errorMessage = ref("");
        const router = useRouter();
        
        const login = async () => {

        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push("/");
        } catch (error) {
          errorMessage.value = "Неправильный логин или пароль"
        }
      };
  
      return { email, password, errorMessage, login };
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20%;
  }

  .auth-container input{
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
    color: black;
    background-color: white;
    outline: none;
    height: 24px;
    border: 0 none;
  }

  .auth-container button{
    width: 80px;
    height: 25px;
    border-radius: 10px;
    background-color: aqua;
    border: 0 none;
    cursor: pointer;
    font-size: 15px;
  }

  .auth-container .reg{
    text-decoration: none;
  }


    .error {
    color: red;
    font-size: 14px;
    }
  </style>
  