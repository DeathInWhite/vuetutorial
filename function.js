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

//KEYAPP
var app6 = new Vue({
    el: '#App6',
    data: {
        datoingresar: "",
    },
    methods: {
        agregarDato() {
            alert(this.datoingresar)
        }
    }
});

//COMPUTED
var app7 = new Vue({
    el: '#App7',
    data: {
        frutas: ["pera", "manzana", "platano"],
        otrasFruta: [
            { nombre: "pera", cantidad: 10 },
            { nombre: "manzana", cantidad: 10 },
            { nombre: "platano", cantidad: 10 },
        ],
        nuevaFruta: "",
        totalFrutas: 0
    },
    methods: {
        agregarFruta() {
            this.otrasFruta.push({ nombre: this.nuevaFruta, cantidad: 0 })
            this.nuevaFruta = ""
        }
    },
    computed: { //en este caso se ejecuta el computed cada vez que se cambie datos en la cantidad o total
        sumandoFruta() {
            this.totalFrutas = 0
            for (fruta of this.otrasFruta) {
                this.totalFrutas = this.totalFrutas + fruta.cantidad
            }
            return this.totalFrutas
        }
    }
});

//CLASES
var app8 = new Vue({
    el: '#App8',
    data: {
        fondo: 'bg-warning',
        color: false,
    },
    methods: {
        cambiarcolor() {
            this.color = !this.color
        }
    },
    computed: {

    }
});

//PROPIEDADES COMPUTADAS
var app9 = new Vue({
    el: '#App9',
    data: {

    },
    methods: {

    },
    computed: {

    }
});