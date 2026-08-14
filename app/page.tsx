import { AudienceSection } from '@/components/AudienceSection/AudienceSection';
import { BenefitsSection } from '@/components/BenefitsSection/BenefitsSection';
import { CountdownBar } from '@/components/CountdownBar/CountdownBar';
import { Footer } from '@/components/Footer/Footer';
import { GiftSection } from '@/components/GiftSection/GiftSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { ProblemsSection } from '@/components/ProblemsSection/ProblemsSection';
import { RegistrationSection } from '@/components/RegistrationSection/RegistrationSection';
import { SpeakerSection } from '@/components/SpeakerSection/SpeakerSection';
import { TopicsSection } from '@/components/TopicsSection/TopicsSection';

export default function HomePage() {
  return (
    <>
      <CountdownBar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <TopicsSection />
        <GiftSection variant="guide" />
        <AudienceSection />
        <SpeakerSection />
        <BenefitsSection />
        <GiftSection variant="bonus" />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  );
}
