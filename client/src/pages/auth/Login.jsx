import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Chip, FormControl, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Alerts from "../../components/status/Alerts";
import "./style.css";
import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../../utils/context/ContextProvider";
import { _api } from "../../utils/api";
export default function Register() {
    const [info, setInfo] = useState({
        email: "",
        password: "",
    });

    const { setUser, setToken, token } = useStateContext();
    const [errors, setErrors] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo((prevValues) => ({ ...prevValues, [name]: value }));
    };
    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await _api.post("/auth/login", info);
            setUser(response.data.user);
            setToken(response.data.token);
        } catch (err) {
            const response = err.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors);
            }
        }
    }

    if (token) {
        return <Navigate to="/users" />;
    }

    const authWithGoogle = () => {
        alert('ddddd')
    }
    return (
        <Container maxWidth="sm" sx={{ mt: 10 }}>
            {errors && (
                <div className="alert">
                    {Object.keys(errors).map((key) => (
                        <Alerts
                            key={key}
                            message={errors[key][0]}
                            color="error"
                        />
                    ))}
                </div>
            )}
            <Card>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <h1 className="title">Login</h1>
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
                                <Button
                                    sx={{ mb: 2 }}
                                    type="submit"
                                    variant="contained"
                                >
                                    Contained
                                </Button>
                                <Chip
                                    label="google"
                                    color="success"
                                    variant="outlined"
                                    onClick={authWithGoogle}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl sx={{ m: 5, minWidth: 470 }}>
                                <Link to="/register">register</Link>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </Container>
    );
}
