pragma solidity ^0.8;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint256 min) public {
        Campaign newCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    address payable public manager;
    uint256 public minContribution;
    uint256 public approversCount = 0;
    mapping(address => bool) public approvers;
    struct Request {
        string description;
        uint256 value;
        address payable recipent;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public request;

    constructor(uint256 minimum, address creator) {
        manager = payable(creator);
        minContribution = minimum;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    modifier checkMinimumContribution() {
        require(msg.value > minContribution);
        _;
    }

    function contribute() public payable checkMinimumContribution {
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string memory description,
        uint256 value,
        address payable recipent
    ) public restricted {
        Request storage newRequest = request.push();
        newRequest.description = description;
        newRequest.value = value;
        newRequest.recipent = recipent;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
    }

    function approveRequest(uint256 index) public {
        Request storage requestFind = request[index];
        require(approvers[msg.sender]);
        require(!requestFind.approvals[msg.sender]);
        requestFind.approvals[msg.sender] = true;
        requestFind.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        Request storage requestToFinalize = request[index];
        require(requestToFinalize.approvalCount > approversCount / 2);
        require(!requestToFinalize.complete);
        requestToFinalize.complete = true;
        requestToFinalize.recipent.transfer(requestToFinalize.value);
    }
}
