import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { weight } from "../../api/axios";
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
// import Alerts from "../../components/status/Alerts";
import { useParams } from "react-router-dom";

// Start with the default function FirestWeigth ===============>>
export default function SecondWeigth() {
  const param = useParams();
  const [valCurrent, setValCurrent] = useState({});

  useEffect(() => {
    const getSecondWeigthById = async () => {
     try {
      const myData = await weight.get(`/get-second-weight/${param.id}`);
      setValCurrent(myData.data.data);
     } catch (error) {
      const myData = await weight.get(`/get-second-weight/${param.id}`);
      setValCurrent(myData.data.data);
     }
    };
    getSecondWeigthById();
  }, [param.id]);

  useEffect(() => {
    valCurrent
    getCurrentTime();
  }, [valCurrent, getCurrentTime]);



  
  const [val, setVal] = useState({
    car_id: valCurrent.car_id,
    car_weight_one: 0,
    client_name: valCurrent.client_name,
    driver_name: valCurrent.driver_name,
    vehicle_license_number: valCurrent.vehicle_license_number,
    car_type: valCurrent.car_type,
    weight_type: valCurrent.weight_type,
    exported_imported: "Issued",
    status_car_one: "Empty",
    today_date_one: "",
    get_time_first: "",
    status: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (hours === 0) {
      hours = 12;
    }
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return (val.get_time_first = `(${ampm}) ${hours}:${minutes}:${seconds}`);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVal((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // const [message, setMessage] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(val);
    // try {
    //   const data = await weight.post(`/create-first-weight`, val);
    //   setMessage(data.data.message);
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <React.Fragment>
      <h1>Second Weigth</h1>
      {/* {message && <Alerts message={message} color="success" />} */}

      <CssBaseline />
      <Container maxWidth="lg">
        <Card>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ p: 5, minWidth: 470 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    type="number"
                    className="mn-weight"
                    name="car_weight_one"
                    value={val.car_weight_one}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    label="Car ID"
                    name="car_id"
                    value={val.car_id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    label="Client Name"
                    name="client_name"
                    value={val.client_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    label="Driver Name"
                    name="driver_name"
                    value={val.driver_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    label="Vehicle License Number"
                    name="vehicle_license_number"
                    value={val.vehicle_license_number}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    label="Weight Type"
                    name="weight_type"
                    value={val.weight_type}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    variant="outlined"
                    label="Car Type"
                    name="car_type"
                    value={val.car_type}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={{ width: "100%" }}
                    type="date"
                    variant="outlined"
                    name="today_date_one"
                    value={val.today_date_one}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-select-small-label">
                      Empty/Full
                    </InputLabel>
                    <Select
                      label="Empty/Full"
                      name="status_car_one"
                      value={val.status_car_one}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Empty</MenuItem>
                      <MenuItem value={20}>Full</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-select-small-label">
                      Issued/Incoming
                    </InputLabel>
                    <Select
                      label="Issued/Incoming"
                      value={val.exported_imported}
                      name="exported_imported"
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Issued</MenuItem>
                      <MenuItem value={20}>Incoming</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item style={{ margin: "auto" }}>
                  <Button type="submit" variant="contained">
                    Save Firest Weigth
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </form>
        </Card>
      </Container>
    </React.Fragment>
  );
}
