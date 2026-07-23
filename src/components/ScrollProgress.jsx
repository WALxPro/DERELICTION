import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      frame = 0
      const scrollTop = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxHeight > 0 ? scrollTop / maxHeight : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  )
}
