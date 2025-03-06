<template>
    <header class="header__main">
      <div class="nav__link">
        <h1>ПОГОДНОЕ ПРИЛОЖЕНИЕ 🌤️</h1>
        <div class="nav__button">
          <router-link class="nav__item" to="/">Weather</router-link>
          <router-link class="nav__item" to="/geo">Geo</router-link>
          <router-link class="nav__item" to="/soon">Soon</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header"
  };
  </script>
  
  <style scoped>
  .header__main {
    width: 100%;
    color: white;
    text-align: center;
    margin-top: 50px;
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

  @media screen and (min-width: 250px) {
    .nav__button{
      padding-bottom: 10%;
    }
  }

  </style>