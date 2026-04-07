import { useEffect, useRef, useState } from 'react';

function createLeaf(x, y) {
  const direction = Math.random() > 0.5 ? 1 : -1;
  const horizontal = (28 + Math.random() * 54) * direction;
  const vertical = 70 + Math.random() * 70;
  const rotation = direction * 18 + Math.random() * 70;
  const scale = 0.8 + Math.random() * 0.45;
  const duration = 1000 + Math.floor(Math.random() * 500);

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    x,
    y,
    horizontal,
    vertical,
    rotation,
    scale,
    duration,
    entered: false,
    symbol: Math.random() > 0.5 ? '🍃' : '🌿',
  };
}

function ClickEffect() {
  const [leaves, setLeaves] = useState([]);
  const timeoutsRef = useRef([]);
  const rafsRef = useRef([]);

  useEffect(() => {
    const handleClick = (event) => {
      const count = 2 + Math.floor(Math.random() * 2);
      const newLeaves = Array.from({ length: count }, () => createLeaf(event.clientX, event.clientY));
      const ids = newLeaves.map((leaf) => leaf.id);

      setLeaves((currentLeaves) => [...currentLeaves, ...newLeaves]);

      const frameId = window.requestAnimationFrame(() => {
        setLeaves((currentLeaves) =>
          currentLeaves.map((leaf) =>
            ids.includes(leaf.id) ? { ...leaf, entered: true } : leaf,
          ),
        );
      });

      rafsRef.current.push(frameId);

      newLeaves.forEach((leaf) => {
        const timeoutId = window.setTimeout(() => {
          setLeaves((currentLeaves) => currentLeaves.filter((item) => item.id !== leaf.id));
        }, leaf.duration + 120);

        timeoutsRef.current.push(timeoutId);
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      rafsRef.current.forEach((frameId) => window.cancelAnimationFrame(frameId));
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          aria-hidden="true"
          className="absolute select-none text-xl"
          style={{
            left: leaf.x,
            top: leaf.y,
            opacity: leaf.entered ? 0 : 1,
            transform: leaf.entered
              ? `translate(calc(-50% + ${leaf.horizontal}px), calc(-50% + ${leaf.vertical}px)) rotate(${leaf.rotation}deg) scale(${leaf.scale})`
              : 'translate(-50%, -50%) rotate(0deg) scale(1)',
            transition: `transform ${leaf.duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${leaf.duration}ms ease-out`,
            filter: 'drop-shadow(0 6px 12px rgba(16, 185, 129, 0.18))',
          }}
        >
          {leaf.symbol}
        </span>
      ))}
    </div>
  );
}

export default ClickEffect;
