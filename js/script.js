// DESTRUTTURO LE COMPONENT DELL'APP 
const { createApp } = Vue;
// DEFINISCO LA STRUTTURA DELL'APP
createApp({
    data() {
        return {
            // AGGIUNGO IL CONTENUTO DA POI INSERIRE NEL DOM
            message: "Hello Vue",
            vue: {
                logo: './img/001.png',
                name: 'Vue'
            }
        }
    }
}).mount('#app');