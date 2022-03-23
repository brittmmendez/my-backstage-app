import React from 'react';
import { ItemCardHeader } from '@backstage/core-components';
import { Link } from 'react-router-dom'
import { Grid, makeStyles, Card } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
      grid: {
        gridTemplateColumns: 'repeat(auto-fill, 12em)',
      },
      h3: {
        fontSize: '1.25rem'
    },
    h4: {
        fontSize: '0.875rem'
      },
    card: {
      borderRadius: '0px',
    },  
      header1: {
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(to bottom right, #1A2C65, #4169e7)`,
        backgroundPosition: 'center',
      },
      header2: {
        backgroundSize: 'cover',
        backgroundImage: 'linear-gradient(to bottom right, #F15D31, #f69b80)',
        backgroundPosition: 'center',
      },
      header3: {
        backgroundSize: 'cover',
        backgroundImage: 'linear-gradient(to bottom right, #1B99D6, #67c6ff)',
        backgroundPosition: 'center',
      },
    }));

export const QuickLinks = () => {
    const classes = useStyles();
    return (
      <>
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.card }}>
                <Link to="/catalog">
                    <ItemCardHeader subtitle="Discover data, apps, platforms and more" title="Explore the Ecosystem" classes={{ root: classes.header1 }}/>
                </Link>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.card }}>
                <Link to="/manage">
                    <ItemCardHeader subtitle="Take care of the things you own" title="Manage & Mantain" classes={{ root: classes.header2 }}/>
                </Link>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card classes={{ root: classes.card }}>
            <Link to="/docs">
                    <ItemCardHeader subtitle="Find documentation on all P&G services" title="Docs" classes={{ root: classes.header3 }}/>
                </Link>
            </Card>
        </Grid>
    </>
  );
};