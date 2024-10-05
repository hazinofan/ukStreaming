import React, { useEffect, useState } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let observer;
    const element = document.getElementById('stats-section');
    const speed = 200;

    const countUp = () => {
      const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
          setCount(prevCount => Math.ceil(prevCount + increment));
        } else {
          setCount(target);
        }
      };

      updateCount();
    };

    if (element) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp();
            observer.disconnect(); // Stop observing after counting up
          }
        });
      }, { threshold: 0.5 });

      observer.observe(element);
    }

    return () => observer && observer.disconnect();
  }, [count, target]);

  return <span>{count.toLocaleString()}</span>;
};

export default Counter;
