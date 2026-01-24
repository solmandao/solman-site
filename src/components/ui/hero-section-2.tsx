"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';

// Prop types for the HeroSection component
interface HeroSectionProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row rounded-2xl shadow-lg",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
            <motion.header className="mb-12" variants={itemVariants}>
                {logo && (
                    <div className="flex items-center">
                        <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                        <div>
                            {logo.text && <p className="text-lg font-bold text-foreground">{logo.text}</p>}
                            {slogan && <p className="text-xs tracking-wider text-muted-foreground">{slogan}</p>}
                        </div>
                    </div>
                )}
            </motion.header>

            <motion.main variants={containerVariants}>
                <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl" variants={itemVariants}>
                    {title}
                </motion.h1>
                <motion.div className="my-6 h-1 w-20 bg-primary" variants={itemVariants}></motion.div>
                <motion.p className="mb-8 max-w-md text-base text-muted-foreground" variants={itemVariants}>
                    {subtitle}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <GradientButton
                        variant="variant"
                        onClick={() => {
                            const element = document.querySelector(callToAction.href);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {callToAction.text}
                    </GradientButton>
                </motion.div>
            </motion.main>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
