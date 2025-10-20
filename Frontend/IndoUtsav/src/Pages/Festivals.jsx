import "./FestivalStyle.css";
import "../scrollbar-hide.css";
import IndiaLogo from "../Images/logo.jpeg";
import DiwaliImg from "../Images/diwali.jpeg";
import HoliImg from "../Images/holi.jpeg";
import DurgaImg from "../Images/booriboot.jpeg";
import GaneshImg from "../Images/ganesh.jpg";
import PongalImg from "../Images/spring.jpeg";
import OnamImg from "../Images/monsoon.jpeg";
import BaisakhiImg from "../Images/summer.jpeg";
import EidImg from "../Images/winter.jpeg";
import ChristmasImg from "../Images/20131031143708_10_1.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../MotionVariants";
import WaterDropGrid from "../Components/WaterDropGrid";
import { TiltCard } from "../Components/TiltCard";

export const Festivals = () => {
  // Famous Indian festivals data
  const festivals = [
    {
      name: "Diwali",
      img: DiwaliImg,
      desc: "The festival of lights, celebrated with diyas, sweets, and fireworks across India.",
    },
    {
      name: "Holi",
      img: HoliImg,
      desc: "The festival of colors, marking the arrival of spring with vibrant powders and water.",
    },
    {
      name: "Durga Puja",
      img: DurgaImg,
      desc: "A grand celebration in West Bengal and beyond, honoring Goddess Durga.",
    },
    {
      name: "Ganesh Chaturthi",
      img: GaneshImg,
      desc: "The birth of Lord Ganesha, celebrated with clay idols and processions.",
    },
    {
      name: "Pongal",
      img: PongalImg,
      desc: "A harvest festival in Tamil Nadu, marked by cooking the traditional dish Pongal.",
    },
    {
      name: "Onam",
      img: OnamImg,
      desc: "Kerala's harvest festival, famous for its boat races, pookalam, and feasts.",
    },
    {
      name: "Baisakhi",
      img: BaisakhiImg,
      desc: "Punjab's harvest festival, celebrated with bhangra, fairs, and processions.",
    },
    {
      name: "Eid-ul-Fitr",
      img: EidImg,
      desc: "A major Muslim festival marking the end of Ramadan with prayers and feasts.",
    },
    {
      name: "Christmas",
      img: ChristmasImg,
      desc: "Celebrated by Christians across India with midnight mass, cakes, and decorations.",
    },
  ];

  return (
    <section className="slide1 relative">
      <WaterDropGrid className="absolute top-0 left-0 w-full h-full" fixed />
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="header"
        >
          <div className="logo">
            <img src={IndiaLogo} alt="Delight in Diversity Logo" />
          </div>
          <motion.div
            variants={fadeIn("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="top"
          >
            DELIGHT IN DIVERSITY
          </motion.div>
          <div className="year">2024</div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="title"
          >
            FESTIVITIES
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="subtitle mb-8"
          >
            Experience the Vibrant Tapestry of India&#39;s Festive Spirit
          </motion.div>

          {/* Festival Cards Grid */}
          <div
            className="mt-16 flex flex-row gap-6 overflow-x-auto pb-6 group snap-x snap-mandatory w-full box-border px-8 scrollbar-hide"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              overflowY: 'hidden',
              maxWidth: '1440px',
              margin: '0 auto',
            }}
          >
            {festivals.map((fest) => (
              <div
                key={fest.name}
                className="flex-shrink-0 snap-center box-border"
                style={{ width: 160 }}
              >
                <TiltCard imgsrc={fest.img} festivename={fest.name} smallBg />
                <div className="mt-2 text-center text-white text-xs max-w-[140px]">{fest.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festivals;