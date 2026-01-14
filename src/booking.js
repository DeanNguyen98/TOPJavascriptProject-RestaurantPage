// booking.js
function createBookingForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "main-booking";

    const heading = document.createElement("h1");
    heading.textContent = "Book a Table";
    formContainer.appendChild(heading);

    const form = document.createElement("form");

    // Name
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.htmlFor = "name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;

    // Phone Number
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone Number:";
    phoneLabel.htmlFor = "phone";
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "phone";
    phoneInput.name = "phone";
    phoneInput.required = true;

    // Date
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date:";
    dateLabel.htmlFor = "date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    dateInput.required = true;

    // Time
    const timeLabel = document.createElement("label");
    timeLabel.textContent = "Time:";
    timeLabel.htmlFor = "time";
    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.id = "time";
    timeInput.name = "time";
    timeInput.required = true;

    // Dietary requirements
    const dietaryLabel = document.createElement("label");
    dietaryLabel.textContent = "Dietary Requirements:";
    dietaryLabel.htmlFor = "dietary";
    const dietaryInput = document.createElement("textarea");
    dietaryInput.id = "dietary";
    dietaryInput.name = "dietary";
    dietaryInput.rows = 4;

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    // Append inputs to form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    form.appendChild(phoneLabel);
    form.appendChild(phoneInput);

    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    form.appendChild(timeLabel);
    form.appendChild(timeInput);

    form.appendChild(dietaryLabel);
    form.appendChild(dietaryInput);

    form.appendChild(submitButton);

    formContainer.appendChild(form);

    return formContainer;
}

function loadBooking() {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createBookingForm());
    return main;
}

export { loadBooking };