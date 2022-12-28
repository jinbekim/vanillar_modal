import { useState } from "react"

interface AlertProps {
  hidden: boolean
  setHidden: (hidden: boolean) => void
  content?: React.ReactNode
}
const Alert = ({ hidden, setHidden, content }: AlertProps) => {
  return (
    <div
      className="alert"
      style={{
        display: `${hidden ? "none" : "block"}`,
      }}
    >
      <div className="alert-content">
        {content}
        <button onClick={() => setHidden(true)}>x</button>
      </div>
      <div className="alert-overlay" onClick={() => setHidden(true)}></div>
    </div>
  )
}

export default Alert
