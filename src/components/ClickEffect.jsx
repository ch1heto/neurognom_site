import { useEffect, useRef, useState } from 'react';

const ANIMATION_DURATION = 1200;

function createLeaf(x, y, index, total) {
  const baseAngle = -90 + (180 / Math.max(total - 1, 1)) * index;
  const angle = (baseAngle + (Math.random() * 20 - 10)) * (Math.PI / 180);
  const distance = 15 + Math.random() * 10;
  const rotation = Math.random() * 36 - 18;
  const scale = 0.92 + Math.random() * 0.18;

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    x,
    y,
    driftX: Math.cos(angle) * distance,
    driftY: Math.sin(angle) * distance,
    rotation,
    scale,
    entered: false,
  };
}

function LeafMark({ leaf }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      style={{
        color: 'rgba(16, 185, 129, 0.34)',
        opacity: leaf.entered ? 0 : 1,
        transform: leaf.entered
          ? `translate(calc(-50% + ${leaf.driftX}px), calc(-50% + ${leaf.driftY}px)) rotate(${leaf.rotation}deg) scale(${leaf.scale})`
          : 'translate(-50%, -50%) rotate(0deg) scale(1)',
        transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${ANIMATION_DURATION}ms ease-out`,
      }}
    >
      <path
        d="M18.5 5.5C14.7 5.5 10.7 7.4 8.3 10.7C6.6 13.1 5.8 16 5.8 18.5C8.3 18.5 11.2 17.7 13.6 16C16.9 13.6 18.8 9.6 18.8 5.8V5.5H18.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 18C10.4 14.7 13.4 11.8 17.3 8.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClickEffect() {
  const [leaves, setLeaves] = useState([]);
  const timeoutsRef = useRef([]);
  const rafsRef = useRef([]);

  useEffect(() => {
    const handleClick = (event) => {
      const count = 3 + Math.floor(Math.random() * 2);
      const freshLeaves = Array.from({ length: count }, (_, index) =>
        createLeaf(event.clientX, event.clientY, index, count),
      );
      const ids = freshLeaves.map((leaf) => leaf.id);

      setLeaves((currentLeaves) => [...currentLeaves, ...freshLeaves]);

      const frameId = window.requestAnimationFrame(() => {
        setLeaves((currentLeaves) =>
          currentLeaves.map((leaf) =>
            ids.includes(leaf.id) ? { ...leaf, entered: true } : leaf,
          ),
        );
      });
      rafsRef.current.push(frameId);

      const timeoutId = window.setTimeout(() => {
        setLeaves((currentLeaves) =>
          currentLeaves.filter((leaf) => !ids.includes(leaf.id)),
        );
      }, ANIMATION_DURATION);
      timeoutsRef.current.push(timeoutId);
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
        <div
          key={leaf.id}
          className="absolute left-0 top-0"
          style={{ left: leaf.x, top: leaf.y }}
        >
          <LeafMark leaf={leaf} />
        </div>
      ))}
    </div>
  );
}

export default ClickEffect;
