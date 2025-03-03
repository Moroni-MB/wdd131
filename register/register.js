document.addEventListener("DOMContentLoaded", function () {
    let current_num_of_participants = 1;
    const participantsFieldset = document.querySelector(".participants");
    const addButton = document.getElementById("add");
    const form = document.getElementById("form");
    const summary = document.getElementById("summary");

    addButton.addEventListener("click", function () {
        current_num_of_participants++;

        const firstParticipant = document.querySelector(".participants section");

        if(!firstParticipant) {
            console.error("No participant section found!");
            return;
        }

        const newParticipant = firstParticipant.cloneNode(true);

        newParticipant.className = `participant${current_num_of_participants}`;

        const title = newParticipant.querySelector("p");
        if (title) {
            title.textContent = `Participant ${current_num_of_participants}`;
        }

        newParticipant.querySelectorAll("input, select").forEach((input) => {
            if (input.id) {
                input.id = input.id + "_" + current_num_of_participants;
            }
            if (input.name) {
                input.id = input.name + "_" + current_num_of_participants;
            }
            input.value = "";
        })

        participantsFieldset.insertBefore(newParticipant, addButton);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let totalFee = 0;
        const feeInputs = document.querySelectorAll("input[name^='fee']");
        feeInputs.forEach((input) => {
            totalFee += Number(input.value) || 0;
        });

        const adultName = document.getElementById("adult_name").value || "Guest";

        const numParticipants = document.querySelectorAll(".participants section").length;

        form.style.display = "none";

        summary.style.display = "block";
        summary.innerHTML = `<h2>Thank you, ${adultName}, for registering.</h2>
        <p>You have registered ${numParticipants} participant(s) and owe $${totalFee} in fees.</p>`;
    });
});