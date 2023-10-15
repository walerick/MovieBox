import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/system";

const SidenavContainer = styled("div")({
  backgroundColor: "#fff",
  border: "1px solid red",
  borderRadius: "0 50px 50px 0",
  color: "#333",
  width: "230px",
  //   height: "90%",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2rem",
});

const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  margin: "1rem",
  marginBlock: "3rem",
});

const StyledIcon = styled("span")({
  marginRight: "0.5rem",
});

const SideNav = () => {
  return (
    <SidenavContainer>
      <div
        className="header-logo"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <img
          src="https://hngx-stagetwo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftv.cf114103.png&w=64&q=75"
          alt="logo"
          height={"50px"}
        />
        <h2 style={{ color: "#333" }}>MovieBox</h2>
      </div>
      <StyledLink to="/">
        <StyledIcon>
          <HomeIcon />
        </StyledIcon>
        Home
      </StyledLink>
      <StyledLink to="/movies">
        <StyledIcon>
          <MovieIcon />
        </StyledIcon>
        Movies
      </StyledLink>
      <StyledLink to="/tv-series">
        <StyledIcon>
          <TvIcon />
        </StyledIcon>
        TV Series
      </StyledLink>
      <StyledLink to="/upcoming">
        <StyledIcon>
          <EventIcon />
        </StyledIcon>
        Upcoming
      </StyledLink>
      <StyledLink to="/logout">
        <StyledIcon>
          <LogoutIcon />
        </StyledIcon>
        Logout
      </StyledLink>
    </SidenavContainer>
  );
};

export default SideNav;
