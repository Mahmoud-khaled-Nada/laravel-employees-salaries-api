import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Chip, Table } from "@mui/material";
import "./styles.css";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { weight } from "../../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alerts from "../../components/status/Alerts";
// Start with the default function FirestWeigth ===============>>
export default function CompleteWeight() {
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

  const [rows, setRows] = useState([]);
  const [message , setMessage] = useState('')
  async function getData() {
    try {
      const data = await weight.get(`/get-first-weight`);
      setRows(data.data.weight);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function isDelete(id) {
    const data = await weight.delete(`/delete-first-weight/${id}`);
    setMessage(data.data.message)
    getData();
  }
  return (
    <React.Fragment>
      {message && <Alerts message={message} color="success" /> }
      <CssBaseline />
      <Container maxWidth="fixed">
        {/* <FormControl sx={{ p: 5 }}> */}
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">#</StyledTableCell>
                <StyledTableCell align="right">رقم الشاحنه</StyledTableCell>
                <StyledTableCell align="right">أسم العميل</StyledTableCell>
                <StyledTableCell align="right">أسم السأق</StyledTableCell>
                <StyledTableCell align="right">الصنف</StyledTableCell>
                <StyledTableCell align="right">نوع السيارة</StyledTableCell>
                <StyledTableCell align="right">التاريخ</StyledTableCell>
                <StyledTableCell align="right">الوقت</StyledTableCell>
                <StyledTableCell align="right">صادر & وارد</StyledTableCell>
                <StyledTableCell align="right">اكمال الوزنه</StyledTableCell>
                <StyledTableCell align="right">حذف الوزنه</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.car_id}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.client_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.driver_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.weight_type}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.car_type}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.today_date_one}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.get_time_first}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.exported_imported}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to={`/second-weigth/${row.id}`}>
                      <Chip label="complete weight" color="success" />
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <Chip label="delete" color="error" onClick={() => isDelete(row.id)} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </FormControl> */}
      </Container>
    </React.Fragment>
  );
}
