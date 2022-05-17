import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios'
const CustomerSatellites = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://isro.vercel.app/api/customer_satellites")
            .then((res) => {
                console.log(res.data.customer_satellites);
                setData(res.data.customer_satellites);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

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
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <div style={{padding:"6%"}}>
            <h1>CUSTOMER SATELITES :</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Country</StyledTableCell>
                            <StyledTableCell align="right">Launch Date</StyledTableCell>
                            <StyledTableCell align="right">Mass</StyledTableCell>
                            <StyledTableCell align="right">Launcher</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                {row.country}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.launch_date}</StyledTableCell>
                                <StyledTableCell align="right">{row.mass}</StyledTableCell>
                                <StyledTableCell align="right">{row.launcher}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CustomerSatellites