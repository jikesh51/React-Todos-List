import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "fixed",
    width: "100%",
    bottom: 0,
  }
  return (
    <div className="bg-dark text-light footer" style={footerStyle}>
      <div className="text-center py-3">Copyright &copy; Todos.com</div>
    </div>
  );
}
