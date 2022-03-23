import Logo from '../Root/Logo';
import { HomePageToolkit } from '@backstage/plugin-home';
import { InfoCard } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';
import { ComponentAccordion } from '@backstage/plugin-home';
import AppsIcon from '@material-ui/icons/Apps';
import ExtensionIcon from '@material-ui/icons/Extension';
import PeopleIcon from '@material-ui/icons/People';
// import { Icon } from '@grafana/ui';

export const Toolkit = () => {
  const ExpandedComponentAccordion = (props: any) => (
      <ComponentAccordion expanded {...props} />
  );
  
  return (
    <InfoCard title="Toolkit" noPadding>
      <Grid item>
        <HomePageToolkit
          title="General"
          tools={[
            {
              url: 'docs',
              label: 'Getting Started',
              icon: <AppsIcon />,
            },
            {
              url: 'manage',
              label: 'Tech Insights',
              icon: <img src="https://e7.pngegg.com/pngimages/607/560/png-clipart-logo-grafana-ansible-kubernetes-blood-pressure-love-miscellaneous-thumbnail.png" style={{width: "41px"}}/>
            },
            {
              url: 'catalog/default/group?filters%5Bkind%5D=group&filters%5Buser%5D=all',
              label: 'Groups',
              icon: <PeopleIcon />,
            },
            {
              url: 'https://grafana.com/auth/sign-in/?plcmt=top-nav&cta=myaccount',
              label: 'Grafana',
              icon: <img src="https://www.clipartmax.com/png/small/450-4503037_grafana-prometheus-grafana-logo.png" style={{width: "41px"}}/>
            },
            {
              url: 'https://ui.honeycomb.io/login',
              label: 'Honeycomb',
              icon: <img src="https://www.honeycomb.io/wp-content/uploads/2021/12/android-chrome-512x512-1.png" style={{width: "41px"}}/>
            },
            {
              url: 'https://aws.amazon.com/',
              label: 'AWS',
              icon: <img src="https://icon2.cleanpng.com/20190301/yzq/kisspng-clip-art-logo-yellow-brand-line-aws-logo-transparent-amp-png-clipart-free-downlo-5c7940609561c1.1816411215514502086119.jpg" style={{width: "41px"}}/>
            },
            {
              url: 'https://cloud.google.com/docs',
              label: 'GCP',
              icon: <img src="https://www.pinpng.com/pngs/m/17-170783_google-cloud-icon-logo-large-192px-color-google.png" style={{width: "41px"}}/>
            },
            {
              url: 'https://login.microsoftonline.com/',
              label: 'Azure',
              icon: <img src="https://www.pinclipart.com/picdir/middle/519-5198040_colorlib-template-microsoft-azure-cloud-icon-clipart.png" style={{width: "41px"}}/>
            },
          ]}
          Renderer={ExpandedComponentAccordion}
        />
        <HomePageToolkit
          title="Data"
          tools={[
            {
              url: 'hello',
              label: 'Getting Started',
              icon: <AppsIcon />,
            },
            {
              url: 'hello',
              label: 'Grafana',
              icon: <img src="https://e7.pngegg.com/pngimages/607/560/png-clipart-logo-grafana-ansible-kubernetes-blood-pressure-love-miscellaneous-thumbnail.png" style={{width: "41px"}}/>
            },
            {
              url: 'hello',
              label: 'Honeycomb',
              icon: <img src="https://www.honeycomb.io/wp-content/uploads/2021/12/android-chrome-512x512-1.png" style={{width: "41px"}}/>
            },
            {
              url: 'hello',
              label: 'AWS',
              icon: <Logo />,
            },
            {
              url: 'hello',
              label: 'GCP',
              icon: <Logo />,
            },
            {
              url: 'hello',
              label: 'Azure',
              icon: <Logo />,
            },
          ]}
          Renderer={ComponentAccordion}
        />
        <HomePageToolkit
          title="Backend"
          tools={Array(2).fill({
            url: '#',
            label: 'link',
            icon: <Logo />,
          })}
          Renderer={ComponentAccordion}
        />
        <HomePageToolkit
          title="Client"
          tools={Array(2).fill({
          url: '#',
          label: 'link',
          icon: <Logo />,
          })}
          Renderer={ComponentAccordion}
        />
        <HomePageToolkit
          title="Machine Learning"
          tools={Array(2).fill({
          url: '#',
          label: 'link',
          icon: <Logo />,
          })}
          Renderer={ComponentAccordion}
        />
      </Grid>
    </InfoCard>
  );
};