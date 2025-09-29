"use client"

import type React from "react"

import type { PropsWithChildren } from "react"
import { toast } from "@/hooks/use-toast"

export function GenerateCVButton({ children }: PropsWithChildren) {
  async function tryDownloadStaticCV() {
    const url = "/cv/sultan-mukhtar-khudori.pdf"
    try {
      const res = await fetch(url, { method: "HEAD" })
      if (res.ok) {
        const a = document.createElement("a")
        a.href = url
        a.download = "Sultan-Mukhtar-Khudori-CV.pdf"
        document.body.appendChild(a)
        a.click()
        a.remove()
        return true
      }
    } catch {
      // ignore, will fallback
    }
    return false
  }

  async function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    // First try to download the provided file if it exists
    const downloaded = await tryDownloadStaticCV()
    if (downloaded) return

    // Fallback: generate a simple PDF in-browser
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      // Header
      doc.setFont("helvetica", "bold")
      doc.setFontSize(18)
      doc.text("Sultan Mukhtar Khudori", 20, 20)
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text("Software Engineering student at Binus University", 20, 28)
      doc.text("Email: sultanmukhtar14@gmail.com | GitHub: github.com/SultanMukhtar", 20, 34)
      doc.text("LinkedIn: linkedin.com/in/sultan-mukhtar-559216332/", 20, 40)

      // Summary
      doc.setFont("helvetica", "bold")
      doc.setFontSize(13)
      doc.text("Summary", 20, 54)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      doc.text(
        "Driving product vision and strategy with a strong foundation in software engineering, user-centered design, and leadership experience.",
        20,
        62,
        { maxWidth: 170 },
      )

      // Experience
      doc.setFont("helvetica", "bold")
      doc.setFontSize(13)
      doc.text("Experience", 20, 84)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      doc.text("President of Binus Bekasi Volleyball – Binus University (Feb 2024 - Feb 2025)", 20, 92, {
        maxWidth: 170,
      })
      doc.text(
        "Led operations, training programs, and member development. Coordinated tournaments and community events. Fostered leadership, teamwork, and a supportive club culture.",
        20,
        100,
        { maxWidth: 170 },
      )
      doc.text(
        "Skills: Team Leadership, Problem-Solving, Event & Organizational Management, Team Coordination",
        20,
        120,
        {
          maxWidth: 170,
        },
      )

      // Skills
      doc.setFont("helvetica", "bold")
      doc.setFontSize(13)
      doc.text("Skills & Technologies", 20, 138)
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      doc.text(
        "JavaScript, React, Python, Java, C++ Programming, HTML, CSS, Git, MySQL, Trello, Jira, Figma, Excel",
        20,
        146,
        { maxWidth: 170 },
      )

      doc.save("Sultan-Mukhtar-Khudori-CV.pdf")
    } catch (err) {
      console.error("[v0] CV generation error:", err)
      toast({
        title: "Failed to generate CV",
        description: "Please try again in a moment.",
        variant: "destructive",
      })
    }
  }

  return (
    <span onClick={handleClick} role="button" aria-label="Download CV">
      {children}
    </span>
  )
}
