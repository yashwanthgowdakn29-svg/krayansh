'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBriefcase,
  FaCloud,
  FaCogs,
  FaDesktop,
  FaGlobe,
  FaLaptopCode,
  FaLock,
  FaMicrochip,
  FaMobileAlt,
  FaNetworkWired,
  FaRobot,
  FaServer,
  FaWrench,
} from 'react-icons/fa';
import expertiseImg from '../assets/expertise.png';
import roboticsImg from '../assets/robotics.jpg';
import { serviceCategories, services } from '../data/services';

const iconMap = {
  globe: FaGlobe,
  mobile: FaMobileAlt,
  cloud: FaCloud,
  robot: FaRobot,
  lock: FaLock,
  briefcase: FaBriefcase,
  desktop: FaDesktop,
  network: FaNetworkWired,
  microchip: FaMicrochip,
  cogs: FaCogs,
  server: FaServer,
  wrench: FaWrench,
};

const Services = () => {
  const [active, setActive] = useState('software');
  const list = services.filter((service) => service.category === active);
  const category = serviceCategories[active];

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="srv-header">
          <div className="srv-header-left">
            <span className="srv-section-num" aria-hidden="true">02</span>
            <div>
              <p className="srv-eyebrow">What We Build</p>
              <h2 className="srv-title">Our <span className="srv-accent">Services</span></h2>
            </div>
          </div>
          <p className="srv-desc">
            Software and hardware engineering services tailored to business needs,
            from application code to connected devices and circuits.
          </p>
        </div>

        <div className="srv-tabs" role="tablist" aria-label="Service categories">
          <button
            className={`srv-tab ${active === 'software' ? 'active' : ''}`}
            onClick={() => setActive('software')}
            role="tab"
            aria-selected={active === 'software'}
          >
            <FaLaptopCode /> Software Services
          </button>
          <button
            className={`srv-tab ${active === 'hardware' ? 'active' : ''}`}
            onClick={() => setActive('hardware')}
            role="tab"
            aria-selected={active === 'hardware'}
          >
            <FaMicrochip /> Hardware Services
          </button>
        </div>

        <div className="srv-visual">
          <Image
            src={active === 'software' ? expertiseImg : roboticsImg}
            alt={active === 'software' ? 'Krayansh software engineering services' : 'Krayansh hardware and robotics services'}
            className="srv-visual-img"
            fill
            sizes="(max-width: 900px) 100vw, 1280px"
            key={active}
          />
          <div className="srv-visual-overlay">
            <span className="srv-visual-label">{category.visual}</span>
          </div>
        </div>

        <div className="srv-grid" key={active}>
          {list.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                href={`/services/${service.slug}`}
                className="srv-card"
                key={service.slug}
                style={{ '--delay': `${index * 0.06}s` }}
                aria-label={`Learn about ${service.title}`}
              >
                <div className="srv-card-top">
                  <div className="srv-card-icon"><Icon /></div>
                  <FaArrowRight className="srv-arrow" />
                </div>
                <h3 className="srv-card-title">{service.title}</h3>
                <p className="srv-card-desc">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
