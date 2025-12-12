document.addEventListener('DOMContentLoaded', () => {
    
    // --- Typing Effect for Hero Section ---
    const textElement = document.querySelector('.typing-text');
    const texts = ["Gen AI Intern", "Prompt Engineer", "Software Developer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait 2 seconds before deleting/next
        } else {
            setTimeout(type, 100); // Typing speed
        }
    })();

    // --- Smooth Scroll & Active Link Highlighting ---
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-links li a");

    window.onscroll = () => {
        var current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    };
});

