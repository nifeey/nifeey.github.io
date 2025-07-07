
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    //   MENU SHOW
    /* Validate if constant exists */
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    } 
        // MENU HIDDEN
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_u534ixk', 'template_yzrb1h8', '#contact-form', '0kTnba_T0EJEFNBPw')
        .then(() =>{      
            // Show sent message
            contactMessage.textContent = 'Message sent sccessfully ✅'

            // Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset();

        }, () =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
    }

    contactForm.addEventListener('submit', sendEmail); 
    
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('#home, #about, #services, #projects, #contact');

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true
})

sr.reveal(`.home_data, .home_social, .contact_container, .footer_container`)
sr.reveal(`.home_image`, {origin: 'bottom'})
sr.reveal(`.about_data, .skills_data`, {origin: 'left'})
sr.reveal(`.about_image, .skills_content`, {origin: 'right'})
sr.reveal(`.services_card, .projects_card`, {interval: 100})
sr.reveal(`.experience_item`, { interval: 100 })
