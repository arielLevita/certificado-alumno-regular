const month = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const d = new Date();
const dia = d.getDate();
const mes = month[d.getMonth()];
const anio = d.getFullYear();

const formularioContenedor = document.getElementById("formulario");
const certificadoContenedor = document.getElementById("certificado-container");
const btnPrintContenedor = document.getElementById("btnPrint");

const formularioNode = document.querySelector("form");

const career = ["Profesorado de Educación Secundaria en Geografía, Res. MECH 544/19",
    "Profesorado de Educación Secundaria en Historia, Res. MECH 547/19",
    "Profesorado de Educación Secundaria en Lengua y Literatura, Res. MECH 536/19",
    "Profesorado de Educación Inicial, Res. MECH 309/14",
    "Profesorado de Educación Inicial, Res. MECH 327/22",
    "Profesorado de Educación Primaria, Res. MECH 310/14",
    "Profesorado de Educación Primaria, Res. MECH 328/22",
    "Profesorado de Inglés, Res. MECH 308/14",
    "Profesorado de Inglés, Res. MECH 326/22",
    "Tecnicatura Superior en Tiempo Libre y Recreación, Res. MECH 176/16",
    "Tecnicatura Superior en Gestión Administrativa Orientada a la Producción, Res. MECH 409/18"];

const btnGenerar = document.getElementById("btnGenerate");
const nombre = document.getElementById("floatingName");
const apellido = document.getElementById("floatingLastName");
const dni = document.getElementById("floatingId");
const anioCursada = document.getElementById("floatingYear");
const destino = document.getElementById("floatingDestination");
const checkbox = document.getElementById("autoSizingCheck");
const nombrePariente = document.getElementById("floatingRelativeName");
const apellidoPariente = document.getElementById("floatingRelativeLastName");
const dniPariente = document.getElementById("floatingRelativeId");

formularioNode.addEventListener('submit', (e) => {
    e.preventDefault();

    let carrera = career[document.getElementById("floatingCareer").value - 1];
    let pariente = "";
    if (checkbox.checked) {
        pariente = ` hijo/a de ${nombrePariente.value.trim()} ${apellidoPariente.value.trim()} (DNI N°${dniPariente.value.trim()}),`;
    };

    certificadoContenedor.innerHTML = generateCertificate(nombre, apellido, dni, pariente, anioCursada, carrera, dia, mes, anio, destino);

    btnPrintContenedor.innerHTML = printCertificate();

    formularioContenedor.classList.add("d-none");
    certificadoContenedor.classList.remove("d-none");
    btnPrintContenedor.style.display = "block";
});

function generateCertificate(nombre, apellido, dni, pariente, anioCursada, carrera, dia, mes, anio) {
    return `<div class="d-flex flex-column justify-content-center certificado">
                <h2 class="text-center">Constancia</h2>
                <h2 class="mb-5 text-center">de Alumno Regular</h2>
                <p class="lh-lg">Se deja constancia que <span class="text-uppercase fw-bold">${nombre.value.trim()} ${apellido.value.trim()}</span>, D.N.I. Nº${dni.value.trim()},${pariente} es alumno/a regular en el ${anioCursada.value} de la carrera ${carrera} que se dicta en el Instituto Superior de Formación Profesional N°809 de lunes a viernes de 18:00hs. a 23:00hs. y <span class="fw-bold">cumple con los Art 8, 9, 10, 17, 18 del Reglamento Académico Marco Res. 640/14.</span></p>

                <p class="lh-lg">Se extiende la presente para ser presentada antes las autoridades que correspondan, en Esquel a los ${dia} días del mes de ${mes} de ${anio}.</p>

                <div id="firmas">
                    <div class="text-center py-3 border-top border-black">Firma Vicedirector/\nSecretario Académico</div>
                    <div class="text-center py-3 border-top border-black">Firma Director</div>
                    <div class="text-center py-3 border-top border-black">Sello Institución</div>
                </div>
            </div>`
}

function printCertificate() {
    return `<div class="d-flex justify-content-center gap-3 my-5">
                <button class="btn btn-secondary" type="button" onclick="volverAEditar()">Volver a editar</button>
                <button class="btn btn-primary" type="button" onclick="window.print()">Imprimir</button>
            </div>`
}

function volverAEditar() {
    formularioContenedor.classList.remove("d-none");
    certificadoContenedor.classList.add("d-none");
    btnPrintContenedor.style.display = "none";
    
    certificadoContenedor.innerHTML = "";
}

function formatearDNI(e) {
    let valor = e.target.value.replace(/\D/g, "");
    
    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }
    
    e.target.value = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

dni.addEventListener("input", formatearDNI);
dniPariente.addEventListener("input", formatearDNI);