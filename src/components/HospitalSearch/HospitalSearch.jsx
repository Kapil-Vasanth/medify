import {
  Box,
  Button,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SearchRounded } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

function HospitalSearch() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();
  const urlLocation = useLocation();

  // if (urlLocation.pathname == "/search") {
  //   // console.log("working");
  // }

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (formData.state != "") {
      fetch(`https://meddata-backend.onrender.com/cities/${formData.state}`)
        .then((res) => res.json())
        .then((data) => setCities(data))
        .catch((err) => console.log(err));
    }
  }, [formData.state]);

  const handleFormData = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  if(urlLocation.pathname == "/my-bookings"){
    return (
      <>
        
      </>
    )
  }

  return (
    
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Select
          displayEmpty
          value={formData.state}
          id="state"
          name="state"
          sx={{ minWidth: "300px", width: "100%" }}
          onChange={handleFormData}
          startAdornment={
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          }
        >
          <MenuItem disabled value="" selected>
            State
          </MenuItem>
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>

        <Select
          displayEmpty
          value={formData.city}
          id="city"
          name="city"
          sx={{ minWidth: "300px", width: "100%" }}
          onChange={handleFormData}
          startAdornment={
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          }
        >
          <MenuItem disabled value="" selected>
            City
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          startIcon={<SearchRounded />}
        >
          Search
        </Button>

      </Box>
    
  );
}

export default HospitalSearch;
