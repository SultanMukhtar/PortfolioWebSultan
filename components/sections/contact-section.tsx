"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Hello from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    // mailto fallback - opens default email client
    window.location.href = `mailto:sultanmukhtar14@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h3 className="mb-2 text-2xl font-semibold">Contact</h3>
      <p className="mb-8 text-muted-foreground">
        Tertarik berkolaborasi atau sekadar menyapa? Kirim pesan melalui form
        atau hubungi saya di bawah.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your message..."
              />
            </div>
            <Button type="submit" className="gap-2">
              Send Message <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="grid content-start gap-4">
          <a
            href="mailto:sultanmukhtar14@gmail.com"
            className="flex items-center gap-3 rounded-lg border bg-card p-4 text-foreground transition hover:bg-secondary"
          >
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-muted-foreground">
                sultanmukhtar14@gmail.com
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sultan-mukhtar-559216332/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border bg-card p-4 text-foreground transition hover:bg-secondary"
          >
            <Linkedin className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-sm text-muted-foreground">
                /in/sultan-mukhtar-559216332
              </div>
            </div>
          </a>
          <a
            href="https://github.com/SultanMukhtar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border bg-card p-4 text-foreground transition hover:bg-secondary"
          >
            <Github className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-sm text-muted-foreground">
                @SultanMukhtar
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
