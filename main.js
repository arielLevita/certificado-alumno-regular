const month = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const d = new Date();
let dia = d.getDate();
let mes = month[d.getMonth()];
let anio = d.getFullYear();

const career = ["Profesorado de Educación Secundaria en Geografía, Res. MECH 303/14",
    "Profesorado de Educación Secundaria en Geografía, Res. MECH 544/19",
    "Profesorado de Educación Secundaria en Historia, Res. MECH 304/14",
    "Profesorado de Educación Secundaria en Historia, Res. MECH 547/19",
    "Profesorado de Educación Secundaria en Lengua y Literatura, Res. MECH 302/14",
    "Profesorado de Educación Secundaria en Lengua y Literatura, Res. MECH 536/19",
    "Profesorado de Educación Inicial, Res. MECH 309/14",
    "Profesorado de Educación Primaria, Res. MECH 310/14",
    "Profesorado de Educación Primaria, Res. MECH 328/22",
    "Profesorado de Inglés, Res. MECH 308/14",
    "Profesorado de Inglés, Res. MECH 326/22",
    "Tecnicatura Superior en Tiempo Libre y Recreación, Res. MECH 176/16",
    "Tecnicatura Superior en Gestión Administrativa Orientada a la Producción"];

let btnGenerar = document.getElementById("btnGenerate");

btnGenerar.addEventListener('click', () => {
    let pariente = "";
    let checkbox = document.getElementById("autoSizingCheck");
    let nombrePariente = document.getElementById("floatingRelativeName").value;
    let apellidoPariente = document.getElementById("floatingRelativeLastName").value;
    let dniPariente = document.getElementById("floatingRelativeId").value;
    if (checkbox.checked) {
        pariente = ` hijo/a de ${nombrePariente} ${apellidoPariente} (DNI N°${dniPariente}),`;
    };

    let nombre = document.getElementById("floatingName").value;
    let apellido = document.getElementById("floatingLastName").value;
    let dni = document.getElementById("floatingId").value;
    let anioCursada = document.getElementById("floatingYear").value;
    let carrera = career[document.getElementById("floatingCareer").value - 1];
    let destino = document.getElementById("floatingDestination").value;

    //! En caso de volver a agregar el parentezco, insertar la variable pariente en el párrafo del certificado.
    document.getElementById("formulario").innerHTML =
        `<div class="container d-flex flex-column justify-content-center certificado">
            <h4 class="mb-5 text-center">Certificado de Alumno Regular</h4>
            <p>La Dirección del Instituto Superior de Formación Docente Nº 809 CERTIFICA que <span class="text-uppercase fw-bold">${nombre} ${apellido}</span> (DNI Nº${dni}), ${pariente}es alumno/a regular en ${anioCursada} año de la carrera de ${carrera}.</p>
            <p>A los ${dia} días del mes de ${mes} de ${anio}, en la ciudad de Esquel, se extiende el presente CERTIFICADO a pedido de el/la interesado/a, para ser presentado ante las autoridades de ${destino}.</p>
            <span id="firmas"></span>
            <div class="text-center lh-1" id="datosInstituto">
                <p class="m-0 pieDePagina">ISFD N° 809 - República de Costa Rica</p>
                <p class="m-0 pieDePagina">Sarmiento 940 / Esquel-Chubut / (2945) 452323</p>
                <p class="m-0 pieDePagina">isfd809-chu.infd.edu.ar / 809esquel@gmail.com</p>
            </div>
        </div>`;

    document.getElementById("btnPrint").innerHTML =
        `<div class="d-flex justify-content-center my-5">
            <input class="btn btn-primary" type="button" value="Imprimir" onclick="window.print()">
        </div>`;
});

