///////////////////////////////////////////////////////////
// Set current year
/* const yearEl = document.querySelector(".currentYear");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear; */

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
// const headerEl = document.querySelector("nav");
const home = document.getElementById("home");
const services = document.getElementById("services");
const page = document.getElementById("page");
const news = document.getElementById("news");
const contact = document.getElementById("contact");
let navButtons = [home, services, page, news, contact];

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// navButtons.forEach((navBtn) =>
//   navBtn.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//   })
// );

/* navButtons.forEach((navBtn) => closeNav(navBtn));

function closeNav(navButton) {
  onclick = (navButton) => headerEl.classList.remove("nav-open");
} */

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({
//         behavior: "smooth",
//       });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Sticky navigation

// const sectionHeroEl = document.querySelector(".hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

///////////////////////////////////////////////////////////
// scroll to top button

// let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// window.onscroll = function () {
//   if (this.scrollY >= 1000) {
//     scrollToTopBtn.classList.add("show");
//   } else {
//     scrollToTopBtn.classList.remove("show");
//   }
// };

// scrollToTopBtn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
