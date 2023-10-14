import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, FormControl, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Alerts from "../../components/status/Alerts";
import './style.css'
import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
import useAuthContext from "../../context/AuthContext";
export default function Register() {

  const [info , setInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const { register } = useAuthContext()
  async function handleSubmit(ev) {
    ev.preventDefault();
    register(info)
  }


  return (
    <Container maxWidth="sm" sx={{ mt: 10}}>
        <Alerts message="dsdsdsddddddddddddddd" color="error"/>
      <Card>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <h1 className="title">Register</h1>
            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, mb: 2, minWidth: 470 }}>
                <TextField
                  label="Enter Your Name"
                  name="name"
                  variant="outlined"
                  value={info.name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, mb: 2, minWidth: 470 }}>
                <TextField
                  label="Enter Yuer E-mail"
                  name="email"
                  variant="outlined"
                  value={info.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, mb: 2, minWidth: 470 }}>
                <TextField
                  label="Enter Yuer Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  value={info.password}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, mb: 2, minWidth: 470 }}>
                <TextField
                  label="Password Confirmation"
                  name="password_confirmation"
                  type="password"
                  variant="outlined"
                  value={info.password_confirmation}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, mb: 2, minWidth: 470 }}>
                <Button type="submit" variant="contained">
                  Contained
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 5, minWidth: 470 }}>
                <Link to='/login'>Login</Link>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}
