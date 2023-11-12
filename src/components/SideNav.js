import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/system";
// For the tabssss
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

const SidenavContainer = styled("tabss")({
  backgroundColor: "#fff",
  border: "1px solid #CFCFCF",
  borderRadius: "0 50px 50px 0",
  color: "#333",
  width: "230px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBlock: "4rem",
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
    <Tabs
      className="side-nav"
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{
        border: "1px solid #CFCFCF",
        borderRadius: "0 50px 50px 0",
        position: "absolute",
      }}
    >
      <TabList disableUnderline>
        <div
          className="header-logo"
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBlock: "2rem",
            marginInline: "1rem",
          }}
        >
          <img src={require("../moviebox_logo.png")} alt="logo" />
          <h3 style={{ color: "#333" }}>MovieBox</h3>
        </div>
        <Tab>
          <StyledLink to="#">
            <StyledIcon>
              <MovieIcon />
            </StyledIcon>
            Movies
          </StyledLink>
        </Tab>
        <Tab>
          <StyledLink to="/">
            <StyledIcon>
              <HomeIcon />
            </StyledIcon>
            Home
          </StyledLink>
        </Tab>
        <Tab>
          <StyledLink to="#">
            <StyledIcon>
              <TvIcon />
            </StyledIcon>
            TV Series
          </StyledLink>
        </Tab>
        <Tab>
          <StyledLink to="#">
            <StyledIcon>
              <EventIcon />
            </StyledIcon>
            Upcoming
          </StyledLink>
        </Tab>
        <Tab>
          <StyledLink to="#">
            <StyledIcon>
              <LogoutIcon />
            </StyledIcon>
            Logout
          </StyledLink>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default SideNav;
