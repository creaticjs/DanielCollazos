// Arreglo con todos los equipos
var equipos = [
    {
        name: "América de Cali",
        foundation: "13 de febrero de 1927",
        city: "Cali",
        category: "A",
        stadium: "Estadio Pascual Guerrero",
        director: "Harold Lozano",
        titles: "15",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/d/d7/AMERICA_DE_CALI-COL_ESCUDO_2_copy.png",
        about: "El punto de inflexión en su historia llegó a mediados de la década de 1970, cuando conquistó su primer título oficial tras más de 50 años de ser constituido y luego de 31 años de la creación del fútbol colombiano.",
        players: ["Carlos Bejarano", "Danilo Arboleda", "Larry Vásquez", "Cristian Dájome"]
    },
    {
        name: "Atlético Nacional",
        foundation: "30 de abril de 1947",
        city: "Medellín",
        category: "A",
        stadium: "Estadio Atanasio Girardot",
        director: "Fernando Castro",
        titles: "28",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Escudo_de_Atlético_Nacional.png",
        about: "Es el equipo más laureado y prestigioso del fútbol colombiano con 28 títulos oficiales entre campeonatos nacionales e internacionales y por ello se le denomina popularmente como el Rey de Copas",
        players: ["Fernando Monetti", "Daniel Bocanegra", "Raúl Loaiza", "Gustavo Torres"]
    },
    {
        name: "Millonarios",
        foundation: "18 de junio de 1946",
        city: "Bógota",
        category: "A",
        stadium: "Estadio El Campín",
        director: "Miguel Angel Russo",
        titles: "20",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Escudo_Millos_70_años_2.svg/512px-Escudo_Millos_70_años_2.svg.png",
        about: "A partir del inicio del campeonato colombiano en 1948 logró la mayor cantidad de los títulos locales que se disputaron y conformó un equipo apodado el Ballet Azul",
        players: ["Wuilker Faríñez", "Anier Figueroa", "César Carrillo", "Ayron del Valle"]
    },
    {
        name: "Deportivo Cali",
        foundation: "28 de febrero de 1941",
        city: "Bogotá",
        category: "A",
        stadium: "Estadio El Campín",
        director: "Guillermo Sanguinetti",
        titles: "16",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/LogoCali-1440p.png/250px-LogoCali-1440p.png",
        about: "Además de sus nueve (9) títulos en la Categoría Primera A el equipo vallecaucano es el club que más veces ha sido subcampeón del Fútbol Profesional Colombiano para un total de catorce 14 subtítulos",
        players: ["Faryd Mondragón", "Mario Yepes", "Andrés Pérez", "Víctor Bonilla"]
    },
    {
        name: "Junior",
        foundation: "7 de agosto de 1924",
        city: "Barranquilla",
        category: "A",
        stadium: "Estadio Metropolitano",
        director: "Julio Comesaña",
        titles: "9",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_de_Atlético_Junior.svg/140px-Escudo_de_Atlético_Junior.svg.png",
        about: "A nivel internacional, es el sexto club del Fútbol Profesional Colombiano con más participaciones internacionales oficiales, en torneos organizados por Conmebol",
        players: ["Sebastián Viera", "Germán Gutiérrez", "James Sánchez", "Luis Sandoval"]
    },
    {
        name: "Independiente Medellín",
        foundation: "14 de noviembre de 1913",
        city: "Medellín",
        category: "A",
        stadium: "Estadio Atanasio Girardot",
        director: "Octavio Zambrano",
        titles: "7",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Escudo_del_Deportivo_Independiente_Medell%C3%ADn.png",
        about: "Es uno de los equipos más representativos del país, con una imponente hinchada y por sus filas han pasado figuras de la talla de Orestes Omar Corbatta y José Manuel Moreno, más conocido como el ''Charro''",
        players: ["Andrés Mosquera", "Hernán Pertúz", "Yulián Anchico", "Rodin Quiñónes"]
    },
    {
        name: "Once Caldas",
        foundation: "15 de enero de 1961",
        city: "Manizales",
        category: "A",
        stadium: "Estadio Palogrande",
        director: "Hubert Bodhert",
        titles: "5",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/5/52/Escudo_Oficial_Once_Caldas.png",
        about: "El equipo de Manizales fue el primero en el país en explotar la publicidad de las grandes empresas, pero paradójicamente y para sorpresa sus bajones económicos, tuvo que ceder el nombre del equipo a los intereses privados",
        players: ["	Jose Fernando Cuadrado", "Diego Peralta", "Diego Arias", "Ray Vanegas"]
    },
    {
        name: "Deportes Tolima",
        foundation: "18 de diciembre de 1954",
        city: "Ibagué",
        category: "A",
        stadium: "Estadio Manuel Murillo Toro",
        director: "Alberto Gamero",
        titles: "4",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tolima_Campe%C3%B3n_2018.png/800px-Tolima_Campe%C3%B3n_2018.png",
        about: "Consiguió su segundo título en el Torneo Apertura 2018, luego de vencer en la final al Atlético Nacional por tiros desde el punto penal.",
        players: ["William Cuesta", "Fainer Torijano", "Carlos Rentería", "Jorge Luis Ramos"]
    },
    {
        name: "Boyacá Chicó",
        foundation: "26 de marzo de 2002",
        city: "Tunja",
        category: "A",
        stadium: "Estadio La Independencia",
        director: "Jhon Jaime Gómez",
        titles: "3",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/9/95/Escudo_del_Boyaca_Chico_Fútbol_Club.png",
        about: "Ha participado en la Copa Libertadores de América en sus ediciones de 2008",
        players: ["Rogerio Caicedo", "Jaime Ayala", "Yuxer Requena", "Óscar Rodas"]
    },
    {
        name: "Deportivo Pasto",
        foundation: "12 de octubre de 1949",
        city: "Pasto",
        category: "A",
        stadium: "Estadio Departamental Libertad",
        director: "Hernán Alberto Lisi",
        titles: "3",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Deportivo_Pasto_logo.png/1024px-Deportivo_Pasto_logo.png",
        about: "Ascendió por primera vez a la máxima categoría en (1998). Históricamente, el Deportivo Pasto fue el primer equipo que, llegado del Torneo de Ascenso, salió campeón del torneo nacional en (2006-I)",
        players: ["Nahuel Losada", "José Julián de La Cuesta", "Julian Guillermo", "Dario Rodríguez"]
    },
    {
        name: "La Equidad",
        foundation: "1 de diciembre de 1982",
        city: "Bogotá",
        category: "A",
        stadium: "Estadio Metropolitano de Techo",
        director: "Luis Fernando Suárez",
        titles: "2",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/0/09/La_Equidad.png",
        about: "Gracias a su título en la Copa Colombia 2008 y sus buenas campañas en sus primeros dos años en Primera División, La Equidad llegó a encontrarse entre los 100 mejores clubes de fútbol del mundo",
        players: ["Diego Novoa", "Andrés Correa", "Pablo Lima", "Hansel Zapata"]
    },
    {
        name: "Cúcuta Deportivo",
        foundation: "10 de septiembre de 1924",
        city: "Cúcuta",
        category: "B",
        stadium: "Estadio General Santander",
        director: "Lucas Pusineri",
        titles: "3",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/9/97/Cucuta_Deportivo_2017_Oficial_Logo.png",
        about: "El 22 de noviembre de 2007 gracias a su desempeño obtuvo diversos premios y reconocimientos por parte de la cadena de televisión Fox Sports, edición Colombia",
        players: ["Jhonny da Silva", "Johnny Mostasilla", "Harrinson Mancilla", "Jefferson Solano"]
    },
    {
        name: "Deportes Quindío",
        foundation: "8 de enero de 1951",
        city: "Armenia",
        category: "B",
        stadium: "Estadio Centenario",
        director: "Alberto Suárez",
        titles: "2",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/0/09/La_Equidad.png",
        about: "Gracias a su título en la Copa Colombia 2008 y sus buenas campañas en sus primeros dos años en Primera División, La Equidad llegó a encontrarse entre los 100 mejores clubes de fútbol del mundo",
        players: ["Julián Mesa", "Diego Luis Fernández", "Yeiner Orozco", "Wilson Carpintero"]
    },
    {
        name: "Unión Magdalena",
        foundation: "8 de enero de 1951",
        city: "Ciénaga",
        category: "B",
        stadium: "Estadio Municipal de Ciénaga",
        director: "Luis Fernando Suárez",
        titles: "2",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/0/09/La_Equidad.png",
        about: "Gracias a su título en la Copa Colombia 2008 y sus buenas campañas en sus primeros dos años en Primera División, La Equidad llegó a encontrarse entre los 100 mejores clubes de fútbol del mundo",
        players: ["Diego Novoa", "Andrés Correa", "Pablo Lima", "Hansel Zapata"]
    },
    {
        name: "Atlético F. C.",
        foundation: "1 de diciembre de 1982",
        city: "Cali",
        category: "B",
        stadium: "Estadio Pascual Guerrero",
        director: "Giovanni Hernández",
        titles: "0",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Escudo_de_Cartago_%28Valle_del_Cauca%29.svg/500px-Escudo_de_Cartago_%28Valle_del_Cauca%29.svg.png",
        about: "A lo largo de sus siete años de existencia el equipo a presentado variaciones de su escudo en seis ocasiones y a cambiado su diseño en tres oportunidades.",
        players: ["Luis Estacio", "Maykel Reyes", "Julián Grueso", "Carlos Castro"]
    },
    {
        name: "Universitario de Popayán",
        foundation: "1 de diciembre de 1982",
        city: "Popayán",
        category: "B",
        stadium: "Estadio Ciro López",
        director: "César Torres",
        titles: "0",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Universitario_de_Popay%C3%A1n.png",
        about: "Fue fundado el 21 de mayo de 2011, actualmente juega en la Categoría Primera B, del fútbol profesional colombiano.",
        players: ["	Nicolás Muñoz", "Fredy Valencia", "Jader Quiñónez", "Diego Rodríguez"]
    }
];
// Nombres de la tabla posiciones
var nombresTabla = ["CLUB", "PJ", "G", "E", "P", "GF", "GC", "DG", "PTS"];
// Creación de options con la información del arreglo equipos
var start = false;
var table = document.getElementById('tabla');
var card = document.getElementById('tarjeta');
var div = document.getElementById('divFicha');
var divResultados = document.getElementById('resultados');
// Elementos de la tarjeta
datos = [];
var aux = ["name", "foundation", "city", "category", "stadium", "director", "titles", "urlImage", "about", "players"];
aux.forEach(
    function(element){
        datos.push(document.getElementById(element));
    }
);
class Posicion {
    constructor(club, pj, g, e, p, gf, gc, dg, pts) {
        this.club = club;
        this.pj = pj;
        this.g = g;
        this.e = e;
        this.p = p;
        this.gf = gf;
        this.gc = gc;
        this.dg = dg;
        this.pts = pts;
    }
    getElemento(index) {
        switch (index) {
            case "0":
                return this.club;
                break;
            case "1":
                return this.pj;
                break;
            case "2":
                return this.g;
                break;
            case "3":
                return this.e;
                break;
            case "4":
                return this.p;
                break;
            case "5":
                return this.gf;
                break;
            case "6":
                return this.gc;
                break;
            case "7":
                return this.dg;
                break;
            case "8":
                return this.pts;
                break;
            default:
            return "";
                break;
        }
    }
}
// Arrego con posiciones de los equipos
var posiciones = [];
posiciones.push(new Posicion("La Equidad",8,7,1,0,11,1,10,22));
posiciones.push(new Posicion("Once Caldas",7,6,2,0,16,7,9,17));
posiciones.push(new Posicion("Tolima",8,6,1,1,15,8,7,19));
posiciones.push(new Posicion("Junior",7,4,1,2,10,4,6,13));
posiciones.push(new Posicion("Alianza Petrolera",8,4,1,3,15,17,-2,13));
posiciones.push(new Posicion("Atlético Nacional",8,3,3,2,12,9,3,12));
posiciones.push(new Posicion("Medellín",8,3,3,2,10,8,2,12));
posiciones.push(new Posicion("Aguilas Pereira",8,3,3,1,8,5,3,12));
posiciones.push(new Posicion("Deportivo Cali",8,3,3,1,7,6,1,12));
posiciones.push(new Posicion("Santa Fe",8,2,5,1,9,5,4,11));
posiciones.push(new Posicion("Bucaramanga",8,3,2,3,8,10,-2,11));
posiciones.push(new Posicion("Millonarios",8,2,4,2,10,8,2,10));
posiciones.push(new Posicion("América",8,2,3,3,5,8,-3,9));
posiciones.push(new Posicion("Boyacá Chicó",8,2,2,4,8,12,-4,8));
posiciones.push(new Posicion("Patriotas",8,1,4,3,8,8,0,7));
posiciones.push(new Posicion("Pasto",8,1,3,4,4,9,-5,6));
posiciones.push(new Posicion("Jaguares",8,1,3,4,6,12,-6,6));
posiciones.push(new Posicion("Leones",8,1,1,6,6,12,-6,4));
posiciones.push(new Posicion("Envigado",8,0,3,5,6,14,-8,3));
posiciones.push(new Posicion("Atlético Huila",8,0,2,6,5,14,-9,2));

