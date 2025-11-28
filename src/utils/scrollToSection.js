export const scrollToSection = (id) => {
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 300); // Wait for Home page to load
};
