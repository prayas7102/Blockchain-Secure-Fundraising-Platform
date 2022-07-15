import React from 'react';
import { useRouter } from 'next/router';

function ShowCampaign() {
    const router = useRouter();
    const { addr } = router.query;

    return <p>Post: {addr}</p>
}

export default ShowCampaign;