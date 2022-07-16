import React from 'react'
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Button, Form, Input, Message } from 'semantic-ui-react';

ShowCampaign.getInitialProps = async () => {
  const router = useRouter();
  const { address } = router.query;
  return {
    address
  }
}

function RequestIndex(props) {
  return (
    <div>
      <Layout>
        <Link href={`/campaign/${props.address}/requests`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    </div>
  )
}

export default RequestIndex