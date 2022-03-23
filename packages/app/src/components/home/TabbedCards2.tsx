import React from 'react';
import { CardTab, TabbedCard } from '@backstage/core-components';

const cardContentStyle = { height: 200 };
const linkInfo = { title: 'Explore Best Practices and Recomendations', link: '/docs' };

export const TabbedCards2 = () => {
  return (
    <TabbedCard title="P&G Best Practices" deepLink={linkInfo}>
      <CardTab label="Data">
        <div style={cardContentStyle}>Some content</div>
      </CardTab>
      <CardTab label="Backend">
        <div style={cardContentStyle}>Some content 2</div>
      </CardTab>
      <CardTab label="Client">
        <div style={cardContentStyle}>Some content 3</div>
      </CardTab>
      <CardTab label="Machine Learning">
        <div style={cardContentStyle}>Some content 4</div>
      </CardTab>
    </TabbedCard>
  );
};