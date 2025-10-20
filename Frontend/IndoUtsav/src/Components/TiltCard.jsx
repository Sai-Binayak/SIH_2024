import { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const Example = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-4 text-slate-900">
      <TiltCard />
    </div>
  );
};

TiltCard.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  festivename: PropTypes.string.isRequired,
  smallBg: PropTypes.bool,
};

const ROTATION_RANGE = 8.5;
const HALF_ROTATION_RANGE = 8.5 / 2;

export const TiltCard = ({imgsrc , festivename, smallBg = false}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

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
        transformStyle: "preserve-3d",
        transform,
        height: smallBg ? 140 : 384, // h-36 or h-96
        width: smallBg ? 140 : 288,  // w-36 or w-72
      }}
      className={`relative rounded-xl ${smallBg ? 'bg-slate-200' : 'bg-gradient-to-br from-slate-700 to-slate-900'} shadow-md`}
    >
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid place-content-center rounded-xl bg-white/80 shadow"
      >
        <p
          style={{
            transform: "translateZ(10px)",
          }}
          className="text-center text-base font-bold"
        >
          <img src={imgsrc} alt={festivename} className="rounded-lg w-20 h-20 object-cover mx-auto mb-1"/>
          <span className="block text-slate-800 mt-1">{festivename}</span>
        </p>
      </div>
    </motion.div>
  );
};