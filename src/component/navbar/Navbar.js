import React, { useState } from "react";
import { Container, Typography, Box, Button, Link } from "@mui/material";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <Container
      maxWidth={true}
      sx={{
        // width: 1440,
        height: 108,
        p: 3,
        bgcolor: "background.paper",
        border: "1px solid rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            //   justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img src="logo.jpg" />
          </Box>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              gap: "18px",
              //   justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/occasions"
              onClick={() => handleLinkClick("/occasions")}
              style={{
                color: activeLink === "/occasions" ? "black" : "inherit",
                fontWeight: activeLink === "/occasions" ? "bold" : "normal",
                textDecoration:
                  activeLink === "/occasions" ? "underline" : "none",
              }}
            >
              <Typography variant="body1">OCASSIONS</Typography>
            </Link>
            <Link
              href="/traditional"
              onClick={() => handleLinkClick("/traditional")}
              style={{
                color: activeLink === "/traditional" ? "black" : "inherit",
                fontWeight: activeLink === "/traditional" ? "bold" : "normal",
                textDecoration:
                  activeLink === "/traditional" ? "underline" : "none",
              }}
            >
              <Typography variant="body1">TRADITIONAL</Typography>
            </Link>
            <Link
              href="/mens-clothing"
              onClick={() => handleLinkClick("/mens-clothing")}
              style={{
                color: activeLink === "/mens-clothing" ? "black" : "inherit",
                fontWeight: activeLink === "/mens-clothing" ? "bold" : "normal",
                textDecoration:
                  activeLink === "/mens-clothing" ? "underline" : "none",
              }}
            >
              <Typography variant="body1">MEN'S CLOTHING</Typography>
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => handleLinkClick("/how-it-works")}
              style={{
                color: activeLink === "/how-it-works" ? "black" : "inherit",
                fontWeight: activeLink === "/how-it-works" ? "bold" : "normal",
                textDecoration:
                  activeLink === "/how-it-works" ? "underline" : "none",
              }}
            >
              <Typography variant="body1">HOW IT WORKS ?</Typography>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="ei_search.jpg" />
            <Button>Sign In</Button>
            <img src="fluent_heart.jpg" />
            <img src="ph_bag-thin.jpg" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
