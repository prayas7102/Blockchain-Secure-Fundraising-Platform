import React, { useState } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/Layout';

RequestNew.getInitialProps = () => {
    const router = useRouter();
    const { address } = router.query;
    return {
        address
    }
}

async function RequestNew({ props }) {
    const [state, setState] = useState({
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    });
    const router = useRouter();

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(props.address);
        const { description, value, recipient } = state;

        setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
                .send({ from: accounts[0] });

            router.push(`/campaign/${props.address}/requests`);
        } catch (err) {
            setState({ errorMessage: err.message });
        }

        setState({ loading: false });
    };

    return (
        <Layout>
            <Link route={`/campaigns/${props.address}/requests`}>
                <a>Back</a>
            </Link>
            <h3>Create a Request</h3>
            <Form onSubmit={onSubmit} error={!!state.errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input
                        value={state.description}
                        onChange={event =>
                            setState({ description: event.target.value })}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Value in Ether</label>
                    <Input
                        value={state.value}
                        onChange={event => setState({ value: event.target.value })}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={state.recipient}
                        onChange={event =>
                            setState({ recipient: event.target.value })}
                    />
                </Form.Field>
                <Message error header="Oops!" content={state.errorMessage} />
                <Button primary loading={state.loading}>
                    Create!
                </Button>
            </Form>
        </Layout>
    );
}

export default RequestNew;