// Función: para ordenar la tabla posiciones
function ordenar(index, orden) {
    console.log("Valores: "+index+" ,orden: "+orden);
    if (orden) {
        var metodo = function (element1, element2) {
            console.log("DAto: "+element1.getElemento(index));
            if (element1.getElemento(index) > element2.getElemento(index)) {
                return -1;

            } else if (element1.getElemento(index) < element2.getElemento(index)) {
                return 1;
            }
            return 0;
        }
    } else {
        var metodo = function (element1, element2) {
            if (element1.getElemento(index) > element2.getElemento(index)) {
                return 1;

            } else if (element1.getElemento(index) < element2.getElemento(index)) {
                return -1;
            }
            return 0;
        }
    }
    posiciones.sort(metodo);
    var body = document.getElementsByTagName('tbody');
    table.removeChild(body[0]);
    makeContent();
}
function makeHead() {
    var head = document.createElement('thead');
    var htr = "<tr>";
    var btr = "</tr><tr>";
    nombresTabla.forEach(
        function (element, index) {
            htr += `<th scope="col">${element}</th>`;
            if (index == 0) {
                btr += `<th><select id="${index}" onchange="ordenar(this.id, this.selectedIndex)"><option value="0">A->Z</option><option value="1">Z->A</option></th>`;
            } else {
                btr += `<th><select id="${index}" onchange="ordenar(this.id, this.selectedIndex)"><option value="0">Menor a Mayor</option><option value="1">Mayor a Menor</option></th>`;
            }
        });
    head.innerHTML = htr + btr + "</tr>";
    table.appendChild(head);
    table.style.display = "inline";
    makeContent();
}
function makeContent() {
    var body = document.createElement('tbody');
    var tr = "";
    posiciones.forEach(e => {
        tr += `<tr><td>${e.club}</td><td>${e.pj}</td><td>${e.g}</td><td>${e.e}</td><td>${e.p}</td><td>${e.gf}</td><td>${e.gc}</td><td>${e.dg}</td><td>${e.pts}</td>`;
    });
    body.innerHTML = tr;
    table.appendChild(body);
    table.style.alignContent = "center";
}
function makeTable() {
    div.style.display = 'none';
    if (!start) {
        start = true;
        makeHead();
    } else {
        table.style.display = "inline";
    }
}
function makeSelection(){
    table.style.display = 'none';
    div.style.display = 'inline';
}
function filtrar(categoria){
    var opciones = `<br><h3>Resultados Categoria ${categoria}:</h3><br><select id='selCategoria' onchange="buscar(this)">`;
    equipos.filter(
        function(equipo){
            return equipo.category==categoria;
        }
    ).forEach(
        function(equipo,index){
        opciones += `<option value='${index}'>${equipo.name}</option>`;
        }
    );
    opciones += "</select>";
    divResultados.innerHTML = opciones;
}
function buscar(event){
    var equipo = equipos.find(
        function(equipo){
            return equipo.name == event.options[event.selectedIndex].text;
        }
    );
    card.style.display = 'inline';
    desplegar(equipo);
}
function desplegar(objeto){
    datos[0].innerHTML = "<strong>Club: </strong>" + objeto.name;
    datos[1].innerHTML = "<strong>Fundación: </strong>" + objeto.foundation;
    datos[2].innerHTML = "<strong>Cuidad: </strong>" + objeto.city;
    datos[3].innerHTML = "<strong>Categoría: </strong>" + objeto.category;
    datos[4].innerHTML = "<strong>Estadio: </strong>" + objeto.stadium;
    datos[5].innerHTML = "<strong>Director: </strong>" + objeto.director;
    datos[6].innerHTML = "<strong>Títulos: </strong>" + objeto.titles;
    datos[7].src = objeto.urlimage;
    datos[7].alt = objeto.name;
    datos[7].width = "200";
    datos[7].height = "300";
    datos[8].innerHTML = "<strong>Sobre: </strong>" + objeto.about;
    datos[9].innerHTML = "<strong>Jugadores: </strong>" + objeto.players;
}