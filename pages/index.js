import React, { useEffect, useState } from 'react';
import Factory from './factory';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Card, Button } from 'semantic-ui-react';

const CampaignIndex = ({ props }) => {
  const items = props.map((addr) => {
    return {
      header: addr,
      description: <Link href={`/campaign/?addr=${addr}`}><a>View Campaign</a></Link>,
      fluid: true
    };
  });

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Button
          floated="right"
          content="Create Campaign"
          icon="add circle"
          primary
        />
        <Card.Group items={items} />
      </div>
    </Layout>
  )
}

CampaignIndex.getInitialProps = async () => {
  const res = await (Factory.methods.getDeployedCampaigns().call());
  return { props: res }
}

export default CampaignIndex;