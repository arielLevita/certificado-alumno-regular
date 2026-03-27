const month = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const d = new Date();
const dia = d.getDate();
const mes = month[d.getMonth()];
const anio = d.getFullYear();

const formularioContenedor = document.getElementById("formulario");
const certificadoContenedor = document.getElementById("certificado-container");
const btnPrintContenedor = document.getElementById("btnPrint");
const formularioNode = document.querySelector("form");

// Nuevos selectores para la plantilla y los botones fijos
const templateCertificado = document.getElementById("certificado-template");
const btnEdit = document.getElementById("btnEdit");
const btnPrintAction = document.getElementById("btnPrintAction");

const career = ["Profesorado de Educación Secundaria en Geografía, Res. MECH 544/19",
    "Profesorado de Educación Secundaria en Historia, Res. MECH 547/19",
    "Profesorado de Educación Secundaria en Lengua y Literatura, Res. MECH 536/19",
    "Profesorado de Educación Inicial, Res. MECH 309/14",
    "Profesorado de Educación Inicial, Res. MECH 327/22",
    "Profesorado de Educación Primaria, Res. MECH 310/14",
    "Profesorado de Educación Primaria, Res. MECH 328/22",
    "Profesorado de Inglés, Res. MECH 308/14",
    "Profesorado de Inglés, Res. MECH 326/22",
    "Tecnicatura Superior en Niñez, Adolescencia y Familia",
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

    certificadoContenedor.innerHTML = "";

    let carreraText = career[document.getElementById("floatingCareer").value - 1];
    let parienteText = "";
    if (checkbox.checked) {
        parienteText = `, hijo/a de ${nombrePariente.value.trim()} ${apellidoPariente.value.trim()} (DNI N°${dniPariente.value.trim()}),`;
    } else {
        parienteText = ",";
    }

    const clone = templateCertificado.content.cloneNode(true);

    clone.querySelector('[data-id="nombreCompleto"]').textContent = `${nombre.value.trim()} ${apellido.value.trim()}`;
    clone.querySelector('[data-id="dni"]').textContent = dni.value.trim();
    clone.querySelector('[data-id="pariente"]').textContent = parienteText;
    clone.querySelector('[data-id="anioCursada"]').textContent = anioCursada.value;
    clone.querySelector('[data-id="carrera"]').textContent = carreraText;
    clone.querySelector('[data-id="dia"]').textContent = dia;
    clone.querySelector('[data-id="mes"]').textContent = mes;
    clone.querySelector('[data-id="anio"]').textContent = anio;

    certificadoContenedor.appendChild(clone);

    formularioContenedor.classList.add("d-none");
    certificadoContenedor.classList.remove("d-none");
    btnPrintContenedor.classList.remove("d-none");
    btnPrintContenedor.classList.add("d-flex");
});

btnEdit.addEventListener('click', () => {
    formularioContenedor.classList.remove("d-none");
    certificadoContenedor.classList.add("d-none");
    btnPrintContenedor.classList.remove("d-flex");
    btnPrintContenedor.classList.add("d-none");
});

btnPrintAction.addEventListener('click', () => {
    window.print();
});

function formatearDNI(e) {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }

    e.target.value = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

dni.addEventListener("input", formatearDNI);
dniPariente.addEventListener("input", formatearDNI);