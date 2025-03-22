const paragraph = document.getElementById("intro");

paragraph.style.backgroundColor = "#f2c556";

const em = document.getElementsByTagName("em");
em[0].style.backgroundColor = "#acbfcc";

document.querySelector("p em").textContent = "USS Voyager Starship";

const div = document.querySelector("#starship");
const img = document.createElement("img");
img.src = "https://bit.ly/3RfG4sY";
img.alt = "starship image";
img.id = "ship";
img.className = "rounded";

div.appendChild(img);

