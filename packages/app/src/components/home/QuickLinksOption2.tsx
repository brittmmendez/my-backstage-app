import React from 'react';
import { ItemCardHeader } from '@backstage/core-components';
import { Link } from 'react-router-dom'
import { Grid, makeStyles, Card } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
    grid: {
      gridTemplateColumns: 'repeat(auto-fill, 12em)',
    },
    card: {
      borderRadius: '0px',
    },  
    header: {
      background: 'white',
      color: theme.palette.primary.main,
      "&:hover": {
        color: 'white',
        background: theme.palette.primary.main,
      },
    },
    
  }));

const linkBackground = {
  padding: '5px',
  border: '0',
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  background: "linear-gradient(50deg, #1B99D6 45%, #e65300 40%)",
}


export const QuickLinks2 = () => {
    const classes = useStyles();
    return (
      <>
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.card }}>
                <Link to="/catalog" style={linkBackground}>
                    <ItemCardHeader subtitle="Discover data, apps, platforms and more" title='Explore the Ecosystem' classes={{ root: classes.header }}/>
                </Link>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.card }}>
                <Link to="/manage" style={linkBackground}>
                    <ItemCardHeader subtitle="Take care of the things you own" title="Manage & Mantain" classes={{ root: classes.header }}/>
                </Link>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card classes={{ root: classes.card }}>
            <Link to="/docs" style={linkBackground}>
                    <ItemCardHeader subtitle="Find documentation on all P&G services" title="Docs" classes={{ root: classes.header }}/>
                </Link>
            </Card>
        </Grid>
    </>
  );
};