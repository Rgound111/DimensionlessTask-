import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('ERU', 'The Euro has steadied against the US Doller on Thursday as the market ponders the path of the fed rate hikes', 1, 'Neutral', 'High'),
    createData('INR', 'The Euro has steadied against the US Doller on Thursday as the market ponders the path of the fed rate hikes', 1, 'High', 'High'),
    createData('CAD', 'The Euro has steadied against the US Doller on Thursday as the market ponders the path of the fed rate hikes', 1, "Medium", 'High'),
    createData('CAD', 'The Euro has steadied against the US Doller on Thursday as the market ponders the path of the fed rate hikes', 1, 'Low', 'High'),
    createData('OIL', 'The Euro has steadied against the US Doller on Thursday as the market ponders the path of the fed rate hikes', 1, 'Neutral', 'High'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <span className='font-semibold p-2'>Refined News & Data Flow</span>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell align="left">News</TableCell>
                        <TableCell align="right">Score</TableCell>
                        <TableCell align="right">Impact</TableCell>
                        <TableCell align="right">Probability</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="right">+{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}