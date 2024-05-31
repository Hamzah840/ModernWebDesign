document.addEventListener("DOMContentLoaded", (event) => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });



  tl = gsap.timeline({ defaults: { duration: 0.5, ease: "expo.InOut" } });

  tl.to(".logo", { y: 0 });

  tl.to(".menu-toggler", { y: -10 }, "-=100%");

  tl.to(".showTextOnloadFromBottom", { y: 0, stagger: 0.3 });

  tl.to(".showTextOnloadFromTop", { y: 0, stagger: 0.3 });

  tl.to(".opacityVisibleOnload", { opacity: 1 }, "-=100%");



  // MOUSE FOLLOWER CIRCLE
  let circle = document.querySelector("#mouseFollower");
  let timeout,
    xprev = 0,
    yprev = 0;


  function mouseFollower(e) {
    clearTimeout(timeout);

    xscale = Math.abs(e.clientX - xprev);
    yscale = Math.abs(e.clientY - yprev);
    let x = gsap.utils.clamp(0.8, 1.2, xscale);
    let y = gsap.utils.clamp(0.8, 1.2, yscale);

    circle.style.transform = `translate(${e.clientX - 5}px, ${
      e.clientY - 5
    }px) scale(${x}, ${y})`;

    xprev = e.clientX;
    yprev = e.clientY;

    timeout = setTimeout(() => {
      circle.style.transform = `translate(${e.clientX - 5}px, ${
        e.clientY - 5
      }px) scale(1,1)`;
    }, 100);
  }
  window.addEventListener("mousemove", mouseFollower);
  // MOUSE FOLLOWER CIRCLE



  // MOUSE LEAVING WINDOW
  window.addEventListener("mouseout", (e)=>{
    if(!e.relatedTarget && e.currentTarget === window){
      clearTimeout(timeout);
      circle.style.transform = `translate(${e.clientX - 5}px, ${
        e.clientY - 5
      }px) scale(0,0)`;
    }
    });
  // MOUSE LEAVING WINDOW

  // IMAGE MOVEMENT
  // IMAGE MOVEMENT

  
});
