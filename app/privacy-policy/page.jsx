import LegalPage from '../../src/components/LegalPage';
import { legalContent } from '../../src/data/legal';

export const metadata = {
  title: 'Privacy Policy',
  description: legalContent.privacy.description,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <LegalPage content={legalContent.privacy} />;
}
