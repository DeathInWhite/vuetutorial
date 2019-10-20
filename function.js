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
        mensaje: "Hola como estas?",
        progreso: 0,
    },
    methods: {
        sumar() {
            this.progreso++
        },
        restar() {
            this.progreso--
        }
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        clase() {
            return {
                'bg-danger': this.progreso <= 25,
                'bg-warning': this.progreso > 25 && this.progreso <= 50,
                'bg-info': this.progreso > 50 && this.progreso <= 75,
                ' bg-success': this.progreso > 75 && this.progreso <= 100
            }
        }
    }
});

var app10 = new Vue({
    el: '#App10',
    data: {
        mensaje: 'mensaje de muestra',
        beforecreate: ''
    },
    beforeCreate() {
        console.log("------------------------")
        console.log("mensaje de before create")
    },
    created() {
        //al crear los metdoso, observadores y eventos, pero aun no accede al DOM
        //aun no se puede acceder al 'el'
        console.log("mensaje de created")
    },
    beforeMount() {
        //se ejecuta antes de insertar el DOM
        console.log("mensaje de beforeMount")
    },
    mounted() {
        //se ejecuta al insertar el DOM
        console.log("mensaje de mounted")
    },
    beforeUpdate() {
        //Al detectar un cambio
        console.log("mensaje de beforeUpdate")
    },
    updated() {
        //Al realizar los cambios
        console.log("mensaje de updated")
    },
    beforeDestroyed() {
        //antes de destruir la instancia
        console.log("mensaje de beforeDestroyed")
    },
    destroyed() {
        //se destruye toda la instancia
        console.log("mensaje de destroyed")
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
});