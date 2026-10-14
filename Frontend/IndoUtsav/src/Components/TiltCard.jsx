
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const Example = () => {
  return (
    <div className="grid min-h-screen w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-4 text-slate-900">
      <TiltCard
        imgsrc="/images/festival.jpg"
        festivename="Diwali"
      />
    </div>
  );
};

const ROTATION_RANGE = 8.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const TiltCard = ({
  imgsrc,
  festivename,
  smallBg = false,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  const ySpring = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (!width || !height) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX =
      ((mouseY / height) * ROTATION_RANGE -
        HALF_ROTATION_RANGE) *
      -1;

    const rY =
      (mouseX / width) * ROTATION_RANGE -
      HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        height: smallBg ? 140 : 384,
        width: smallBg ? 140 : 288,
      }}
      className={`relative overflow-hidden rounded-xl shadow-md ${
        smallBg
          ? "bg-slate-200"
          : "bg-gradient-to-br from-slate-700 to-slate-900"
      }`}
    >
      {/* Full-cover festival image */}
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 overflow-hidden rounded-xl shadow"
      >
        <img
          src={imgsrc}
          alt={festivename}
          className="absolute inset-0 h-full w-full rounded-xl object-cover"
          loading="lazy"
        />

        {/* Gradient overlay and festival name */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
          <span className="block text-center text-lg font-bold text-white">
            {festivename}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
