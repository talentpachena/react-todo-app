import React from "react"

const Footer = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <footer style={headerStyle}>
      <h6
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#fff",
          textTransform: "capitalize",
          textAlign: "center",
          backgroundColor: "#74BBFB",
        }}
      >
        Designed and Developed using Reactjs by Talent Pachena
      </h6>
    </footer>
  )
}

export default Footer