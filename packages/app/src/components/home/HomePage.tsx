import Logo from '../Root/Logo'
import { HeaderSection } from './HeaderSection'
// import { HeaderSection } from './HeaderSection2'
import { Toolkit } from './Toolkit';
import { TabbedCards } from './TabbedCards';
import { TabbedCards2 } from './TabbedCards2';

import { HomePageCompanyLogo, HomePageStarredEntities } from '@backstage/plugin-home';
import { Content, Page, InfoCard } from '@backstage/core-components';
import { HomePageSearchBar, SearchContextProvider } from '@backstage/plugin-search';
import React from 'react';
import { QuickLinks } from './QuickLinks'
import { QuickLinks2 } from './QuickLinksOption2'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '5px',
    margin: 'auto',
  },
}));
  
export const HomePage = () => {
  const classes = useStyles()
  return (
    <SearchContextProvider>
        <Page themeId="home">
          <HeaderSection/>
          <Content>
            <Grid container justifyContent="center" spacing={6}>
              {/* <HomePageCompanyLogo
                logo={ <Logo width={100} /> }
              /> */}
              {/* <Grid container item xs={12} alignItems="center" direction="row">
                <HomePageSearchBar
                  classes={{ root: classes.searchBar }}
                  placeholder="Search"
                />
              </Grid> */}
              <Grid container item xs={12}>
                <Grid item xs={12} md={6}>
                  <HomePageStarredEntities title="Favorites"/>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Toolkit/>
                </Grid>
                
                {/* <QuickLinks/>
                <QuickLinks1/> */}
                <QuickLinks2/>

                <Grid item xs={12} md={6}>
                  <TabbedCards />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TabbedCards2/>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <InfoCard title="Composable Section">
                    placeholder for content
                    <div style={{ height: 255 }} />
                  </InfoCard>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <InfoCard title="Composable Section">
                    placeholder for content
                    <div style={{ height: 255 }} />
                  </InfoCard>
                </Grid>
              </Grid>
            </Grid>
          </Content>
        </Page>
    </SearchContextProvider>
  );
};