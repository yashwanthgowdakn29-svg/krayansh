import {
  FaArrowRight, FaBars, FaBrain, FaBriefcase, FaChartLine, FaCheck, FaChevronDown,
  FaCloud, FaCode, FaCogs, FaDesktop, FaEnvelope, FaGlobe, FaGraduationCap,
  FaHandshake, FaHeartbeat, FaIndustry, FaInstagram, FaLayerGroup, FaLightbulb,
  FaLinkedinIn, FaLock, FaMapMarkerAlt, FaMicrochip, FaMobileAlt, FaNetworkWired,
  FaPenNib, FaPhoneAlt, FaRobot, FaRocket, FaServer, FaShieldAlt, FaShoppingCart,
  FaStar, FaTimes, FaTruck, FaUniversity, FaUsers, FaWrench,
} from 'react-icons/fa';

/* Data files carry icon *names* rather than component references so they stay
   plain serialisable data and can cross the server/client boundary freely. */
const icons = {
  arrow: FaArrowRight, brain: FaBrain, briefcase: FaBriefcase, cap: FaGraduationCap,
  cart: FaShoppingCart, chart: FaChartLine, check: FaCheck, chevron: FaChevronDown,
  chip: FaMicrochip, close: FaTimes, cloud: FaCloud, code: FaCode, cogs: FaCogs,
  bank: FaUniversity, bulb: FaLightbulb, desktop: FaDesktop, factory: FaIndustry,
  globe: FaGlobe, handshake: FaHandshake, heart: FaHeartbeat, instagram: FaInstagram,
  layers: FaLayerGroup, microchip: FaMicrochip, linkedin: FaLinkedinIn, lock: FaLock, mail: FaEnvelope,
  menu: FaBars, mobile: FaMobileAlt, network: FaNetworkWired, pen: FaPenNib,
  phone: FaPhoneAlt, pin: FaMapMarkerAlt, robot: FaRobot, rocket: FaRocket,
  server: FaServer, shield: FaShieldAlt, star: FaStar, truck: FaTruck,
  users: FaUsers, wrench: FaWrench,
};

export default function Icon({ name, ...rest }) {
  const Glyph = icons[name] || FaLayerGroup;
  return <Glyph aria-hidden="true" focusable="false" {...rest} />;
}
