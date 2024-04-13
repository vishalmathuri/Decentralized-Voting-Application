// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Structure to represent a candidate
    struct Candidate {
        string name;
        uint256 voteCount;
    }
    
    // Structure to represent an election
    struct Election {
        string name;
        bool isActive;
        mapping(address => bool) hasVoted;
        mapping(uint256 => Candidate) candidates;
        uint256 candidateCount;
    }

    // Mapping to store elections
    mapping(uint256 => Election) public elections;
    uint256 public electionCount;

    // Event to log when a new election is created
    event ElectionCreated(uint256 indexed electionId, string name);

    // Modifier to check if an election is active
    modifier onlyActive(uint256 _electionId) {
        require(elections[_electionId].isActive, "Election is not active");
        _;
    }

    // Function to create a new election
    function createElection(string memory _name) public {
        uint256 electionId = electionCount++;
        elections[electionId].name = _name;
        elections[electionId].isActive = true;
        emit ElectionCreated(electionId, _name);
    }

    // Function to register a candidate for an election
    function registerCandidate(uint256 _electionId, string memory _name) public onlyActive(_electionId) {
        require(bytes(_name).length > 0, "Candidate name cannot be empty");
        Election storage election = elections[_electionId];
        uint256 candidateId = election.candidateCount++;
        election.candidates[candidateId] = Candidate(_name, 0);
    }

    // Function to cast a vote for a candidate in an election
    function vote(uint256 _electionId, uint256 _candidateId) public onlyActive(_electionId) {
        Election storage election = elections[_electionId];
        require(!election.hasVoted[msg.sender], "You have already voted in this election");
        require(_candidateId < election.candidateCount, "Invalid candidate ID");

        election.candidates[_candidateId].voteCount++;
        election.hasVoted[msg.sender] = true;
    }

    // Function to get the total vote count for a candidate in an election
    function getVoteCount(uint256 _electionId, uint256 _candidateId) public view returns (uint256) {
        return elections[_electionId].candidates[_candidateId].voteCount;
    }
}
