//componentes
Vue.component('saludo', {
    template: '<h1>Hola que tal</h1>'
})

var app1 = new Vue({
    el: '#App1',
    data: {
        saludo: 'hola'
    },
    methods: {

    },
    computed: {

    }
});