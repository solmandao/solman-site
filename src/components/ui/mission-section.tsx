"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RevealWaveImage } from '@/components/ui/reveal-wave-image';

interface MissionSectionProps {
  className?: string;
}

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

export function MissionSection({ className }: MissionSectionProps) {
  return (
    <motion.section
      className={cn("p-6 md:p-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Side: Interactive Image (on desktop) */}
          <motion.div
            className="order-2 md:order-1 relative h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl"
            variants={itemVariants}
          >
            <RevealWaveImage
              src="/islanddao/IMG_0586.jpg"
              waveSpeed={0.2}
              waveFrequency={0.7}
              waveAmplitude={0.5}
              revealRadius={0.5}
              revealSoftness={1}
              pixelSize={2}
              mouseRadius={0.4}
              className="h-full w-full"
            />
          </motion.div>

          {/* Right Side: Card (on desktop) */}
          <motion.div
            className="order-1 md:order-2 flex items-center"
            variants={itemVariants}
          >
            <Card className={cn(
              "w-full rounded-2xl shadow-2xl bg-card text-card-foreground border-0",
              "p-8 md:p-12 lg:p-16"
            )}>
              <CardContent className="p-0">
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground italic font-sans leading-relaxed">
                  "We build real-world pathways into on-chain governance.
                  Education, competition, and participation turn curiosity into earned civic power."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
