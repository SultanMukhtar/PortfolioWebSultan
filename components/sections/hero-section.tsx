"use client";

import { AnimatedTyping } from "@/components/animated-typing";
import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28">
      {/* Parallax decorative layers (subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 hidden h-24 w-24 rounded-full bg-accent/30 blur-xl md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-24 hidden h-16 w-16 rounded-full bg-primary/20 blur-lg md:block"
      />

      {/* Two-column layout on md+, vertical on mobile */}
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-muted-foreground">Hi, I&apos;m</p>
          <h1 className="text-balance text-4xl font-semibold md:text-6xl">
            Sultan Mukhtar Khudori
          </h1>
          <h2 className="text-pretty text-lg text-primary md:text-2xl">
            <AnimatedTyping
              phrases={[
                "Innovating Solutions",
                "Building the Future",
                "Code. Create. Conquer.",
              ]}
              loop
              typeSpeed={32}
              deleteSpeed={22}
              pause={900}
            />
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Software Engineering student at Binus University.
          </p>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Driving product vision and strategy with a strong foundation in
            software engineering, user-centered design, and leadership
            experience. Passionate about building impactful solutions that
            connect business goals with real user needs.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            {/* Tombol Download CV */}
            <a href="/CV-SultanMukhtarK.pdf" download>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>

            <a href="#about" className="group">
              <Button variant="outline">
                Learn more
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mx-auto">
          <Avatar className="h-52 w-52 border-2 border-primary/40 shadow-sm md:h-64 md:w-64">
            <AvatarImage
              src="/images/profile-sultan.jpg"
              alt="Photo of Sultan Mukhtar Khudori"
            />
            <AvatarFallback className="text-lg">SM</AvatarFallback>
          </Avatar>
          <p className="mt-3 text-center text-base md:text-lg font-medium text-muted-foreground">
            Sultan Mukhtar Khudori
          </p>
        </div>
      </div>
    </div>
  );
}
