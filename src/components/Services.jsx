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
  { icon: <FaGlobe />, title: 'Web Application Development', description: 'Architecting and building scalable, high-performance web applications using modern frameworks.' },
  { icon: <FaMobileAlt />, title: 'Mobile Application Development', description: 'Crafting intuitive and engaging native and cross-platform mobile apps for iOS and Android.' },
  { icon: <FaCloud />, title: 'Cloud & DevOps', description: 'Cloud infrastructure design, serverless architecture, and CI/CD pipeline implementation.' },
  { icon: <FaRobot />, title: 'AI & Machine Learning', description: 'Developing intelligent systems with predictive analytics and data-driven insights.' },
  { icon: <FaLock />, title: 'Cybersecurity Services', description: 'Implementing robust security protocols and threat mitigation strategies to protect digital assets.' },
  { icon: <FaBriefcase />, title: 'Enterprise Solutions', description: 'Custom software solutions to optimize enterprise workflows and drive business growth.' },
];

const hardwareServices = [
  { icon: <FaDesktop />, title: 'PCB Design & Prototyping', description: 'Custom PCB design, layout, and rapid prototyping for electronic hardware solutions.' },
  { icon: <FaNetworkWired />, title: 'IoT & Edge Computing', description: 'End-to-end IoT solutions, from sensor integration to edge data processing.' },
  { icon: <FaMicrochip />, title: 'Embedded Systems', description: 'Firmware and software development for microcontrollers and embedded devices.' },
  { icon: <FaCogs />, title: 'System Integration', description: 'Seamless integration of hardware components and software for cohesive systems.' },
  { icon: <FaServer />, title: 'Network Infrastructure', description: 'Design and deployment of robust and scalable network architectures.' },
  { icon: <FaWrench />, title: 'Sustaining Engineering', description: 'Ongoing maintenance, support, and lifecycle management for hardware products.' },
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
            <FaLaptopCode /> Software Services
          </button>
          <button
            className={`srv-tab ${active === 'hardware' ? 'active' : ''}`}
            onClick={() => setActive('hardware')}
          >
            <FaMicrochip /> Hardware Services
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
