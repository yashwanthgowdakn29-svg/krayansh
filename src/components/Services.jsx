import { useState } from 'react';
import { 
  FaGlobe, FaMobileAlt, FaCloud, FaRobot, FaLock, FaBriefcase,
  FaDesktop, FaNetworkWired, FaCogs, FaTools, FaServer, FaWrench,
  FaLaptopCode, FaMicrochip, FaArrowRight
} from 'react-icons/fa';
import expertiseImg from '../assets/expertise.png';
import roboticsImg  from '../assets/robotics.jpg';
import './Services.css';

const softwareServices = [
  { icon: <FaGlobe />, title: 'Web Development', description: 'Custom web applications built with modern technologies for optimal performance' },
  { icon: <FaMobileAlt />, title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android' },
  { icon: <FaCloud />, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services for your business' },
  { icon: <FaRobot />, title: 'AI & ML', description: 'Intelligent solutions powered by artificial intelligence and ML algorithms' },
  { icon: <FaLock />, title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets' },
  { icon: <FaBriefcase />, title: 'Enterprise Software', description: 'Tailored enterprise solutions to streamline your business operations' },
];

const hardwareServices = [
  { icon: <FaDesktop />, title: 'Hardware Design', description: 'Custom hardware design and prototyping for your unique requirements' },
  { icon: <FaNetworkWired />, title: 'IoT Solutions', description: 'Internet of Things devices and connectivity solutions' },
  { icon: <FaMicrochip />, title: 'Embedded Systems', description: 'Specialized embedded systems development for various applications' },
  { icon: <FaCogs />, title: 'Hardware Integration', description: 'Seamless integration of hardware components with software systems' },
  { icon: <FaServer />, title: 'Network Infrastructure', description: 'Design and implementation of robust network infrastructure' },
  { icon: <FaWrench />, title: 'Maintenance & Support', description: '24/7 hardware maintenance and technical support services' },
];

const Services = () => {
  const [active, setActive] = useState('software');
  const list = active === 'software' ? softwareServices : hardwareServices;

  return (
    <section className="services" id="services">
      <div className="services-inner">
        {/* Header */}
        <div className="srv-header">
          <div className="srv-header-left">
            <span className="srv-section-num" aria-hidden="true">02</span>
            <div>
              <p className="srv-eyebrow">What We Build</p>
              <h2 className="srv-title">Our <span className="srv-accent">Services</span></h2>
            </div>
          </div>
          <p className="srv-desc">
            Comprehensive technology solutions tailored to your business needs —
            from code to circuit.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="srv-tabs">
          <button
            className={`srv-tab ${active === 'software' ? 'active' : ''}`}
            onClick={() => setActive('software')}
          >
            <FaLaptopCode /> Software Projects
          </button>
          <button
            className={`srv-tab ${active === 'hardware' ? 'active' : ''}`}
            onClick={() => setActive('hardware')}
          >
            <FaMicrochip /> Hardware Projects
          </button>
        </div>

        {/* Tab visual banner */}
        <div className="srv-visual">
          <img
            src={active === 'software' ? expertiseImg : roboticsImg}
            alt={active === 'software' ? 'Software Expertise' : 'Hardware & Robotics'}
            className="srv-visual-img"
            key={active}
          />
          <div className="srv-visual-overlay">
            <span className="srv-visual-label">
              {active === 'software' ? '⟨/⟩ Software Engineering' : '⚙ Hardware & Robotics'}
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="srv-grid" key={active}>
          {list.map((s, i) => (
            <div className="srv-card" key={i} style={{ '--delay': `${i * 0.06}s` }}>
              <div className="srv-card-top">
                <div className="srv-card-icon">{s.icon}</div>
                <FaArrowRight className="srv-arrow" />
              </div>
              <h3 className="srv-card-title">{s.title}</h3>
              <p className="srv-card-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
