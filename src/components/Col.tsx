import { ReactNode } from "react"

interface ColInterface {
  width: string
  children: ReactNode
}

const Col = ({ children, width }: ColInterface) =>
  <div
    className="col"
    style={{
      flexBasis: width || "auto"
    }}
  >
    {children}
  </div>

export default Col