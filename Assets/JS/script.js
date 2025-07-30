const navBar = document.querySelector('.nav-bar');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function () {
    if (this.scrollY > 30) {
        navBar.classList.add('slidedown');
        logo.style.color = '#f6d365';
    } else {
        navBar.classList.remove('slidedown');
        logo.style.color = '#fff';
    }
})


const navEl = document.querySelector('nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open")
});

navEl.addEventListener('click', () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open")
});


// const btnMenu = document.querySelector(".btn-menu").addEventListener("click", function() {
//     this.classList.toggle("active");

//     const collapseElement = document.querySelector(".collapse");

//     if (collapseElement.style.display === "none" || !collapseElement.style.display) {
//         collapseElement.style.display = "block";
//         collapseElement.style.height = "0";
//         const height = collapseElement.scrollHeight + "px";
//         collapseElement.style.transition = "height 0.3s ease";
//         collapseElement.style.height = height;

//         collapseElement.addEventListener("transitionend", function() {
//             collapseElement.style.height = "";
//             collapseElement.style.transition = "";
//         }, { once: true });
//     } else {
//         const height = collapseElement.scrollHeight + "px";
//         collapseElement.style.height = height;
//         requestAnimationFrame(() => {
//             collapseElement.style.transition = "height 0.3s ease";
//             collapseElement.style.height = "0";
//         });

//         collapseElement.addEventListener("transitionend", function() {
//             collapseElement.style.display = "none";
//             collapseElement.style.height = "";
//             collapseElement.style.transition = "";
//         }, { once: true });
//     }
// });




// const collapse = document.querySelector('.collapse');
// const btnMenu = document.querySelector('.btn-menu');

// btnMenu.addEventListener("click", () => {
//     collapse.classList.toggle('.collapse');
//     btnMenu.classList.toggle('.active');
// })

/* ======================
Number countNum Secction
========================= */
const container = document.querySelector(".container");
const counters = document.querySelector("#counters");
const countNum = document.querySelectorAll(".count-num");

let activated = false;

// Add scroll event to the page
window.addEventListener("scroll", () => {
    if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
        // Select all countNums
        countNum.forEach(countNum => {
            countNum.innerText = 0;

            let count = 0;

            function updateCount() {

                const target = parseInt(countNum.dataset.count);

                if (count < target) {
                    count++;
                    countNum.innerText = count;
                    settimeout(updateCount, 10);/* count speed */
                } else {
                    countNum.innerText = target;
                }
            }

            updateCount();
            // Set activated to true
            activated = true;
        });
    } else if (pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true) {
        // select All countNums
        counters.forEach(countNum => {
            countNum.innerText = 0;
        });
        activated = false;
    }
});

