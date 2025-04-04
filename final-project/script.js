document.addEventListener("DOMContentLoaded", () => {
    const projectForm = document.getElementById("project-form");
    const projectList = document.getElementById("project_box"); // Container for projects
    const imageInput = document.getElementById("image");
    const preview = document.getElementById("preview");

    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    displayProjects();

    imageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const link = document.getElementById("link").value;
        const description = document.getElementById("description").value;
        const imageSrc = preview.src;

        if (!title.trim() || !description.trim()) {
            alert("Please fill out all required fields.");
            return;
        }
        

        if (!imageSrc) {
            alert("Please upload an image for your project.");
            return;
        }

        const newProject = { title, link, description, imageSrc };
        projects.push(newProject);
        localStorage.setItem("projects", JSON.stringify(projects));

        displayProjects();
        projectForm.reset();
        preview.style.display = "none";
        imageInput.value = ''; 
    });

    function displayProjects() {
        projectList.innerHTML = '';

        const staticProjects = [
            { img: 'images/logic_gate.jpeg', alt: 'Logic Gate', title: 'Circuit Logic Gate', description: 'Built logic gates for binary operations: OR, AND, XOR.' },
            { img: 'images/voltometer.jpeg', alt: 'Voltometer', title: 'Voltometer', description: 'Designed a voltage-measuring circuit with LCD display.' },
            { img: 'images/robot.jpg', alt: 'Robot', title: 'Claw Robot', description: 'Built a remote-controlled robot for handling objects.' },
            { img: 'images/wwr_website.png', alt: 'White Water Rafting Website', title: 'White Water Rafting Website', description: 'I made a website for a white water rafting company.', link: 'https://moroni-mb.github.io/wdd130/wwr/index.html' }
        ];

        staticProjects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("img_wrap");
            projectDiv.innerHTML = `
                <img src="${project.img}" alt="${project.alt}" class="project-img">
                <div class="img_description">
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                    ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
                </div>
            `;
            projectList.appendChild(projectDiv);
        });

        projects.forEach((project, index) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("img_wrap");
            projectDiv.innerHTML = `
                <img src="${project.imageSrc}" alt="${project.title}" class="project-img">
                <div class="img_description">
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                    ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
                    <button onclick="deleteProject(${index})">Delete</button>
                </div>
            `;
            projectList.appendChild(projectDiv);
        });
    }

    window.deleteProject = (index) => {
        if (confirm("Are you sure you want to delete this project?")) {
            projects.splice(index, 1);
            localStorage.setItem("projects", JSON.stringify(projects));
            displayProjects();
        }
    };

    function viewerTemplate(pic, alt, description) {
        return `
            <div class="viewer" aria-modal="true" role="dialog">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}" class="viewer-img">
                <div class="viewer-description">
                    <h1>${alt}</h1>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }

    // Delegate click event for image descriptions
    projectList.addEventListener("click", function(event) {
        // Check if the target is inside the image description and not the delete button
        if (event.target && event.target.closest('.img_description') && !event.target.closest('button')) {
            const projectDiv = event.target.closest('.img_wrap');
            const img = projectDiv.querySelector('img');
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            const description = event.target.closest('.img_description').querySelector('p').textContent;
            const viewerHTML = viewerTemplate(src, alt, description);
            document.body.insertAdjacentHTML("afterbegin", viewerHTML);
            document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        }
    });

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        if (viewer) {
            viewer.remove();
        }
    }

    window.addEventListener("click", function(event) {
        const modal = document.querySelector(".viewer");
        if (modal && event.target === modal) {
            closeViewer();
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeViewer();
        }
    });
});
