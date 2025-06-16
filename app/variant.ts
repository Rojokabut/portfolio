"use client"

import type { Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none" | ""

export const fadeIn = (direction: Direction, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1, // Corrigé : était 10, maintenant 1
      transition: {
        type: "tween",
        duration: 1.2, // Légèrement plus rapide
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Courbe d'animation plus naturelle
      },
    },
  }
}

// Ajout d'autres animations utiles
export const slideIn = (direction: Direction, delay: number): Variants => {
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
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
}

export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}
