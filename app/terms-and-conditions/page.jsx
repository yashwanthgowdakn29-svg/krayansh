import LegalPage from '../../src/components/LegalPage';
import { legalContent } from '../../src/data/legal';

export const metadata = {
  title: 'Terms & Conditions',
  description: legalContent.terms.description,
  alternates: { canonical: '/terms-and-conditions' },
};

export default function TermsPage() {
  return <LegalPage content={legalContent.terms} />;
}
