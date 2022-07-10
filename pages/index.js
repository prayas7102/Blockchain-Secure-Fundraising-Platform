import React, { useEffect, useState } from 'react';
import Factory from '../ethereum/factory';
const res = null;
const CampaignIndex = () => {

  useEffect(() => {
    async function getCampaign(){
      res = await Factory.methods.getDeployedCampaigns().call();
      console.log(res);
    }
    getCampaign();
  }, []);

  return (
    <div>CampaignIndex {res}</div>
  )
}

export default CampaignIndex;