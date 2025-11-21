gsap.registerPlugin(ScrollTrigger);

const path = document.querySelector("#trilha-path");
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

gsap.to("#trilha-path", {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".card-container",  
    start: "top top",
    end: "bottom bottom",
    scrub: 0.9
  }
});

gsap.to(".trilha-svg", {
  x: 120, 
  ease: "none",
  scrollTrigger: {
    trigger: ".card-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 2
  }
});
