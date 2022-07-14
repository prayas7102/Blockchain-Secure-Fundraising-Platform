import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { useRouter } from 'next/router'

function New() {
  const [contribution, setContribution] = useState(
    {
      minContribution: '',
      errMssg: '',
      loading: false
    });

  const router = useRouter();

  const submitMinContribution = async (event) => {

    event.preventDefault();
    setContribution({ loading: true, errMssg: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      // console.log(web3.eth.currentProvider)
      await Factory.methods.createCampaign(contribution.minContribution)
        .send({ from: accounts[0] })
        router.push('/');  
    }

    catch (err) {
      setContribution({ errMssg: err.message });
    }
  }

  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form onSubmit={submitMinContribution} error={!!contribution.errMssg}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            placeholder='Minimum Contribution'
            value={contribution.minContribution}
            onChange={(e) => {
              setContribution({ minContribution: e.target.value })
            }}
          />
        </Form.Field>
        <Message error header="Oops!" content={contribution.errMssg} />
        <Button type='submit' loading={contribution.loading} primary>Create</Button>
      </Form>
    </Layout>
  )
}

export default New;