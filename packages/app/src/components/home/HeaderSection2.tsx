import React from 'react';
import { HeaderWorldClock } from '@backstage/plugin-home';
import  {useUserProfile}  from '@backstage/plugin-user-settings';
import { Header } from '@backstage/core-components';
  
export const HeaderSection = () => {
  return (
    <Header title={`Welcome ${useUserProfile().displayName}`}  subtitle="Let's build together.">
      <HeaderWorldClock clockConfigs={[{
        "label":"NYC",
        "timeZone":"EST"
      }]}/>
      <HeaderWorldClock clockConfigs={[{
        "label":"UTC",
        "timeZone":"UTC"
      }]}/>
      <HeaderWorldClock clockConfigs={[{
        "label":"LDN",
        "timeZone":"GMT"
      }]}/>
      <HeaderWorldClock clockConfigs={[{
        "label":"STO",
        "timeZone":"GMT"
      }]}/>
    </Header>
  );
};