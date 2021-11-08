import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom'

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

export default function CustomizedTables(props) {
  const data = props.contracts;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Seller</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">View</StyledTableCell>
          </TableRow> 
        </TableHead>
        <TableBody> 
          {data.map((row) => (
            <StyledTableRow key={row[0]}>
              <StyledTableCell component="th" scope="row">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.seller}</StyledTableCell>
              <StyledTableCell align="right">{row.grade}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                {row.status === 1 ? "Accepted" : "Pending"}
              </StyledTableCell>
              <StyledTableCell align="right"><Link to={{ pathname: `/client/viewcontract/${row._id}`, }}><button>View</button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}