import { header } from "./componentes/header";
import { footer } from "./componentes/footer";
// Import all of Bootstrap's JS
import "bootstrap";
// Import our custom CSS
import "./scss/styles.scss";

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from "./componentes/enrutador";

//Inyectamos el componente header
document.querySelector("header").innerHTML = header.template;
header.script()
//Inyectamos el componente footer
document.querySelector("footer").innerHTML = footer.template;

enrutador.observadorRutas();
// Cargamos la página home
window.location = "#/home";