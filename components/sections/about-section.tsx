"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function AboutSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h3 className="mb-6 text-2xl font-semibold">About Me</h3>
      <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        Software Engineering student with a strong passion for software
        engineering, particularly in web development and database management.
        Gained experience in Organization and actively engages in social
        volunteering activities. Currently serving as the Vice President
        concurrently serves as Head of the Training Division for the Volleyball
        Club at Binus Bekasi, demonstrating leadership, organizational, and
        teamwork skills while overseeing training programs and ensuring the
        development of club members.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {/* Tombol Download CV */}
        <a href="/CV-SultanMukhtarK.pdf" download>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </a>

        <a
          href="https://github.com/SultanMukhtar"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-foreground hover:bg-secondary"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sultan-mukhtar-559216332/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-foreground hover:bg-secondary"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>

        <a
          href="mailto:sultanmukhtar14@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-foreground hover:bg-secondary"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
      </div>
    </div>
  );
}
