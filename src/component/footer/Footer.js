import React from "react";
import { styles } from "./style";

import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box style={{ textAlign: "center", width: "50rem", marginLeft: "30rem" ,marginBottom:'2rem',backgroundcolor:'black' ,marginTop:'5rem'}}>
      <div style={{ display: "flex", marginTop: "2rem", marginLeft: "16rem" }}>
          <img src="logo.jpg" />
      </div>
      <Typography
        variant="h4"
        style={{
          width: "100%",
          textAlign: "center",
          color: "black",
          fontSize: 16,
          fontFamily: "Public Sans",
          fontWeight: "400",
          wordWrap: "break-word",
          marginTop: "1rem",
        }}
      >
        Your Style, Your Schedule, Your RentalPass
      </Typography>
      <Typography style={styles.mainPragraphTypography}>
        Here, it's all about you. With RentalPass, your style reigns supreme.
        Rent a fashion refresh whenever you please. Embrace the freedom to
        express yourself, all at your fingertips.
      </Typography>
      <Typography
        style={{
          color: "black",
          fontSize: 20,
          fontFamily: "Public Sans",
          fontWeight: "400",
          wordWrap: "break-word",
          marginTop: "1rem",
        }}
      >
        Download App Now !
      </Typography>
      <div style={{ marginTop: "2rem" }}>
        <img src="downloadimg.png" style={{ height: "42px", width: "143px" }} />
        <img
          src="googleplayimg.png"
          style={{ height: "42px", width: "143px", marginLeft: "2rem" }}
        />
      </div>
      <div
        style={{
          width: "90%",
          height: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 100,
          border: "1px black solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
          display: "inline-flex",
          marginTop: "2rem",
        }}
      >
        <img src="googleimg.jpg" style={{ marginRight: "12px" }} />

        <div
          style={{
            color: "rgba(0, 0, 0, 0.80)",
            fontSize: 16,
            fontFamily: "Public Sans",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Sign In with Google
        </div>
      </div>
      <Typography variant="h5" style={{ fontSize: "12px", width: "20rem" ,marginTop:'2rem',marginLeft:'15rem'}}>
      By sign in, you are accepting RentalPass 
        <Link
          to="/termsofuse"
          style={{ textDecoration: "none", color: "blue" }}
        >
           Terms and Conditions
        </Link>
        <Link
          to="/privacy-policy"
          style={{ textDecoration: "none", color: "blue", marginLeft: "12px" }}
        >
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
