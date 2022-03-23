import comingsoon from './comingsoon.png';
  import { Page, Header } from '@backstage/core-components';
  import React from 'react';
  
  export const ManagePage = () => {
    return (
      <Page themeId="tool">
        <Header title="Manage"  subtitle="Take care of the things you own"/>
          <img src={comingsoon} style={{ width: '102%' }}/>
      </Page>
    );
  };