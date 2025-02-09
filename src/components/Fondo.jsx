import React, { useEffect, useRef } from 'react';

const BubbleSoundComponent = () => {
  const audioCtxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
   
    const handleClick = (e) => {
      const { pageX, pageY } = e;
      if (containerRef.current) {
        const bubble = createBubble(pageX, pageY);
        animateBubble(bubble);
      

        setTimeout(() => {
          bubble.remove();
        }, 3200);
      }
    };

    const bubbleUp = () => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      handleClick({ pageX: randomX, pageY: randomY });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleClick);
    }
    const interval = setInterval(bubbleUp, 200);

    return () => {
      if (container) {
        container.removeEventListener('click', handleClick);
      }
      clearInterval(interval);
    };
  },[]);

  

  const createBubble = (x, y) => {
    if (!containerRef.current) return;

    const bubble = document.createElement('div');
    const bubbleDummy = document.createElement('div');
    const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const heartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    heart.setAttribute('viewBox', '0 0 600 500');
    heartPath.setAttribute('d', 'M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150');

    bubble.className = 'bubble';
    bubbleDummy.className = 'bubble-dummy';
    heart.setAttribute('class', 'heart');

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.position = 'absolute';
    bubble.style.pointerEvents = 'none';

    heart.appendChild(heartPath);
    bubble.appendChild(bubbleDummy);
    bubble.appendChild(heart);
    containerRef.current.appendChild(bubble);

    return bubble;
  };

  const animateBubble = (bubble) => {
    const bubbleDummy = bubble.querySelector('.bubble-dummy');
    const heart = bubble.querySelector('.heart');

    if (bubbleDummy && heart) {
      bubbleDummy.animate(
        [
          { opacity: 0, transform: 'scale(0)' },
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(1.1)' },
        ],
        { duration: 1200, easing: 'ease-out', fill: 'forwards' }
      );

      heart.animate(
        [
          { opacity: 0, transform: 'scale(0)' },
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(1.1)' },
        ],
        { duration: 2000, easing: 'ease-out', fill: 'forwards' }
      );
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'relative',
      }}
    />
  );
};

export default BubbleSoundComponent;
