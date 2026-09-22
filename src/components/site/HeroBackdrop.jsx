import Image from 'next/image';
import banner from '../../assets/hero-banner.webp';
import { GridGlow, WaveField } from './Visuals';

/* Every dark hero band shares this backdrop: the photograph, a scrim that
   keeps the headline legible over it, and the vector wave/grid on top for
   the blue light the reference design carries across its heroes.

   `priority` should be set on the first hero of a page so the photo is the
   LCP candidate rather than a late-loading background. */
export default function HeroBackdrop({ priority = true }) {
  return (
    <div className="kg-hero-bg" aria-hidden="true">
      <Image
        className="kg-hero-photo"
        src={banner}
        alt=""
        fill
        priority={priority}
        placeholder="blur"
        sizes="100vw"
      />
      <div className="kg-hero-scrim" />
      <GridGlow />
      <WaveField />
    </div>
  );
}
