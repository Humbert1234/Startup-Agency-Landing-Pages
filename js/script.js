
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceItem = button.closest('.service-item');
            const serviceContent = serviceItem.querySelector('.service-content');
            const icon = button.querySelector('i');
            
            if (serviceContent) {
                const isVisible = serviceContent.style.display === 'block';
                
                serviceContent.style.display = isVisible ? 'none' : 'block';
                icon.classList.toggle('fa-plus', isVisible);
                icon.classList.toggle('fa-minus', !isVisible);
            }
        });
    });
});

// MENU BAR
const menu = document.querySelector("#nav-links");
const menuBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");


menuBtn.addEventListener('click', () =>{
    menu.style.display ="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display ="none";
})


//close nav menu

const closeNav = () => {
    menu.style.display ="none";
    closeBtn.style.display = "none";
    menuBtn.style.display ="inline-block";
}
closeBtn.addEventListener('click',closeNav);



// script.js
let currentSlide = 0;
const teamMembers = document.querySelectorAll('.team-member');
const totalSlides = teamMembers.length;

function updateSlides() {
    const membersPerPage = window.innerWidth <= 768 ? 1 : 3;

    teamMembers.forEach((member, index) => {
        if (index >= currentSlide && index < currentSlide + membersPerPage) {
            member.style.display = 'block';
        } else {
            member.style.display = 'none';
        }
    });
}

function nextSlide() {
    const membersPerPage = window.innerWidth <= 768 ? 1 : 3;
    if (currentSlide + membersPerPage < totalSlides) {
        currentSlide += membersPerPage;
    } else {
        currentSlide = 0;
    }
    updateSlides();
}

function prevSlide() {
    const membersPerPage = window.innerWidth <= 768 ? 1 : 3;
    if (currentSlide - membersPerPage >= 0) {
        currentSlide -= membersPerPage;
    } else {
        currentSlide = totalSlides - membersPerPage;
    }
    updateSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlides();
});

window.addEventListener('resize', () => {
    currentSlide = 0;
    updateSlides();
});

