"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRight,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { PublishedWorkSection } from "@/components/published-work";
import { AchievementsNewsSection } from "@/components/achievements-news";
import { HoverNavbar } from "@/components/hover-navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { InteractiveSkills } from "@/components/interactive-skills";
import { WorkTimeline } from "@/components/work-timeline";
import { HyperText } from "@/components/magicui/hyper-text";
import { AboutMeMorph } from "@/components/about-me-morph";
// import { AboutMeDrawer } from "@/components/about-me-drawer";
import { GitHubStars } from "@/components/github-stars";
import { Metadata } from "next";

// Name animation overlay component
const NameAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Prevent page scrolling during animation
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200); // Animation stays for 2.2 seconds (faster than before)

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [visible]);

  const nameWords = RESUME_DATA.name.split(" ");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Faster fade in/out
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }} // Faster background animation
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Name with HyperText animation */}
            <div className="relative flex flex-wrap justify-center gap-x-4 text-center text-4xl font-bold sm:text-6xl lg:text-9xl">
              {nameWords.map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }} // Faster animation with shorter delay
                  className="overflow-hidden"
                >
                  <HyperText className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl lg:text-9xl">
                    {word}
                  </HyperText>
                </motion.div>
              ))}
            </div>

            {/* About text with HyperText */}
            <motion.div
              className="text-center md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }} // Faster appearance of about text
            >
              <HyperText className="text-sm tracking-wide text-gray-600">
                {RESUME_DATA.about}
              </HyperText>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Page() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Command menu links
  const commandLinks = [
    {
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    },
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];

  useEffect(() => {
    // Set animation complete after 4 seconds (slightly longer than the animation duration)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      {/* Content is always rendered and visible to crawlers/SEO */}
      <motion.div
        initial={{ opacity: 1 }} // Start visible for SSR/crawlers
        animate={{ opacity: animationComplete ? 1 : 0.1 }} // Slightly visible during animation
        transition={{ duration: 0.8 }}
        style={{
          // Ensure content is always accessible to screen readers and crawlers
          position: "relative",
          zIndex: animationComplete ? 10 : 1, // Lower z-index during animation
        }}
      >
        <HoverNavbar links={commandLinks} />
        <motion.section
          id="top"
          className="mx-auto w-full max-w-4xl space-y-8 bg-white print:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="flex h-8 items-center gap-2"
                  asChild
                >
                  <a
                    href={RESUME_DATA.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <FileDown className="size-4" />
                    <span>CV</span>
                  </a>
                </Button>
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="size-28">
                <AvatarImage
                  alt={RESUME_DATA.name}
                  src={RESUME_DATA.avatarUrl}
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>

          <Section id="about">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">About</h2>
            </div>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.summary}
            </p>
            <AboutMeMorph />
          </Section>

          <Section id="work" className="scroll-mt-16">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <WorkTimeline experiences={RESUME_DATA.work} />
          </Section>

          {/* Published Work Section */}
          {RESUME_DATA.publications && RESUME_DATA.publications.length > 0 && (
            <div className="scroll-mt-16" id="publications">
              <PublishedWorkSection publications={RESUME_DATA.publications} />
            </div>
          )}

          {/* Achievements & News Section */}
          {RESUME_DATA.achievements && RESUME_DATA.achievements.length > 0 && (
            <div className="scroll-mt-16" id="achievements-news">
              <AchievementsNewsSection
                achievements={RESUME_DATA.achievements}
              />
            </div>
          )}

          <Section id="skills" className="scroll-mt-16">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="mt-5">
              <InteractiveSkills skills={Array.from(RESUME_DATA.skills)} />
            </div>
          </Section>

          <Section id="projects" className="print-force-new-page scroll-mt-16">
            <h2 className="text-xl font-bold">Research Projects</h2>
            <div className="-mx-3 mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {RESUME_DATA.researchProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                </motion.div>
              ))}
            </div>
          </Section>

          <Section className="print-force-new-page scroll-mt-16">
            <h2 className="text-xl font-bold">Other Projects</h2>
            <div className="-mx-3 mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {RESUME_DATA.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="education" className="scroll-mt-16">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="mt-4 space-y-4">
              {RESUME_DATA.education.map((education) => (
                <Card
                  key={education.school}
                  className="overflow-hidden border border-muted p-4 transition-all hover:shadow-sm"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              ))}
            </div>
          </Section>
        </motion.section>
      </motion.div>

      {/* Add the name animation component as overlay - renders on top */}
      <NameAnimation />
    </main>
  );
}
