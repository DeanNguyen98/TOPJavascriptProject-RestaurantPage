function createMenu() {
    const mainmenu = document.createElement('div');
    mainmenu.id = "main-menu";

    // Create sections
    const entreeSection = createSection("Entrees");
    const mainSection = createSection("Main");
    const stirFriedSection = createSection("Stir-Fried");
    const soupSection = createSection("Soup");

    // Menu items
    const items = [
        { name: "chicken pho", description: "Signature Chicken Pho: $16" },
        { name: "fried rice", description: "Fried Rice: $17" },
        { name: "vermicelli", description: "Stir Fry Vermicelli: $16" },
        { name: "beef", description: "Shaking Beef: $20" },
        { name: "summer", description: "Summer Rolls: $12" },
        { name: "rolls", description: "Spring Rolls: $12" },
        { name: "beefnoodle", description: "Stir-fried rice noodle: $18" },
        { name: "beefpho", description: "Beef Pho: $18" },
        { name: "fried wonton", description: "Fried Wonton: $12" },
        { name: "laksa", description: "Laksa: $18" },
        { name: "mongolian beef", description: "Mongolian Beef: $20" },
        { name: "noodlestir", description: "Stir-fried noodles: $16" },
        { name: "oyster chicken", description: "Oyster Chicken: $18" },
        { name: "vermicellistir", description: "Stir-fried vermicelli: $16" }
    ];

    // Assign items to sections based on name
    items.forEach(item => {
        const menuItem = createMenuItems(item.name, item.description);
        switch (item.name.toLowerCase()) {
            // Soup
            case "chicken pho":
            case "beefpho":
            case "beef":
            case "laksa":
                soupSection.appendChild(menuItem);
                break;

            // Stir-Fried
            case "fried rice":
            case "beefnoodle":
            case "noodlestir":
            case "vermicellistir":
                stirFriedSection.appendChild(menuItem);
                break;

            // Main
            case "vermicelli":
            case "mongolian beef":
            case "oyster chicken":
                mainSection.appendChild(menuItem);
                break;

            // Entree
            case "rolls":
            case "summer":
            case "fried wonton":
                entreeSection.appendChild(menuItem);
                break;
        }
    });

    // Append sections to main menu
    mainmenu.appendChild(entreeSection);
    mainmenu.appendChild(mainSection);
    mainmenu.appendChild(stirFriedSection);
    mainmenu.appendChild(soupSection);

    return mainmenu;
}

// Create a section wrapper with a heading
function createSection(title) {
    const section = document.createElement("div");
    section.classList.add("menu-section");
    const heading = document.createElement("h2");
    heading.textContent = title;
    section.appendChild(heading);
    return section;
}

function createMenuItems(name, description) {
    const menuItems = document.createElement('div');
    menuItems.classList.add("menu-item");

    const itemImage = document.createElement("img");
    itemImage.src = `images/${name}.jpg`;
    itemImage.alt = name;

    const itemDescription = document.createElement("div");
    itemDescription.textContent = description;

    menuItems.appendChild(itemImage);
    menuItems.appendChild(itemDescription);
    return menuItems;
}

function loadMenu() {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createMenu());
    return main;
}

export { loadMenu };
