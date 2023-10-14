import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, FormControl, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Alerts from "../../components/status/Alerts";
import './style.css'
import { Link } from "react-router-dom";
export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevValues) => ({ ...prevValues, [name]: value }));
  };

  async function handleSubmit(ev) {
    ev.preventDefault();
    console.log(login);
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 25}}>
        <Alerts message="dsdsdsddddddddddddddd" color="error"/>
      <Card>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <h1 className="title">Login</h1>
            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, mb: 3, minWidth: 470 }}>
                <TextField
                  label="email"
                  className="input"
                  name="email"
                  variant="outlined"
                  value={login.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ ml: 5, minWidth: 470 }}>
                <TextField
                  className="input"
                  type="password"
                  name="password"
                  label="password"
                  variant="outlined"
                  value={login.password}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 5, minWidth: 470 }}>
                <Button type="submit" variant="contained">
                  Contained
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 5, minWidth: 470 }}>
                <Link to='/signup'>register</Link>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}
