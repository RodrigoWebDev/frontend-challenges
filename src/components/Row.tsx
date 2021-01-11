import { ReactNode } from "react"

interface RowInterface {
  children: ReactNode
}

const Row = ({ children }: RowInterface) => <div className="row">{children}</div>

export default Row