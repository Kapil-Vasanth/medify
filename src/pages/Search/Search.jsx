/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Container, Typography, Stack } from "@mui/material";
import HospitalSearch from "../../components/HospitalSearch/HospitalSearch";
import tickIcon from "../../assets/tick.png";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import ctaImg from "../../assets/cta.png";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [hospitals, setHospitals] = useState([]);
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  useEffect(() => {
    fetch(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    )
      .then((res) => res.json())
      .then((data) => setHospitals(data))
      .catch((err) => console.log(err));
  }, [state, city]);

  const handleBooking = (details) => {
    const bookings = localStorage.getItem("bookings") || "[]";
    const oldBookings = JSON.parse(bookings);
    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, { ...details }])
    );
    alert("booking made successfull")
  };
  return (
    <>
      <Box sx={{ background: "#EFF5FE" }}>
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translatey(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <HospitalSearch />
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Box sx={{ mb: 3 }} pt={6}>
            <Typography
              component="h1"
              fontSize={24}
              lineHeight={1.1}
              mb={2}
              fontWeight={500}
            >
              {`2 medical centers available in `}
              <span style={{ textTransform: "capitalize" }}>
                {city.toLocaleLowerCase()}
              </span>
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <img src={tickIcon} height={24} width={24} alt="icon" />
              <Typography color="#787887">
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>
          </Box>

          <Stack
            alignItems={"flex-start"}
            direction={{ md: "row" }}
            sx={{ pb: 10 }}
          >
            <Stack
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
              gap={4}
            >
              {hospitals.map((hospital) => (
                <HospitalCard
                  key={hospital["Hospital Name"]}
                  details={hospital}
                  availableSlots={availableSlots}
                  handleBooking={handleBooking}
                />
              ))}
            </Stack>
            <img src={ctaImg} width={360} height="auto" alt="banner" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Search;
