import { Box } from "@mui/joy";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div className="footer">
      <Box style={{ marginBottom: "4rem", textAlign: "center" }}>
        <div
          className="social-logo"
          style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
        >
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <TwitterIcon></TwitterIcon>
          <YouTubeIcon></YouTubeIcon>
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <Typography variant="h6" gutterBottom>
            Coonditions of Use
          </Typography>
          <Typography variant="h6" gutterBottom>
            Privacy & Policy
          </Typography>
          <Typography variant="h6" gutterBottom>
            Press Room
          </Typography>
        </div>
        <Typography variant="h6" gutterBottom color="text.secondary">
          MovieBox by Adewale Bakare
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
