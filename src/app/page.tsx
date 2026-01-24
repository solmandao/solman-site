'use client';

import { HeroSection } from '@/components/ui/hero-section-2';
import { TextLoop } from '@/components/ui/text-loop';
import { ResponseStream } from '@/components/ui/response-stream';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
            url: "/solmanlogo.png",
            alt: "SolmanDAO Logo",
            text: "SolmanDAO"
        }}
        slogan="Turning Health into Wealth"
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
            textStream="Join a community that aims to foster health education, wellness, and fitness globally."
            mode="fade"
            fadeDuration={400}
            segmentDelay={25}
            as="span"
          />
        }
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "#explore",
        }}
        backgroundImage="/solmandao-dao.png"
        contactInfo={{
            website: "yourwebsite.com",
            phone: "+1 (555) 123-4567",
            address: "20 Fieldstone Dr, Roswell, GA",
        }}
      />
    </div>
  );
}
