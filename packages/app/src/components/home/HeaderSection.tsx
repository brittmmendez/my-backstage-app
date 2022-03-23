import React from 'react';
import  {useUserProfile}  from '@backstage/plugin-user-settings';
import { Header } from '@backstage/core-components';
import Lines from './Lines.png';
import Lines2 from './Lines2.png';

const headerSectionBackground2 = {
  background: `url(${Lines}) 100% 90px no-repeat fixed, url(${Lines2}) left 90px no-repeat fixed #1A2C65`,
  height: '300px',
  padding: '50px',
  textAlign: 'center',
}
  

export const HeaderSection = () => {
  return (
    <Header style={headerSectionBackground2} title={`Welcome ${useUserProfile().displayName}. Let's Build Together!`} subtitle="P&G's Developer Portal"/>  
  );
};