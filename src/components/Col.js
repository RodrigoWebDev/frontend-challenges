import React from "react"

const Col = ({ children, width }) =>
  <div
    className="col"
    style={{
      flexBasis: width || "auto"
    }}
  >
    {children}
  </div>

export default Col