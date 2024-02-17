import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{
        backgroundColor: "#0a4275",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(104, 195, 163, 1)" }}
      >
        <p>
          Blog Project &copy; {new Date().getFullYear()} Haider's Blog. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
