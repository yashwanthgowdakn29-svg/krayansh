import Link from 'next/link';
import HeroBackdrop from './site/HeroBackdrop';

const LegalPage = ({ content }) => (
  <>
    <section className="kg-hero kg-hero-detail">
      <HeroBackdrop />
      <div className="kg-wrap kg-hero-inner kg-hero-narrow">
        <div>
          <nav className="kg-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">{content.title}</span>
          </nav>
          <p className="kg-eyebrow">Krayansh</p>
          <h1>{content.title}</h1>
          <p className="kg-hero-lead">{content.updated}</p>
        </div>
      </div>
    </section>

    <main className="seo-page seo-page-body legal-page">
      <div className="seo-page-inner">
        <div className="legal-page-content">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default LegalPage;
