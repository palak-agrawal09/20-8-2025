//1. Import area
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../helper/helper';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
//2. Functioned defination

const DynamicTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    // Get column names dynamically from the keys of the first object
    const columns = Object.keys(data[0]);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={col} sx={{ fontWeight: "bold" }}>
                                {col.toUpperCase()}

                            </TableCell>
                        ))}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((col) => (
                                <TableCell key={col}>{row[col]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


const sampleData = [
    { name: "beauty&Spa", city: "neemuch", Review: "8" },
    { name: "Wedding plans", city: "udipur", Review: "9" },
    { name: "Hotels", city: "neemuch", Review: "6" },
    { name: "Education", city: "ajmer", Review: "10" },
];

export default function BusinessCategory() {
    //2.1 Hook area
    const [BusinessCategory, setBusinessCategory] = useState([]);
    useEffect(() => {
        //call the api
        try {
            //po.then().then().catch().finally()
            axios.get(`${BASE_URL}/api/buisness-categories`)
                .then(function (response) {
                    // handle success
                    console.log(response?.data?.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        } catch (error) {

        }
    }, []);

    //2.2

    //2.3 Return statement
    return (
        <div style={{ padding: "20px" }}>
            <h2>Acessories</h2>
            <DynamicTable data={sampleData} />
        </div>
    );
}



