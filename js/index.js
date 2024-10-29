document.addEventListener('DOMContentLoaded', function () {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.add('navbar-shrink')
        } else {
            navbarCollapsible.classList.remove('navbar-shrink')
        }

    };
    navbarShrink()

    const sections = document.querySelectorAll('section')
    const navButtons = document.querySelectorAll('.btn')

    window.addEventListener('scroll', () => {
        let current = ''

        // Loop through each section to find which one is in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100 // Adjust for padding and navbar height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id')
            }
        })

        // Remove active class from all links and add to current section's link
        navButtons.forEach(button => {
            button.classList.remove('active')
            if (button.getAttribute('href') && button.getAttribute('href').includes(current)) {
                button.classList.add('active')
            }
        })
        navbarShrink()
    })
})