import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Card, FormControl, Grid, TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
// import Alerts from "../../components/status/Alerts";
export default function ToDayReporte() {
    const blue = {
        100: "#DAECFF",
        200: "#b6daff",
        400: "#3399FF",
        500: "#007FFF",
        600: "#0072E5",
        900: "#003A75",
    };

    const grey = {
        50: "#f6f8fa",
        100: "#eaeef2",
        200: "#d0d7de",
        300: "#afb8c1",
        400: "#8c959f",
        500: "#6e7781",
        600: "#57606a",
        700: "#424a53",
        800: "#32383f",
        900: "#24292f",
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
            theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
            theme.palette.mode === "dark" ? grey[900] : grey[50]
        };

        &:hover {
          border-color: ${blue[400]};
        }

        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
              theme.palette.mode === "dark" ? blue[500] : blue[200]
          };
        }

        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
    );

    return (
        <React.Fragment>
            {/* {message && <Alerts message={message} color="success" />} */}

            <CssBaseline />
            <Container maxWidth="lg">
                <Card>
                    <form>
                        <FormControl sx={{ p: 5, minWidth: 470 }}>
                            <h1>Reports</h1>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        style={{ width: "100%" }}
                                        label=""
                                        variant="outlined"
                                        value="employee name"
                                        readonly
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        style={{ width: "100%" }}
                                        variant="outlined"
                                        value="2"
                                        // label="houer"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        style={{ width: "100%" }}
                                        variant="outlined"
                                        // label="Date"
                                        value="25/2/2023"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        style={{ width: "100%" }}
                                        variant="outlined"
                                        value="project name"
                                        // label=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextarea
                                        aria-label="minimum height"
                                        minRows={6}
                                        minCols={10}
                                        placeholder="Report description"
                                    />
                                </Grid>

                                <Grid item style={{ margin: "auto" }}>
                                    <Button type="submit" variant="contained">
                                        Save Report
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