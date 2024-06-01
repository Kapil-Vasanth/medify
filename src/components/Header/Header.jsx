import { Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const urlLocation = useLocation()

  return (
    <>
      <div className={styles.topInfo}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          bgcolor:urlLocation.pathname == "/search" ? "#fff" : "transparent"
        }}
        maxWidth="xl"
      >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Stack
          direction={{ xs: "row" }}
          spacing={4}
          alignItems={{ xs: "flex-start", md: "center" }}
          
        >
          <Link>Find Doctors</Link>
          <Link to="/search">Hospitals</Link>
          <Link>Medicines</Link>
          <Link>Surgeries</Link>
          <Link>Software for Provider</Link>
          <Link>Facilities</Link>
          <Link to="/my-bookings">
            <Button variant="contained" disableElevation>
              My Bookings
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}

export default Header;
