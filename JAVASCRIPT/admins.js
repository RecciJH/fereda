import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { auth, db } from "../JAVASCRIPT/adminsmodule.js";
import { loginCheck } from "../JAVASCRIPT/loginCheck.js";
import { setupPosts } from "../JAVASCRIPT/postlist.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { showMessage } from "../JAVASCRIPT/showMessage.js";

import "../JAVASCRIPT/signupform.js";
import "../JAVASCRIPT/signinForm.js";
import "../JAVASCRIPT/logout.js";
import "../JAVASCRIPT/googleLogin.js";

const obraForm = document.querySelector("#obra-form");
const postsContainer = document.querySelector(".posts"); 
const accordeon = document.querySelector("#accordionFlushExample");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const allowedEmails = [
      "renejuarezhernandez10@gmail.com",
      "arcotechosfereda@gmail.com",
    ];
    const userEmail = user.email;

    if (allowedEmails.includes(userEmail)) {
      obraForm.style.display = "block";
      postsContainer.style.display = "block";
      accordeon.style.display = "block";
      obrasTable.show();


    } else {
      obraForm.style.display = "none";
      postsContainer.style.display = "none";
      accordeon.style.display = "none";
      obrasTable.hide();

   
    }
    const querySnapShot = await getDocs(collection(db, "posts"));
    setupPosts(querySnapShot.docs);
    loginCheck(user);
  } else {
    obraForm.style.display = "none";
    postsContainer.style.display = "none";
    accordeon.style.display = "none";
    obrasTable.hide();
    setupPosts([]);
    loginCheck(null);
  }
});

// Agregar un evento de escucha para el formulario
obraForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const idcliente = obraForm.idcliente.value;
  const cliente = obraForm.cliente.value;
  const ubicacion = obraForm.ubicacion.value;
  const techo = obraForm.techo.value;
  const dimensiones = obraForm.dimensiones.value;
  const especificaciones = obraForm.especificaciones.value;
  const costo = obraForm.costo.value;
  const ganancia = obraForm.ganancia.value;
  const duracion = obraForm.duracion.value;
  const fechainicio = obraForm.fechainicio.value;
  const fechafin = obraForm.fechafin.value;
  // Crear un objeto con los valores recogidos
  const obraData = {
    idcliente: idcliente,
    cliente: cliente,
    ubicacion: ubicacion,
    techo: techo,
    dimensiones: dimensiones,
    especificaciones: especificaciones,
    costo: costo,
    ganancia: ganancia,
    duracion: duracion,
    fechainicio: fechainicio,
    fechafin: fechafin,
  };

  try {
    // Agrega los datos a la colección "obras" en Firestore
    await addDoc(collection(db, "obras"), obraData);
    obraForm.reset();
    showMessage("Obra registrada", "success");

    // Colapsar el contenido del acordeón
    const accordionBody = document.querySelector("#accordionFlushExample");
    const accordionInstance = new bootstrap.Collapse(accordionBody);
    accordionInstance.hide();

    // Esperar un breve período antes de actualizar la tabla
    setTimeout(() => {
      fetchAndDisplayData();
    }, 500); // Espera 500 milisegundos (ajusta si es necesario)
  } catch (error) {
    console.error("Error al agregar la obra:", error);
    showMessage("Error al agregar la obra", "error");
  }
});

const obrasTable = $("#obras-table");



async function fetchAndDisplayData() {
  const querySnapShot = await getDocs(collection(db, "obras"));
  if ($.fn.DataTable.isDataTable("#obras-table")) {
    obrasTable.DataTable().destroy();
  }
  const tableData = [];

  querySnapShot.forEach((doc) => {
    const obra = doc.data();
    tableData.push([
      obra.idcliente,
      obra.cliente,
      obra.ubicacion,
      obra.techo,
      obra.dimensiones,
      obra.especificaciones,
      obra.costo,
      obra.ganancia,
      obra.duracion,
      obra.fechainicio,
      obra.fechafin
    ]);
  });
  const response = await fetch("../JSON/es-MX.json");
  const language = await response.json();

  // Inicializar DataTables
  obrasTable.DataTable({
    data: tableData,
    columns: [
      { title: "ID Cliente" },
      { title: "Cliente" },
      { title: "Ubicación" },
      { title: "Techo" },
      { title: "Dimensiones" },
      { title: "Especificaciones" },
      { title: "Costo" },
      { title: "Ganancia" },
      { title: "Duración" },
      { title: "Fecha Inicio" },
      { title: "Fecha Fin" }
    ],
    language: language,
  });
}

// Código para cargar el archivo JSON y utilizarlo como lenguaje en DataTables
fetch("../JSON/es-MX.json")
  .then((response) => response.json())
  .then((language) => {
    fetchAndDisplayData(); // Llamamos a la función después de cargar el archivo JSON
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });
