document.addEventListener("DOMContentLoaded", (event) => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  function mouseFollower(x,y) {
    let mouseFollower = document.querySelector("#mouseFollower");
    mouseFollower.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
  }

  // This function works for when the mouse is moved
  window.addEventListener("mousemove", (e) => {
    mouseFollower(e.clientX,e.clientY);
  });
  // This function works for when the mouse is moved
  
  // This function works for when the TOUCH is moved
  window.addEventListener("touchmove", (e) => {
      let touch = e.touches[0];
      mouseFollower(touch.clientX, touch.clientY);
    }
  );
  // This function works for when the TOUCH is moved

  tl = gsap.timeline({ defaults: { duration: 0.5, ease: "expo.InOut" } });

  tl.to(".logo", { y: 0 });

  tl.to(".menu-toggler", { y: -10 }, "-=100%");

  tl.to(".showTextOnloadFromBottom", { y: 0, stagger: 0.3 });

  tl.to(".showTextOnloadFromTop", { y: 0, stagger: 0.3 });

  tl.to(".opacityVisibleOnload", { opacity: 1 }, "-=100%");
});
