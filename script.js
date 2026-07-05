// =============================
// School Dashboard - script.js
// =============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("School Dashboard Loaded Successfully!");

    showWelcomeMessage();
    updateDateTime();
    setInterval(updateDateTime, 1000);

    animateCards();
    activateSidebar();
    enableDarkMode();
    enableSearch();
});

// ------------------------------
// Welcome Message
// ------------------------------
function showWelcomeMessage() {
    console.log("Welcome to School Dashboard");
}

// ------------------------------
// Live Date & Time
// ------------------------------
function updateDateTime() {
    const dateElement = document.getElementById("currentDate");

    if (dateElement) {
        const now = new Date();
        dateElement.innerHTML = now.toLocaleString();
    }
}

// ------------------------------
// Dashboard Card Animation
// ------------------------------
function animateCards() {

    const values = [
        { id: "students", target: 1200 },
        { id: "teachers", target: 75 },
        { id: "attendance", target: 95 },
        { id: "fees", target: 1250000 }
    ];

    values.forEach(item => {

        const element = document.getElementById(item.id);

        if (!element) return;

        let count = 0;

        const speed = Math.max(1, Math.ceil(item.target / 100));

        const interval = setInterval(() => {

            count += speed;

            if (count >= item.target) {
                count = item.target;
                clearInterval(interval);
            }

            if (item.id === "attendance") {
                element.textContent = count + "%";
            } else if (item.id === "fees") {
                element.textContent = "₹" + count.toLocaleString();
            } else {
                element.textContent = count;
            }

        }, 20);

    });
}

// ------------------------------
// Sidebar Active Menu
// ------------------------------
function activateSidebar() {

    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(li => li.classList.remove("active"));

            item.classList.add("active");

        });

    });

}

// ------------------------------
// Dark Mode
// ------------------------------
function enableDarkMode() {

    const button = document.getElementById("darkModeBtn");

    if (!button) return;

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

// ------------------------------
// Sidebar Search
// ------------------------------
function enableSearch() {

    const input = document.getElementById("searchMenu");

    if (!input) return;

    input.addEventListener("keyup", () => {

        const filter = input.value.toLowerCase();

        const items = document.querySelectorAll(".sidebar li");

        items.forEach(item => {

            const text = item.textContent.toLowerCase();

            item.style.display =
                text.includes(filter) ? "block" : "none";

        });

    });

}
