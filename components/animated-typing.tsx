"use client"

import { useEffect, useState } from "react"

type AnimatedTypingProps =
  | {
      phrases: string[]
      text?: never
      typeSpeed?: number
      deleteSpeed?: number
      pause?: number
      loop?: boolean
    }
  | {
      text: string
      phrases?: never
      typeSpeed?: number
      deleteSpeed?: number
      pause?: number
      loop?: boolean
    }

export function AnimatedTyping({
  text,
  phrases,
  typeSpeed = 28,
  deleteSpeed = 18,
  pause = 1000,
  loop = true,
}: AnimatedTypingProps) {
  const [display, setDisplay] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let timer: number

    // Back-compat for single-run typing when only text is provided
    if (text && !phrases) {
      let i = 0
      const typeOnce = () => {
        if (i <= text.length) {
          setDisplay(text.slice(0, i))
          i++
          timer = window.setTimeout(typeOnce, typeSpeed) as unknown as number
        }
      }
      typeOnce()
      return () => clearTimeout(timer)
    }

    if (!phrases || phrases.length === 0) return

    const current = phrases[index % phrases.length]
    const step = () => {
      if (!deleting) {
        // typing
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1))
          timer = window.setTimeout(step, typeSpeed) as unknown as number
        } else {
          // pause at full word
          timer = window.setTimeout(() => setDeleting(true), pause) as unknown as number
        }
      } else {
        // deleting
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1))
          timer = window.setTimeout(step, deleteSpeed) as unknown as number
        } else {
          setDeleting(false)
          setIndex((i) => (loop ? (i + 1) % phrases.length : i + 1))
          timer = window.setTimeout(step, 300) as unknown as number
        }
      }
    }

    timer = window.setTimeout(step, 150) as unknown as number
    return () => clearTimeout(timer)
  }, [text, phrases, typeSpeed, deleteSpeed, pause, loop, display, index, deleting])

  return <span className="border-r-2 border-primary pr-1">{display}</span>
}
