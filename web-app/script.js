const alchemy = 'https://eth-goerli.g.alchemy.com/v2/h_Yci2S6utW1IK8XRuJMMhq4Gs5QYLs6';
const node = new ethers.providers.JsonRpcProvider(alchemy);
//node provider is only to read blockchain
//getBalance(addr);

//reading wale kaam blockchain
async function CheckBalance() {
  let addr = document.querySelector("#cbal").value;
  let balance = await node.getBalance(addr);
  let elem = document.getElementsByTagName("h5");

  if (balance > 0) {
    elem[0].innerHTML = "Total Ethers:" + ethers.utils.formatEther(balance);
  } else {
    elem[0].innerHTML = "You have no ether left";
  }
}

// here we're reading smart contract with the help of abi key; (reading wale kaam smart contract) node tab dete he jab hume sirf data read karna ho
//In reading smart contract we need (contract addr, abi , nodeprovider;)
const Cadd = "0xd52609B4D8AC3754B473B98ec352cD3f4168202D";
const ABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "PracticeContract",
  "sourceName": "contracts/practice.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transactions",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "_transfer",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102bf806100606000396000f3fe6080604052600436106100295760003560e01c80638da5cb5b1461002e578063eab0684914610059575b600080fd5b34801561003a57600080fd5b50610043610075565b604051610050919061015d565b60405180910390f35b610073600480360381019061006e91906101bb565b610099565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156100df573d6000803e3d6000fd5b507f1453812850984db1f2b46eeabd72f160272588bec840e51933254f06d5ed7ea58134604051610111929190610260565b60405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101478261011c565b9050919050565b6101578161013c565b82525050565b6000602082019050610172600083018461014e565b92915050565b600080fd5b60006101888261011c565b9050919050565b6101988161017d565b81146101a357600080fd5b50565b6000813590506101b58161018f565b92915050565b6000602082840312156101d1576101d0610178565b5b60006101df848285016101a6565b91505092915050565b6000819050919050565b600061020d6102086102038461011c565b6101e8565b61011c565b9050919050565b600061021f826101f2565b9050919050565b600061023182610214565b9050919050565b61024181610226565b82525050565b6000819050919050565b61025a81610247565b82525050565b60006040820190506102756000830185610238565b6102826020830184610251565b939250505056fea2646970667358221220b0a9bcf3e6813de048a10de3b667e7e784970a21c7a9da359c6e9769bc16195164736f6c63430008090033",
  "deployedBytecode": "0x6080604052600436106100295760003560e01c80638da5cb5b1461002e578063eab0684914610059575b600080fd5b34801561003a57600080fd5b50610043610075565b604051610050919061015d565b60405180910390f35b610073600480360381019061006e91906101bb565b610099565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156100df573d6000803e3d6000fd5b507f1453812850984db1f2b46eeabd72f160272588bec840e51933254f06d5ed7ea58134604051610111929190610260565b60405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101478261011c565b9050919050565b6101578161013c565b82525050565b6000602082019050610172600083018461014e565b92915050565b600080fd5b60006101888261011c565b9050919050565b6101988161017d565b81146101a357600080fd5b50565b6000813590506101b58161018f565b92915050565b6000602082840312156101d1576101d0610178565b5b60006101df848285016101a6565b91505092915050565b6000819050919050565b600061020d6102086102038461011c565b6101e8565b61011c565b9050919050565b600061021f826101f2565b9050919050565b600061023182610214565b9050919050565b61024181610226565b82525050565b6000819050919050565b61025a81610247565b82525050565b60006040820190506102756000830185610238565b6102826020830184610251565b939250505056fea2646970667358221220b0a9bcf3e6813de048a10de3b667e7e784970a21c7a9da359c6e9769bc16195164736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}


const code = ABI.abi;

async function getDeployer() {

  const contract = new ethers.Contract(Cadd, code, node); //creating instance of our contract
  let owneraddr = await contract.owner();
  console.log(owneraddr);
  document.getElementsByTagName("div")[0].innerHTML = "deployer:" + owneraddr;

}

//writting wale kaam   ....   signer tab dete he jab hame write karna ho
// writting wale kaam me provider ki jagah signer dete he (contract address, abi, signer)

async function transact() {
  let inp = document.querySelectorAll("input");
  let add = inp[1].value;
  let eth = inp[2].value;

  //connecting metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();


  // instance of contract
  const contract = new ethers.Contract(Cadd,code,signer);
  const contract1 = contract.connect(signer);

  const tx = await contract1._transfer(add, {  value: ethers.utils.parseEther(eth)});

  tx.wait();

  document.querySelectorAll("div")[1].innerHTML = "transaction done";
}
