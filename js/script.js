// DESTRUTTURO LE COMPONENT DELL'APP 
const { createApp } = Vue;
// DEFINISCO LA STRUTTURA DELL'APP
createApp({
    data() {
        return {
            // AGGIUNGO IL CONTENUTO DA POI INSERIRE NEL DOM
            message: "Hello Vue",
            pokemon: {
                img: './img/001.png',
                name: 'Bulbasaur'
            }
        }
    }
}).mount('#app');