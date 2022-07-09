import React, { useEffect, useState } from 'react';
import Factory from '../ethereum/factory';

const CampaignIndex = async () => {
  const [campaigns, setCampaigns] = useState([]);
  const res = await Promise.all(Factory.methods.getDeployedCampaigns().call());
  setCampaigns(res);
  console.log(campaigns);

  // useEffect(async () => {
  //   const res = await Promise.all(Factory.methods.getDeployedCampaigns().call())
  //   .then(()=>{
  //     setCampaigns(res);
  //     console.log(campaigns);
  //   })
  //   .catch((err)=>{
  //     console.log("err");
  //   })
  // }, []);

  return (
    <div>CampaignIndex</div>
  )
}

export default CampaignIndex;