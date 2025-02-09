(function () {
  var ctx = new AudioContext();

  // Crear un contenedor para las burbujas
  const bubbleContainer = document.createElement('div');
  bubbleContainer.id = 'bubble-container';
  bubbleContainer.style.position = 'fixed';
  bubbleContainer.style.top = '0';
  bubbleContainer.style.left = '0';
  bubbleContainer.style.width = '100%';
  bubbleContainer.style.height = '100%';
  bubbleContainer.style.pointerEvents = 'none';  // Evitar que interfiera con clics
  document.body.appendChild(bubbleContainer);

  function getRandomColor() {
    const colors = ["#456", "#890", "#634", "#299", "tomato", "#fb3"];
    const idx = Math.floor(colors.length * Math.random());
    return colors[idx];
  }

  function animateIt(el, dur, delay) {
    return el.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0)" },
        { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(1.1)" }
      ],
      {
        duration: dur,
        easing: "ease-out",
        fill: "forwards",
        delay: delay || 0
      }
    );
  }

  function createBubble() {
    const ns = "http://www.w3.org/2000/svg";
    const bubble = document.createElement("div");
    const bubbleDummy = document.createElement("div");
    const heart = document.createElementNS(ns, "svg");
    const heartPath = document.createElementNS(ns, "path");

    heart.setAttribute("viewBox", "0 0 600 500");
    heartPath.setAttribute("d", "M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150");

    bubble.classList.add("bubble");
    bubble.style.color = getRandomColor();
    bubble.style.position = 'absolute';
    bubble.style.pointerEvents = 'none';  // No interfiere con clics
    bubbleDummy.classList.add("bubble-dummy");
    heart.classList.add("heart");

    heart.appendChild(heartPath);
    bubble.appendChild(bubbleDummy);
    bubble.appendChild(heart);

    // Agregar la burbuja al contenedor exclusivo
    bubbleContainer.appendChild(bubble);

    return {
      setPosition: function (x, y) {
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
      },
      _animate: function () {
        const animateBubble = animateIt(bubbleDummy, 1200);
        const animateHeart = animateIt(heart, 2000);
        return { bubbleDur: 1200, heartDur: 2000 };
      },
      remove: function () {
        bubble.remove();
      }
    };
  }

  function handleDown(e) {
    const _x = e.pageX;
    const _y = e.pageY;

    const bubble = createBubble();
    bubble.setPosition(_x, _y);
    const animation = bubble._animate();
    const totalDelay = animation.bubbleDur + animation.heartDur;

    if (e.type) {
      createSound(20, 5000, 1, "sawtooth", 1);
    }

    setTimeout(() => {
      bubble.remove();
    }, totalDelay);
  }

  let w = document.body.clientWidth;
  let h = document.body.clientHeight;

  function bubbleUp() {
    const de = {
      pageX: Math.random() * w,
      pageY: Math.random() * h
    };

    handleDown(de);
    setTimeout(bubbleUp, 200);
  }

  bubbleUp();

  window.addEventListener("resize", function () {
    w = document.body.clientWidth;
    h = document.body.clientHeight;
  });
})();
