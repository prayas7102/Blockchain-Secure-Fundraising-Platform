import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import Factory from '../../ethereum/factory';

function New() {
  const [minContribution, setMinContribution] = useState(0);
  submitMinContribution = (event) => {
    event.preventDefault();
    await Factory.methods.createCampaign(minContribution)
    // .send({from})
  }
  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form onSubmit={submitMinContribution}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            placeholder='Minimum Contribution'
            value={minContribution}
            onChange={(e) => {
              setMinContribution(e.target.value)
            }}
          />
        </Form.Field>
        <Button type='submit' primary>Submit</Button>
      </Form>
    </Layout>
  )
}

export default New;