import * as React from 'react';
import { Table as MTable, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
var useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
export default function Table(props) {
    var classes = useStyles();
    var getTableBody = function () {
        var getData = function (row, index) { return row.map(function (val, i) { return React.createElement(TableCell, { align: "right", key: "" + i + index }, val); }); };
        var bodyRows = props.rows.map(function (row, i) { return (React.createElement(TableRow, { key: "row" + i }, getData(row, i))); });
        return (React.createElement(TableBody, null, bodyRows));
    };
    var getTableHeader = function () {
        var headerCells = props.headerRow.map(function (header, i) { return React.createElement(TableCell, { key: i }, header); });
        return (React.createElement(TableHead, null,
            React.createElement(TableRow, null, headerCells)));
    };
    return (React.createElement(TableContainer, null,
        React.createElement(MTable, { className: classes.table },
            getTableHeader(),
            getTableBody())));
}
