"use client"

import type { Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none"

export const fadeIn = (direction: Direction, delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8,
        delay,
      },
    },
  }
}

export const slideIn = (direction: Direction, delay: number = 0): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        delay,
      },
    },
  }
}

export const scaleIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
      },
    },
  }
}

export const staggerContainer = (staggerChildren: number = 0.1): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: 0.1,
      },
    },
  }
}

export const textReveal = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay,
      },
    },
  }
}
