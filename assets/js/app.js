const radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];

const traumatologia = [
    {
        hora: "08:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
];

const dental = [
    {
        hora: "08:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

const atencionesRadiologia = document.querySelector(".atencionesRadiologia");
const atencionesTraumatologia = document.querySelector(".atencionesTraumatologia");
const atencionesDental = document.querySelector(".atencionesDental");

atencionesRadiologia.innerText = `Primera atencion: ${radiologia[0].paciente} - ${
    radiologia[0].prevision
} | Ultima atencion: ${radiologia[radiologia.length - 1].paciente} - ${
    radiologia[radiologia.length - 1].prevision
}`;

atencionesTraumatologia.innerText = `Primera atencion: ${traumatologia[0].paciente} - ${
    traumatologia[0].prevision
} | Ultima atencion: ${traumatologia[traumatologia.length - 1].paciente} - ${
    traumatologia[traumatologia.length - 1].prevision
}`;

atencionesDental.innerText = `Primera atencion: ${dental[0].paciente} - ${
    dental[0].prevision
} | Ultima atencion: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`;

//-----------------------------------------------------------------------------------------------------------

const tableRadiologia = document.querySelector("#tableRadiologia");
const tableTraumatologia = document.querySelector("#tableTraumatologia");
const tableDental = document.querySelector("#tableDental");

tableRadiologia.innerHTML = "";
tableTraumatologia.innerHTML = "";
tableDental.innerHTML = "";

radiologia.forEach((item) => {
    tableRadiologia.innerHTML += `<tr>
    <td>${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td> 
</tr>`;
});

traumatologia.forEach((item) => {
    tableTraumatologia.innerHTML += `<tr>
    <td>${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td> 
</tr>`;
});

dental.forEach((item) => {
    tableDental.innerHTML += `<tr>
    <td>${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td> 
</tr>`;
});

//-------------------pregunta1-------------------------------------------------------

const traumatologiaAgregados = [
    {
        hora: "09:00",
        especialista: "RENÉ POBLETE",
        paciente: "ANA GELLONA",
        rut: "13123329-7",
        prevision: "ISAPRE",
    },
    {
        hora: "09:30",
        especialista: "MARIA SOLAR",
        paciente: "RAMIRO ANDRADE",
        rut: "12221451-K",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL LOYOLA",
        paciente: "CARMEN ISLA",
        rut: "10112348-3",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "ANTONIO LARENAS",
        paciente: "PABLO LOAYZA",
        rut: "13453234-1",
        prevision: "ISAPRE",
    },
    {
        hora: "12:00",
        especialista: "MATIAS ARAVENA",
        paciente: "SUSANA POBLETE",
        rut: "14345656-6",
        prevision: "FONASA",
    },
];

traumatologiaAgregados.forEach((object) => {
    traumatologia.push(object);
});

tableTraumatologia.innerHTML = "";

traumatologia.forEach((item) => {
    tableTraumatologia.innerHTML += `<tr>
    <td>${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td> 
</tr>`;
});

//----------------pregunta2------------------------------------------------------------

radiologia.pop();
radiologia.shift();

tableRadiologia.innerHTML = "";

radiologia.forEach((item) => {
    tableRadiologia.innerHTML += `<tr>
    <td>${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>`;
});

//----------------pregunta3------------------------------------------------------------

const dentalSinTable = document.querySelector("#dentalSinTable");

radiologia.forEach((item) => {
    dentalSinTable.innerHTML += `<p>${item.hora} - ${item.especialista} - ${item.especialista} - ${item.paciente} - ${item.rut} - ${item.prevision}</p> `;
});

//----------------pregunta4------------------------------------------------------------

const listadoPacientes = document.querySelector("#listadoPacientes");

const pacientesJuntos = [...radiologia, ...traumatologia, ...dental];

pacientesJuntos.forEach((object) => {
    listadoPacientes.innerHTML += `<p>${object.paciente}</p>`;
});

//----------------pregunta5------------------------------------------------------------

const previsionDental = document.querySelector("#previsionDental");

const filtroDental = dental.filter((object) => object.prevision === "ISAPRE");

filtroDental.forEach((item) => {
    previsionDental.innerHTML += `<p>${item.paciente} - ${item.prevision}</p>`;
});

//----------------pregunta6------------------------------------------------------------

const previsionTraumatologia = document.querySelector("#previsionTraumatologia");

const filtroTraumatologia = traumatologia.filter((object) => object.prevision === "FONASA");

filtroTraumatologia.forEach((item) => {
    previsionTraumatologia.innerHTML += `<p>${item.paciente} - ${item.prevision}</p>`;
});
