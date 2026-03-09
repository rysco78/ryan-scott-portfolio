'use client';

import Image from 'next/image';
import { MapPin, ArrowDown, Map, ShieldCheck, BarChart2, Users, Cloud, TrendingUp, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { competencies } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = { Map, ShieldCheck, BarChart2, Users, Cloud, TrendingUp };

export function Hero() {
  return (
    <section className="flex items-center pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-accent/40 shadow-2xl shadow-accent/10">
              <Image
                src="/ryan-scott.jpg"
                alt="Ryan R. Scott"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={13} className="text-accent" />
              Dallas, Texas
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-none mb-4">
                Idea to Product.<br />Product to Growth.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Product and growth executive with 18+ years turning complex, regulated environments
                into opportunities for digital transformation. I've built cloud-native lending
                platforms, DTC acquisition engines, and new revenue businesses at Fortune 500 scale
                — leading the full stack of product, engineering, marketing, risk, and finance to
                deliver outcomes that compound.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Competency cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {competencies.map((comp) => {
            const Icon = iconMap[comp.icon];
            return (
              <div
                key={comp.label}
                className="group p-5 rounded-lg bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4"
              >
                {Icon && <Icon size={28} className="text-accent flex-shrink-0 mt-0.5" />}
                <div>
                  <h3 className="font-semibold text-sm mb-1.5 group-hover:text-accent transition-colors">
                    {comp.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{comp.descriptor}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
