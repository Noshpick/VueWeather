<template>
    <div class="auth-container">
      <h2>Регистрация</h2>
      <input type="email" v-model="email" placeholder="Email" @keyup.enter="register" />
      <input type="password" v-model="password" placeholder="Пароль" @keyup.enter="register" />
      <button @click="register">Зарегистрироваться</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>Уже есть аккаунт? <router-link class="log" to="/login">Войти</router-link></p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { auth } from "../firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const router = useRouter();
      const errorMessage = ref("");

      const register = async () => {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

        if (!emailRegex.test(email.value)){
            errorMessage.value = "Некорректный email"
            return;
        }

        if (!passwordRegex.test(password.value)){
            errorMessage.value = "Ваш пароль должен содержать минимум 6 символов, 1 заглавную букву и 1 цифру"
        }

        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          router.push("/");
        } catch (error) {
         return
        }
      };
  
      return { email, password, errorMessage, register };
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
    width: 150px;
    height: 25px;
    border-radius: 10px;
    background-color: aqua;
    border: 0 none;
    cursor: pointer;
    font-size: 13px;
  }

  .auth-container .log{
    text-decoration: none;
  }

  .error {
    color: red;
    font-size: 14px;
  }
  </style>
  