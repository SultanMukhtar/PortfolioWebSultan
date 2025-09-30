"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Zero Waste",
    description:
      "Food waste reduction platform connecting stores with consumers through discounted near-expiry products.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "/ZeroWaste.pdf",
    repo: "https://github.com/SultanMukhtar/WebsiteKelompokSE.git",
    image: "/ZeroWaste.png",
  },
  {
    title: "YUMO Smart AI Remote",
    description:
      "Smart AI remote for controlling TVs and ACs with simple voice commands.",
    tags: ["Python"],
    demo: "#",
    repo: "https://github.com/SultanMukhtar",
    image: "/yumo-ai.png",
  },
  {
    title: "Heart Failure Prediction ML",
    description:
      "Machine learning model that predicts heart failure risk using patient health data for early detection and prevention.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    demo: "#",
    repo: "https://github.com/SultanMukhtar",
    image: "/HeartFailurePrediction.png",
  },
];

export function ProjectsSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h3 className="mb-2 text-2xl font-semibold">Projects</h3>
      <p className="mb-8 text-muted-foreground">
        Beberapa proyek yang pernah saya buat.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-lg border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="relative aspect-[16/9] w-full">
              {/* Using Image for good perf; Next.js supports it */}
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`${p.title} preview`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium">{p.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/40 px-3 py-1 text-xs text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1 bg-transparent"
                    >
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="ghost" className="gap-1">
                      GitHub <Github className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
