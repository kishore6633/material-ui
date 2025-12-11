export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#696868ff",
        color: "#f5e4e4ff",
        fontSize: "14px",
         position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      © {new Date().getFullYear()} Weather App. By @ Kishore Bhukya...
    </footer>
  );
}
