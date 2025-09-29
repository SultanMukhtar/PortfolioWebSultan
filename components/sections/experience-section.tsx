"use client"

export function ExperienceSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h3 className="mb-6 text-2xl font-semibold">Experience</h3>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-lg font-medium">President of Binus Bekasi Volleyball – Binus University</h4>
            <p className="text-sm text-muted-foreground">Feb 2024 - Feb 2025</p>
          </div>
        </div>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Led the student volleyball organization by overseeing operations, training programs, and member development.
          Managed and coordinated tournaments, competitions, and community events to strengthen engagement and team
          growth. Built strong collaborations with university administration and external organizations, while fostering
          leadership, teamwork, and a supportive club culture that empowered members to excel both on and off the court.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Team Leadership",
            "Problem-Solving",
            "Event Management",
            "Organizational Management",
            "Team Coordination",
          ].map((tag) => (
            <span key={tag} className="rounded-full bg-accent/40 px-3 py-1 text-xs text-accent-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
