import React, { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../ethereum/factory';
import web3 from '../ethereum/Web3';
import { useRouter } from 'next/router';

function ContributionForm({ props }) {

    const [state, setState] = useState({
        value: '',
        errMssg: '',
        loading: false
    });
    const router = useRouter();
    const submitMinContribution = async (event) => {
        event.preventDefault();
        const campaign = Campaign(props.address);
        setState({ loading: true });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(state.value, 'ether')
            });
            router.push(`/campaign/${props.address}`);
        } catch (err) {

        }
        setState({ loading: true, value: '' });
    }

    return (
        <Form onSubmit={submitMinContribution} error={!!state.errMssg}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    label="wei"
                    labelPosition="right"
                    value={contribution.minContribution}
                    onChange={(e) => {
                        setState({ value: e.target.value })
                    }}
                />
            </Form.Field>
            <Message error header="OOps" content={state.errMssg} />
            <Button primary loading={state.loading}>Contribute!</Button>
        </Form>
    )
}

export default ContributionForm;