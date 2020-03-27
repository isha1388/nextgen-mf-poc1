import * as React from 'react';
import { Grid as MGrid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
export default function Grid() {
    return React.createElement(MGrid, null,
        React.createElement(Typography, { noWrap: true }, 'hello there!'));
}
