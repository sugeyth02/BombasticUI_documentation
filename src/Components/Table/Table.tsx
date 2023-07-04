
import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { theme } from '../../styles/theme';
import { TableWapper } from './Table.styles';


const columns = [
    {
        name: "Property",
        selector: row => row.property,
    },
    {
        name: "Description",
        selector: row => row.description,
    },
    {
        name: "Type",
        selector: row => row.type,
    },
    {
        name: "Default",
        selector: row => row.default,
    },
    {
        name: "Allowed Inputs",
        selector: row => row.allowedInputs,
    },
];

interface ITable {
    data: {
        property: string,
        description: string,
        type: string,
        default: string,
        allowedInputs: string
    }[]
}

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
    text: {
        primary: theme.colors.white,
        secondary: theme.colors.white,
    },
    background: {
        default: theme.colors.black,
    },
    divider: {
        default: theme.colors.gray,
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
    rows: {
        fontFamily: 'Montserrat'
    }
}, 'dark');
const Table = ({ data }: ITable) => {
    return (
        <TableWapper>
            <DataTable data={data} columns={columns} theme="solarized" />
        </TableWapper>
    )
}

export default Table