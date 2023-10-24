import { generateJoke } from "./jokes";
import "./style/style.scss";
import lau from "./assets/lau.jpg";

const img = document.getElementById("img");
img.src = lau;

generateJoke()

document.getElementById("genjoke").addEventListener("click", generateJoke);