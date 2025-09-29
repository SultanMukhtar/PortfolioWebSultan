"use client"

import {
  Code2,
  Braces,
  Database,
  GitBranch,
  Layout,
  Box,
  Boxes,
  Settings,
  PenTool,
  FileSpreadsheet,
  KanbanSquare,
} from "lucide-react"

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Boxes },
  { name: "Python", icon: Settings },
  { name: "Java", icon: Braces },
  { name: "C++ Programming", icon: Braces },
  { name: "HTML", icon: Layout },
  { name: "CSS", icon: Box },
  { name: "Git", icon: GitBranch },
  { name: "MySQL", icon: Database },
  { name: "Trello", icon: KanbanSquare },
  { name: "Jira", icon: KanbanSquare },
  { name: "Figma", icon: PenTool },
  { name: "Excel", icon: FileSpreadsheet },
]

export function SkillsSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h3 className="mb-6 text-2xl font-semibold">Skills & Technologies</h3>
      <p className="mb-6 text-muted-foreground">A snapshot of tools and technologies I work with.</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex items-center gap-2 rounded-lg border bg-card/60 p-3 transition hover:-translate-y-0.5 hover:bg-secondary"
          >
            <Icon className="h-4 w-4 text-primary transition group-hover:scale-110" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
