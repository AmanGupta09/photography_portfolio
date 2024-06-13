import React from "react";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className={styles?.mainContainer}>
      {/* <div className={styles?.container}> */}
      <div className={styles?.nameText}>HELLO ASTHETIC</div>

      <div className={styles?.mainButtonContainer}>
        <div className={styles?.buttonContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <HomeIcon sx={{ paddingRight: "2px" }} fontSize="small" />
            HOME
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <WorkIcon sx={{ paddingRight: "2px" }} fontSize="small" />
            WORK
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <CallIcon sx={{ paddingRight: "2px" }} fontSize="small" />
            COTACT
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <PersonIcon sx={{ paddingRight: "2px" }} fontSize="small" />
            ABOUT
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: "16px",
          }}
        >
          <Button variant="contained">BOOK NOW</Button>
        </div>
        <div className={styles?.menuBtn}>
          <MenuIcon sx={{ padding: "8px" }} fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
