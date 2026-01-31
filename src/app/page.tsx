'use client';

import { HeroSection } from '@/components/ui/hero-section-2';
import { TextLoop } from '@/components/ui/text-loop';
import { ResponseStream } from '@/components/ui/response-stream';
import { FeatureSteps } from '@/components/ui/feature-section';
import { MissionSection } from '@/components/ui/mission-section';
import { BookOpen, Trophy, Vote } from 'lucide-react';

export default function Home() {
  const features = [
    {
      step: 'Step 1',
      title: 'Learn.',
      content: 'A hands-on educational initiative focused on introducing blockchain fundamentals, Solana, on-chain governance, and real-world participation',
      image: '/islanddao/IMG_1724.png',
      icon: BookOpen
    },
    {
      step: 'Step 2',
      title: 'Compete.',
      content: 'Take part in sponsored international competitions, cycle races, and fitness programs',
      image: '/islanddao/IMG_1721.png',
      icon: Trophy
    },
    {
      step: 'Step 3',
      title: 'Govern.',
      content: 'Become the on-chain citizen and vote on key initiatives such as grants, sponsorships, and rewards',
      image: '/solmandao.png',
      icon: Vote
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center pt-28">
      <div className="w-full max-w-7xl mx-auto">
        <HeroSection
        logo={{
            url: "/solmanlogo.png",
            alt: "SolmanDAO Logo",
            text: "SolmanDAO"
        }}
        slogan="Building the Next Generation of On-Chain Citizens."
        title={
          <>
            SolmanDAO <br />
            <TextLoop interval={3} className="text-primary">
              <span>Empowers Health</span>
              <span>Inspires Growth</span>
              <span>Builds Discipline</span>
              <span>Pushes Limits</span>
            </TextLoop>
          </>
        }
        subtitle={
          <ResponseStream
            textStream="From Classrooms and Communities to On-Chain Governance."
            mode="fade"
            fadeDuration={400}
            segmentDelay={25}
            as="span"
          />
        }
        callToAction={{
          text: "Explore Our Mission",
          href: "#explore",
        }}
          backgroundImage="/islanddao/IMG_1717.jpg"
        />
        <FeatureSteps
          features={features}
          title="Turning Participation Into Opportunity"
          autoPlayInterval={3000}
        />
        <MissionSection />
      </div>
    </div>
  );
}
