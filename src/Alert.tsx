import { useEffect } from "react"
import { atom, useRecoilState, useRecoilValue } from "recoil"
import { ReactNode } from "react"

interface alertAtomType {
  hidden: boolean
  child: ReactNode | null
}

const alertAtom = atom<alertAtomType>({
  key: "alertAtom",
  default: {
    hidden: true,
    child: null,
  },
})

export const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertAtom)

  const show = (child: ReactNode) => {
    setAlert({ hidden: false, child })
  }

  const hide = () => {
    setAlert({ hidden: true, child: null })
  }

  return { show, hide }
}

const Alert = () => {
  const { show, hide } = useAlert()
  const alert = useRecoilValue(alertAtom)

  useEffect(() => {
    // close when press escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hide()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <div
      className="alert"
      style={{
        display: `${alert.hidden ? "none" : "block"}`,
      }}
    >
      <div className="alert-content">
        {alert.child}
        <button onClick={hide}>x</button>
      </div>
      <div className="alert-overlay" onClick={hide}></div>
    </div>
  )
}

export default Alert
