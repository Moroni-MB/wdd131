const menuButton = document.querySelector("#menu-button")
function toggleMenu() {
    const menu = document.querySelector("#menu-hide")
    menu.classList.toggle("hide")
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("#menu-hide");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
  }

function viewHandler(event) {
    // Ensure the clicked element is an image
    if (event.target.tagName === "IMG") {
        const clickedElement = event.target;

        // Get the source of the clicked image
        const src = clickedElement.getAttribute("src");

        // Assuming the images are named like 'norris-sm.jpeg' and we need 'norris-full.jpeg'
        const newImageSrc = src.replace("-sm", "-full");

        // Create the viewer HTML
        const viewerHTML = viewerTemplate(newImageSrc, clickedElement.getAttribute("alt") || "");
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        // Add event listener to close the viewer when the close button is clicked
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}