//componentes
Vue.component('saludo', {
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>asdas</h3>
        <h3>{{otrodato}}</h3>
    </div>
    `, //'' estas comillas es de una sola linea
    data() {
        return {
            saludo: 'hola',
            otrodato: 'otro saludo'
        }
    }
})

var app1 = new Vue({
    el: '#App1',
});


//comunicacion entre componentes, padre a hijo
Vue.component('padre', {
    template: `
    <div class="p-5 bg-success">
        <h2>Componente padre</h2>
        <h1>dato a pasar al hijo: {{datoparaelhijo}} <button @click="datoparaelhijo++">+</button></h1>
        <hijo numero="5" :datoahijo="datoparaelhijo"></hijo>
    </div>
    `,
    //el numero="5" es un dato que les estamos enviando al hijo, este lo recibe utilizando una logica
    //llamada props
    data() {
        return {
            datoparaelhijo: 0
        }
    }
})

Vue.component('hijo', {
    template: `
    <div class="p-5 bg-danger">
        <h3>Componente hijo</h3>
        <h5>{{numero}}</h5>
        <h3>Dato cambiante del padre: {{datoahijo}}</h3>
    </div>
    `,
    props: ['numero', 'datoahijo'] //este es el mismo nombre que le pasamos desde el padre
})


var app2 = new Vue({
    el: '#App2',
});

//comunicacion entre componentes, hijo a padre
Vue.component('padre', {
    template: `
    <div class="p-5 bg-success">
        <h2>Componente padre</h2>
        <h3>Dato recibido por el padre desde el hijo: {{numerorecibidodelhijo}}</h3>
        <hijo @datoparapadre="numerorecibidodelhijo = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numerorecibidodelhijo: 0
        }
    }
})

Vue.component('hijo', {
    template: `
    <div class="p-5 bg-danger">
        <h3>Componente hijo</h3>
        <h1>Dato a pasar para el padre: {{datoparapadre}}</h1>
    </div>
    `,
    props: [],
    data() {
        return {
            datoparapadre: 111
        }
    },
    mounted() { //este se ejecuta cuando el dom ya esta listo
        this.$emit('datoparapadre', this.datoparapadre) //este es para mandar al padre
    }
})


var app3 = new Vue({
    el: '#App3',
});