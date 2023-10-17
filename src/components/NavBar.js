import InputWithIcon from "./InputWithIcon";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div
        className="header-logo"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <img
          src="https://hngx-stagetwo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftv.cf114103.png&w=64&q=75"
          alt="logo"
          height={"50px"}
        />
        <h2 style={{ color: "white" }}>MovieBox</h2>
      </div>

      <InputWithIcon></InputWithIcon>
      <div
        className="sign-in"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <h2 style={{ color: "white" }}>Sign in</h2>
        <button
          style={{
            backgroundColor: "red",
            borderRadius: "50%",
            padding: "5px",
            border: "None",
          }}
        >
          <DragHandleIcon></DragHandleIcon>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
