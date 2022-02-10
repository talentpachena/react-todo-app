import React from "react"

const Footer = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  const currentYear = new Date().getFullYear()
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
        <p>&copy;Talent Pachena: {currentYear}</p>
        Designed and Developed using Reactjs by Talent Pachena
      </h6>
    </footer>
  )
}

export default Footer