<template>

<div class="wrapper">
    <h1>ПОГОДНОЕ ПРИЛОЖЕНИЕ🌤️</h1>
    <p>Узнать погоду в {{ city == '' ? 'Вашем городе' : city }}</p>
    <input type="text" v-model="city" placeholder="Укажите город">
    <button v-if="city != ''" @click="getWeather()">Узнать погоду</button>
    <button disabled v-else>Укажите название города</button>
    <p> {{ error }} </p>
<div class="info" v-if="info">
    <p> Температура: {{ info.main.temp }} °C 🌡️</p>
    <p> Мин. температура: {{ info.main.temp_min }} °C 🥶</p>
    <p> Макс. температура: {{ info.main.temp_max }} °C 🔥</p>
    <p> Ощущается как: {{ info.main.feels_like }} °C 😊</p>
</div>
</div>

</template>

<script>
import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY;


export default {
    data(){
        return{
            city: '',
            error: '',
            info: null,
        }
    },
    methods:{
        getWeather(){
            if(this.city.trim().length < 2){
                this.error = 'Нужно название больше одного символа'
                this.info = null
                return false
            }

            this.error = ''
        
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`)
                .then (res => (this.info = res.data))
                .catch((err) => {
                    this.error = 'Город не найден'
                    this.info = null
                })
        }
    }
}

</script>

<style scoped>
.wrapper{
    width: 900px;
    height: 500px;
    border-radius: 30px;
    padding: 20px;
    background: rgba(114, 131, 111, 0.295);
    text-align: center;
    color: rgb(100, 61, 67);
}

.wrapper h1 {
    margin-top: 50px;
}

.wrapper p {
    margin-top: 20px;
}

.wrapper input{
    margin-top: 30px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid black;
    font-size: 16px;
    padding: 5px 7px;
    outline: none;
}

.wrapper button{

    background: white;
    color: black;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 15px;
    margin-left: 20px;

}

.info{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

</style>
