//Actions y MapActions, manejo de la data

Vue.component('titulo', {
    template: `
    <div>
        <h1>numero visualizado desde padre: {{numero}}</h1>
        <button @click="aumentar">+</button>
        <button @click="disminuir">-</button>
        <button @click="disminuirNveces(2)">-2</button>
        <button @click="disminuirNveces(otroNumero)">-{{otroNumero}}</button>
        <button @click="obtenerCursor">Obtener cursos</button>
        <ul v-for="item in cursos">
            <li>
            {{item.nombre}}
            {{item.id}}
            </li>
        </ul>
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero', 'otroNumero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir', 'disminuirNveces', 'disminuirNveces']),
        ...Vuex.mapActions(['obtenerCursor'])
    }
})

Vue.component('hijo', {
    template: `
    <div>
        <h1>numero visualizado desde hijo: {{$store.state.numero}}</h1>
        <button @click="$store.commit('aumentar')">+</button>
        <button @click="$store.commit('disminuir')">-</button>
    </div>
    `
})

const store = new Vuex.Store({
    state: {
        numero: 0,
        otroNumero: 10,
        cursos: [] //se añade este
    },
    mutations: {
        aumentar(state) {
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
        },
        llenarCursos(state, cursosAccion) { //metodo para llenar cursos en la variable
            state.cursos = cursosAccion
        }
    },
    actions: { // con este cargo los datos del cursos.json, este funciona como un computed
        obtenerCursor: async function({ commit }) {
            const data = await fetch("cursos.json") //estoy llamando a cursos,json y lo paso a una variable
            const cursos = await data.json(); //esta es la variable que le paso la data json obtenida
            commit('llenarCursos', cursos) //aca llamamos al metodo llenar cursos y le pasamos la variable
        }
    }
})

new Vue({
    el: '#App1',
    store
})