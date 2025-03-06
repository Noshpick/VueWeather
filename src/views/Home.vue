<template>
<div class="wrapper">
    <p>Узнать погоду в {{ city == '' ? 'Вашем городе' : city }}</p>
    <div class="info">
    <input type="text" v-model="city" placeholder="Укажите город" @keyup.enter="getWeather()">
    <button v-if="city != ''" @click="getWeather()">Узнать погоду</button>
    <button disabled v-else>Укажите название города</button>
    </div>
    <p>{{ error }}</p>
    <WeatherInfo v-if="info" :info="info" />
  </div>
</template>

<script>
import axios from 'axios';

import WeatherInfo from '../components/WeatherInfo.vue';

const apiKey = import.meta.env.VITE_API_KEY;

export default {

    name: "Home",
    components: {
    WeatherInfo,
  },

  data() {
    return {
      city: '',
      error: '',
      info: null
    };
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = 'Нужно название больше одного символа';
        this.info = null;
        return;
      }

      this.error = '';

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`)
        .then(res => (this.info = res.data))
        .catch(() => {
          this.error = 'Город не найден';
          this.info = null;
        });
    }
  }
};
</script>

<style scoped>

.wrapper {
  width: 900px;
  height: 450px;
  border-radius: 30px;
  padding: 20px;
  background: rgba(114, 131, 111, 0.295);
  text-align: center;
  color: rgb(100, 61, 67);
}

.wrapper p {
  margin-top: 20px;
}

.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid black;
  font-size: 16px;
  padding: 5px 7px;
  outline: none;
}

.wrapper button {
  background: white;
  color: black;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 15px;
  margin-left: 20px;
  border: none;
}

@media screen and (max-width: 479px) {
    .wrapper{
        height: 400px;
    }

    .info{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .info input{
        text-align: center;
    }

    .info button{
        margin-top: 20px;
        width: 57%;
        font-size: 12px;
    }
}

</style>