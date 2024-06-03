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
  let contentText = document.querySelectorAll(".content");
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

    if (e.target.closest(".content")) {
      clearTimeout(timeout);
      circle.style.transform = `translate(${e.clientX - 5}px, ${
        e.clientY - 5
      }px) scale(${x * 4}, ${y * 4})`;
    }
  }
  window.addEventListener("mousemove", mouseFollower);
  // MOUSE FOLLOWER CIRCLE

  // MOUSE LEAVING WINDOW
  window.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget && e.currentTarget === window) {
      clearTimeout(timeout);
      circle.style.transform = `translate(${e.clientX - 5}px, ${
        e.clientY - 5
      }px) scale(0,0)`;
    }
  });
  // MOUSE LEAVING WINDOW

  // IMAGE MOVEMENT
  let moveImage = document.querySelectorAll(".level-2-child");
  moveImage.forEach((elem) => {
    elem.addEventListener("mousemove", imageMover);
    elem.addEventListener("mouseleave", imageHider);
  });

  // Mouse Leave from current element
  function imageHider(e) {
    let img = e.currentTarget.querySelector("img");
    gsap.to(img, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.InOut",
    });
  }
  // Mouse Leave from current element

  // Mouse move on current target element
  let lastClientX = 0,
    rotate = 0;
  function imageMover(e) {
    let img = e.currentTarget.querySelector("img");

    let diffTop = e.currentTarget.getBoundingClientRect().y;
    let dtop = e.clientY - diffTop - img.offsetHeight / 2;
    let diffLeft = e.currentTarget.getBoundingClientRect().x;
    let dleft = e.clientX - diffLeft - img.offsetWidth / 2;

    rotate = e.clientX - lastClientX;
    lastClientX = e.clientX;

    gsap.to(img, {
      autoAlpha: 1,
      duration: 0.5,
      y: dtop,
      x: dleft,
      ease: "power3.InOut",
      rotate: gsap.utils.clamp(-20, 20, rotate),
    });
  }
  // Mouse move on current target element
  // IMAGE MOVEMENT

  function formatTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;
    const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;
    const formattedTime = `${hours}:${minutesFormatted}:${secondsFormatted} ${amPm} IST`;
    document.getElementById("timeDisplay").innerText = formattedTime;
  }
  setInterval(formatTime, 1000);

  let menuToggler = document.querySelector(".menu-toggler");
  let tween1 = gsap.to(menuToggler, {y: 10, paused: true});
  let tween2 = gsap.to('.menu-items a', {y: 20,stagger: 0.1, paused: true});
  menuToggler.onclick = () => {
    tween1.play();
    tween2.play();
  };
  scroll.on('scroll', (instance) => {
    tween1.play().reverse();
    tween2.play().reverse();
});

let menuTogglerMobile = document.querySelector(".menu-toggler-mobile");
let nav = document.querySelector(".nav");
menuTogglerMobile.onclick = () => {
  nav.classList.toggle('active');
  menuTogglerMobile.classList.toggle('active');
}



});
