document.addEventListener("DOMContentLoaded", (event) => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  // This function works for when the mouse is moved
  //   function mouseFollower() {
  window.addEventListener("mousemove", (e) => {
    let mouseFollower = document.querySelector("#mouseFollower");
    mouseFollower.style.transform = `translate(${e.clientX - 5}px, ${
      e.clientY - 5
    }px)`;
  });
  //   }
  //   mouseFollower();
  // This function works for when the mouse is moved

  tl = gsap.timeline({ defaults: { duration: 0.5, ease: "expo.InOut" } });

  tl.to(".logo", {y: 0});

  tl.to(".menu-toggler", {y: -10}, "-=100%");

  tl.to(".showTextOnloadFromBottom", {y: 0, stagger: 0.3});

  tl.to(".showTextOnloadFromTop", {y: 0, stagger: 0.3});

  tl.to(".opacityVisibleOnload", {opacity: 1}, "-=100%");
});
