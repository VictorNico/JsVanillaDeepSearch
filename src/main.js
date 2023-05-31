import { createApp } from "vue";
import App from "./App.vue";
import JsonViewer from "vue-json-viewer";
// TODO: Add bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(JsonViewer).mount("#app");
