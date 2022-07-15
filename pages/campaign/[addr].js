import React from 'react';
import { useRouter } from 'next/router';
import Campaign from '../../ethereum/factory';

ShowCampaign.getInitialProps = async () => {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return { 
        mininmumContribution: summary[2], 
        balance: summary[0], 
        requestCount: summary[1], 
        approversCount: summary[3], 
        manager: summary[4], 
    }
}

function ShowCampaign(props) {
    const router = useRouter();
    const { addr } = router.query;

    return <p>Post: {addr}</p>
}

export default ShowCampaign;