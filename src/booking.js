// booking.js
function createBookingForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "main-booking";

    const heading = document.createElement("h1");
    heading.textContent = "Book a Table";
    formContainer.appendChild(heading);

    const form = document.createElement("form");

    // Input creator helper
    function createInput(labelText, id, type = "text") {
        const label = document.createElement("label");
        label.textContent = labelText;
        label.htmlFor = id;

        const input = document.createElement(type === "textarea" ? "textarea" : "input");
        input.id = id;
        input.name = id;
        input.required = type !== "textarea";
        if (type !== "textarea") input.type = type;
        if (type === "textarea") input.rows = 4;

        form.appendChild(label);
        form.appendChild(input);

        return input;
    }

    const nameInput = createInput("Name:", "name");
    const phoneInput = createInput("Phone Number:", "phone", "tel");
    const dateInput = createInput("Date:", "date", "date");
    const timeInput = createInput("Time:", "time", "time");

    const dietaryLabel = document.createElement("label");
    dietaryLabel.textContent = "Dietary Requirements:";
    dietaryLabel.htmlFor = "dietary";
    const dietaryInput = document.createElement("textarea");
    dietaryInput.id = "dietary";
    dietaryInput.name = "dietary";
    dietaryInput.rows = 4;
    form.appendChild(dietaryLabel);
    form.appendChild(dietaryInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    // 🔹 Modal container (hidden by default)
    const modal = document.createElement("div");
    modal.id = "confirm-modal";
    modal.style.display = "none";
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Confirm Your Booking</h2>
            <p id="summary-text"></p>
            <button id="confirm-yes">Yes, Confirm</button>
            <button id="confirm-no">No, Go Back</button>
        </div>
    `;

    formContainer.appendChild(form);
    formContainer.appendChild(modal);

    // 🔹 Handle submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = phoneInput.value.trim();

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid Australian phone number (10 digits, starting with 0).");
        phoneInput.focus();
        return;
    }

    document.getElementById("summary-text").innerHTML = `
        Name: ${nameInput.value}<br>
        Phone: ${phone}<br>
        Date: ${dateInput.value}<br>
        Time: ${timeInput.value}<br>
        Dietary: ${dietaryInput.value || "None"}
    `;

    modal.style.display = "flex";
});

    // 🔹 Yes confirmed -> send (you can replace alert with real send logic)
    modal.addEventListener("click", (e) => {
        if (e.target.id === "confirm-yes") {
            alert("Booking request sent!");
            modal.style.display = "none";
            form.reset();
        } 
        if (e.target.id === "confirm-no") {
            modal.style.display = "none";
        }
    });

    return formContainer;
}

function loadBooking() {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createBookingForm());
    return main;
}

export { loadBooking };