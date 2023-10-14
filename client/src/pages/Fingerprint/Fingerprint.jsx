// import "./styles.css";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Button, Table } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";
export default function Fingerprint() {


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }));

const [presence, suePresence] = useState('')
const [departure, sueDeparture] = useState('')
const [absence, sueAbsence] = useState('')
function PresenceTime () {
        const now = new Date();
        let hours = now.getHours();
        let ampm = "am";
        if (hours >= 12) {
          ampm = "pm";
          if (hours > 12) {
            hours -= 12;
          }
        }
        if (hours === 0) {
          hours = 12;
        }
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        suePresence(`(${ampm}) ${hours}:${minutes}:${seconds}`)
}
function DepartureTime () {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "am";
    if (hours >= 12) {
      ampm = "pm";
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (hours === 0) {
      hours = 12;
    }
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    sueDeparture(`(${ampm}) ${hours}:${minutes}:${seconds}`)
}
function AbsenceTime () {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "am";
    if (hours >= 12) {
      ampm = "pm";
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (hours === 0) {
      hours = 12;
    }
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    sueAbsence(`(${ampm}) ${hours}:${minutes}:${seconds}`)
}
    return <>
    <Container maxWidth="fixed">
        {presence} , {departure} , {absence}
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Absence</StyledTableCell>
                <StyledTableCell align="right">Departure</StyledTableCell>
                <StyledTableCell align="right">Presence</StyledTableCell>
                <StyledTableCell align="right">employee name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <StyledTableRow>
                <StyledTableCell align="right">
                  <Button onClick={AbsenceTime} variant="outlined" color="error">Absence</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <Button onClick={DepartureTime} variant="outlined">Departure</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <Button onClick={PresenceTime} variant="outlined">Presence</Button>
                  </StyledTableCell>
                  <StyledTableCell  align="right">Tech Village</StyledTableCell>
                </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* </FormControl> */}
      </Container>

    </>;
}
