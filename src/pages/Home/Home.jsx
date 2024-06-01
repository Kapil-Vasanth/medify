import Container from "@mui/material/Container";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/hero.png";
import HospitalSearch from "../../components/HospitalSearch/HospitalSearch";

function Home() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6} pt={6} alignItems="center" direction={"row"}>
            <Box>
              <Typography variant="h3">Skip the travel! Find Online</Typography>
              <Typography variant="h1" component="h1" mb={1}>
                Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
              </Typography>
              <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </Typography>
              <Link to="/search">
                <Button variant="contained" size="large" disableElevation>
                  Find Centers
                </Button>
              </Link>
            </Box>
            <Box component={"img"} src={img} width={{ xs: 1, md: "50%" }} />
          </Stack>
          <Stack 
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <HospitalSearch />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Home;
