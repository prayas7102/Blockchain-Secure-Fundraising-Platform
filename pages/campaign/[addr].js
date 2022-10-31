import React from 'react';
import { useRouter } from 'next/router';
import Campaign from '../factory';
import Web3 from '../web3';
import ContributionForm from '../../components/ContributionForm';
import Layout from '../../components/Layout';
import { Card, Grid, Button } from 'semantic-ui-react';
import Link from 'next/link';

// ShowCampaign.getInitialProps = async () => {

//     const router = useRouter();
//     const { addr } = router.query;

//     const campaign = Campaign(addr);
//     const summary = await campaign.methods.getSummary().call();
//     return {
//         mininmumContribution: summary[2],
//         balance: summary[0],
//         requestCount: summary[1],
//         approversCount: summary[3],
//         manager: summary[4],
//     }
// }

async function ShowCampaign() {
    const router = useRouter();
    console.log(router)
    const campaign = Campaign(addr);
    const summary = await campaign.methods.getSummary().call();

    const items = [
        {
            header: summary[4],
            meta: 'Address of Manager',
            description: 'The manager created this campaign and can create request.',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: summary[2],
            meta: 'Minimum Contribution in Wei',
            description: 'You must contribute at least this much wei to become approver.'
        },
        {
            header: summary[1],
            meta: 'Number of Requests',
            description: 'A request tries to withdraw money, must be approved by approvers.'
        },
        {
            header: summary[3],
            meta: 'Number of Approvers',
            description: 'No. of people already donated to the campaign.'
        },
        {
            header: Web3.utils.fromWei(props.balance, 'ether'),
            meta: 'Campaign Balance (ether)',
            description: 'How much money has been left to spend by the campaign.'
        },
    ]
    return (
        <Layout>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Card.Group items={items} />
                        <Link route={`/campaign/${addr}/requests`}>
                            <a><Button primary>View Requests</Button></a>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <ContributionForm address={addr} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link route={`/campaigns/${addr}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    )
}

export default ShowCampaign;