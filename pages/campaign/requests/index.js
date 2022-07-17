import React from 'react'
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Button, Table, Body } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

ShowCampaign.getInitialProps = async () => {
  const router = useRouter();
  const { address } = router.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const requests = await Promise.all(
    Array(requestCount).fill().map((ele, index) => {
      return campaign.methods.requests(index).call();
    })
  );
  return {
    address, requests, requestCount
  }
}

function RequestIndex(props) {
  return (
    <div>
      <Layout>
        <h3>Requests</h3>
        <Link href={`/campaign/${props.address}/requests`}>
          <a>
            <Button primary floated='right' style={{ marginBottom: 10 }}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.props.requests.map((req, i) => {
              return (
                <RequestRow
                  id={i}
                  key={i}
                  request={req}
                  address={props.address}
                />
              )
            })}
          </Body>
        </Table>
        <div>Found {props.requestCount} requests.</div>
      </Layout>
    </div>
  )
}

export default RequestIndex;