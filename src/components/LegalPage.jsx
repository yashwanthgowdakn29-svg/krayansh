import Link from 'next/link';

const LegalPage = ({ content }) => (
  <main className="seo-page legal-page">
    <div className="seo-page-inner">
      <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span aria-current="page">{content.title}</span>
      </nav>

      <header className="seo-hero legal-hero">
        <p className="seo-eyebrow">Krayansh</p>
        <h1>{content.title}</h1>
        <p>{content.updated}</p>
      </header>

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
);

export default LegalPage;
