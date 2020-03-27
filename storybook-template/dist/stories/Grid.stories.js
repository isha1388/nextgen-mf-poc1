import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '../Grid/Grid';
import Typography from '@material-ui/core/Typography';
storiesOf('Grid', module)
    .add('Grid', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Grid, { container: true, wrap: "nowrap", spacing: 2 },
        React.createElement(Typography, { noWrap: true }, 'hello there!')))); });
