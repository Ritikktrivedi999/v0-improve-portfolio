"use client"

import { useState, useCallback } from "react"

let toastCount = 0

function generateId() {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER
  return toastCount.toString()
}

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, variant = "default", duration = 5000 }) => {
    const id = generateId()
    const newToast = {
      id,
      title,
      description,
      variant,
      open: true,
    }

    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)

    return {
      id,
      dismiss: () => setToasts((prev) => prev.filter((toast) => toast.id !== id)),
    }
  }, [])

  const dismiss = useCallback((toastId) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId))
  }, [])

  return {
    toasts,
    toast,
    dismiss,
  }
}
