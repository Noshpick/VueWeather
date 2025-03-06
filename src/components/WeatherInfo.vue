<template>
    <div class="info" v-if="info">
      <p>Температура: {{ info.main.temp }} °C 🌡️</p>
      <p>Мин. температура: {{ info.main.temp_min }} °C 🥶</p>
      <p>Макс. температура: {{ info.main.temp_max }} °C 🔥</p>
      <p>Ощущается как: {{ info.main.feels_like }} °C 😊</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "WeatherInfo",
    props: {
      info: Object
    }
  };
  </script>
  
  <style scoped>
  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  </style>
  