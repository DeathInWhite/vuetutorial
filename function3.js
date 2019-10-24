//Vuex manejo de datos tanto para el padre como el hijo (componentes)

Vue.component('titulo', { //esta es otra manera de llamar al numero del store
    template: `
    <div>
        <h1>numero visualizado desde padre: {{numero}}</h1>
        <button @click="aumentar">+</button>
        <button @click="disminuir">-</button>
        <button @click="disminuirNveces(2)">-2</button>
        <button @click="disminuirNveces(otroNumero)">-{{otroNumero}}</button>
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero', 'otroNumero']) //referencia el numero del store de abajo
        //el computed espera variable o retornos de alguna variable, pero con este metodo recibimos un objeto
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir', 'disminuirNveces', 'disminuirNveces']) //este es para llamar al metodo
    }
})

Vue.component('hijo', { //esta es una manera  de llamar al numero del store
    template: `
    <div>
        <h1>numero visualizado desde hijo: {{$store.state.numero}}</h1>
        <button @click="$store.commit('aumentar')">+</button>
        <button @click="$store.commit('disminuir')">-</button>
    </div>
    `
})

const store = new Vuex.Store({ //este es lo nuevo de a partir de Vuex
    state: { //los datos, "data"
        numero: 0,
        otroNumero: 10,
    },
    mutations: { //los metodos, "methods"
        aumentar(state) { // o tambien se puede poner::: aumentar(){this.state.numero++}
            state.numero++
        },
        disminuir(state) {
            state.numero--
        },
        disminuirNveces(state, n) {
            state.numero -= n
        },
        disminuirEspecifico(state, n) {
            state.numero -= n
        }
    }
})

new Vue({
    el: '#App1',
    store //referenciado al "const store"
})