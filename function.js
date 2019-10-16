//MOSTRANDO LA DATA
var app1 = new Vue({
    el: '#App1',
    data: {
        mensaje: "Este mensaje esta escrito por Vue",
        frutas: ["pera", "manzana", "platano"]
    }
});

//CICLO FOR
var app2 = new Vue({
    el: '#App2',
    data: {
        frutas: ["pera", "manzana", "platano"],
        otrasFruta: [
            { nombre: "pera", cantidad: 10 },
            { nombre: "manzana", cantidad: 10 },
            { nombre: "platano", cantidad: 10 },
        ]
    }
});

//CONDICION IF
var app3 = new Vue({
    el: '#App3',
    data: {
        condicion: false,
        condicion2: true
    }
});

//V-MODEL
var app4 = new Vue({
    el: '#App4',
    data: {
        variableCambiada: 'texto'
    }
});

//METODOS
var app5 = new Vue({
    el: '#App5',
    data: {
        personas: [
            { nombre: "pepe", edad: 10 },
            { nombre: "pepito", edad: 20 },
            { nombre: "juan", edad: 32 },
        ],
        personanueva: ""
    },
    methods: {
        interactuar() {
            alert("diste click")
        },
        agregarpersona() {
            this.personas.push({
                nombre: this.personanueva,
                edad: 0
            })
        }
    }
});