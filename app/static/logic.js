async function newSmartContract(information,address){
    var web3 = new Web3('HTTP://127.0.0.1:7545');
    console.log(web3);
    const abi = [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_father",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "_mother",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "_information",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "bytes32",
                                "name": "_information",
                                "type": "bytes32"
                            },
                            {
                                "indexed": false,
                                "internalType": "address",
                                "name": "updatedBy",
                                "type": "address"
                            }
                        ],
                        "name": "OriginUpdated",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "father",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "_father",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "_mother",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "_information",
                                "type": "string"
                            }
                        ],
                        "name": "getMyInformation",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getfather",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getmother",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "mother",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
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
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_owner",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "_information",
                                "type": "string"
                            }
                        ],
                        "name": "updateinformation",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ];
    var bytecode = '60c060405234801562000010575f80fd5b5060405162000d5c38038062000d5c833981810160405281019062000036919062000301565b335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505033838383604051602001620000f6949392919062000410565b6040516020818303038152906040528051906020012060018190555050505062000461565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f62000157826200012c565b9050919050565b62000169816200014b565b811462000174575f80fd5b50565b5f8151905062000187816200015e565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b620001dd8262000195565b810181811067ffffffffffffffff82111715620001ff57620001fe620001a5565b5b80604052505050565b5f620002136200011b565b9050620002218282620001d2565b919050565b5f67ffffffffffffffff821115620002435762000242620001a5565b5b6200024e8262000195565b9050602081019050919050565b5f5b838110156200027a5780820151818401526020810190506200025d565b5f8484015250505050565b5f6200029b620002958462000226565b62000208565b905082815260208101848484011115620002ba57620002b962000191565b5b620002c78482856200025b565b509392505050565b5f82601f830112620002e657620002e56200018d565b5b8151620002f884826020860162000285565b91505092915050565b5f805f606084860312156200031b576200031a62000124565b5b5f6200032a8682870162000177565b93505060206200033d8682870162000177565b925050604084015167ffffffffffffffff81111562000361576200036062000128565b5b6200036f86828701620002cf565b9150509250925092565b5f8160601b9050919050565b5f620003918262000379565b9050919050565b5f620003a48262000385565b9050919050565b620003c0620003ba826200014b565b62000398565b82525050565b5f81519050919050565b5f81905092915050565b5f620003e682620003c6565b620003f28185620003d0565b9350620004048185602086016200025b565b80840191505092915050565b5f6200041d8287620003ab565b6014820191506200042f8286620003ab565b601482019150620004418285620003ab565b601482019150620004538284620003da565b915081905095945050505050565b60805160a0516108bd6200049f5f395f81816101880152818161025d01526103b201525f81816101630152818161023c015261038c01526108bd5ff3fe608060405234801561000f575f80fd5b506004361061007b575f3560e01c80638da5cb5b116100595780638da5cb5b146100d7578063b6098e33146100f5578063ed4660e614610125578063ed7dfee3146101435761007b565b80631c8aca3b1461007f5780633878f6781461009d5780636686bc9e146100bb575b5f80fd5b610087610161565b6040516100949190610413565b60405180910390f35b6100a5610185565b6040516100b29190610413565b60405180910390f35b6100d560048036038101906100d091906105a3565b6101ac565b005b6100df61032a565b6040516100ec9190610413565b60405180910390f35b61010f600480360381019061010a91906105fd565b61034d565b60405161011c9190610697565b60405180910390f35b61012d610389565b60405161013a9190610413565b60405180910390f35b61014b6103b0565b6040516101589190610413565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610239576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023090610730565b60405180910390fd5b817f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360405160200161029094939291906107ff565b60405160208183030381529060405280519060200120600181905550815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f926787ed06077e08622ca5cc6b1bf609643af99966d762f4ef3e4ba3126b13326001543360405161031e929190610860565b60405180910390a15050565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f8484848460405160200161036594939291906107ff565b60405160208183030381529060405280519060200120600154149050949350505050565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103fd826103d4565b9050919050565b61040d816103f3565b82525050565b5f6020820190506104265f830184610404565b92915050565b5f604051905090565b5f80fd5b5f80fd5b610446816103f3565b8114610450575f80fd5b50565b5f813590506104618161043d565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104b58261046f565b810181811067ffffffffffffffff821117156104d4576104d361047f565b5b80604052505050565b5f6104e661042c565b90506104f282826104ac565b919050565b5f67ffffffffffffffff8211156105115761051061047f565b5b61051a8261046f565b9050602081019050919050565b828183375f83830152505050565b5f610547610542846104f7565b6104dd565b9050828152602081018484840111156105635761056261046b565b5b61056e848285610527565b509392505050565b5f82601f83011261058a57610589610467565b5b813561059a848260208601610535565b91505092915050565b5f80604083850312156105b9576105b8610435565b5b5f6105c685828601610453565b925050602083013567ffffffffffffffff8111156105e7576105e6610439565b5b6105f385828601610576565b9150509250929050565b5f805f806080858703121561061557610614610435565b5b5f61062287828801610453565b945050602061063387828801610453565b935050604061064487828801610453565b925050606085013567ffffffffffffffff81111561066557610664610439565b5b61067187828801610576565b91505092959194509250565b5f8115159050919050565b6106918161067d565b82525050565b5f6020820190506106aa5f830184610688565b92915050565b5f82825260208201905092915050565b7f4f6e6c7920746865206f776e65722063616e20706572666f726d2074686973205f8201527f616374696f6e0000000000000000000000000000000000000000000000000000602082015250565b5f61071a6026836106b0565b9150610725826106c0565b604082019050919050565b5f6020820190508181035f8301526107478161070e565b9050919050565b5f8160601b9050919050565b5f6107648261074e565b9050919050565b5f6107758261075a565b9050919050565b61078d610788826103f3565b61076b565b82525050565b5f81519050919050565b5f81905092915050565b5f5b838110156107c45780820151818401526020810190506107a9565b5f8484015250505050565b5f6107d982610793565b6107e3818561079d565b93506107f38185602086016107a7565b80840191505092915050565b5f61080a828761077c565b60148201915061081a828661077c565b60148201915061082a828561077c565b60148201915061083a82846107cf565b915081905095945050505050565b5f819050919050565b61085a81610848565b82525050565b5f6040820190506108735f830185610851565b6108806020830184610404565b939250505056fea264697066735822122059dc0c4db7c6478b761d996db117a418cd3eabb017e94ec875d67df61ebe185c64736f6c63430008160033';
    // thông tin cân thiết lập
    const father = '0x1234567890123456789012345678901234567890';
    const mother = '0x1234562345678901234789015678901234567890';
    ///////////////////////
    const deploy = async () => {
        const accounts = await web3.eth.getAccounts();
        // Thực hiện triển khai hợp đồng
        const deployedContract = await contract
            .deploy({ data: bytecode, arguments: [father,mother,information] })
            .send({ from: address, gas: '1000000' });

        console.log('Contract deployed to:', deployedContract.options.address);
    };
    deploy();
}
function interfaceSmartContract(){
    const Web3 = require('web3');
    const fs = require('fs');
    const web3 = new Web3('http://localhost:8545');
    const contractSourceCode = fs.readFileSync('thucung.sol', 'utf-8');
    const contractCompiled = web3.eth.compileSolidity(contractSourceCode);
    const contractABI = contractCompiled.SimpleStorage.info.abiDefinition;
    // dữ liệu cần điền vào
    const contractAddress = "00000000000000000000";
    ///////////////////////
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    /////một sô methods thông hợp đồng
    contract.methods.getMyInformation().call()
    .then(result => {
        // thông tin cần điều chỉnh
        console.log('Result from the contract:', result);
    })
    .catch(error => {
        console.error('Error calling the contract method:', error);
    });
    //
    contract.methods.getmother().call()
    .then(result => {
        // thông tin cần điều chỉnh
        console.log('Result from the contract:', result);
    })
    .catch(error => {
        console.error('Error calling the contract method:', error);
    });
    //
    contract.methods.getfather().call()
    .then(result => {
        // thông tin cần điều chỉnh
        console.log('Result from the contract:', result);
    })
    .catch(error => {
        console.error('Error calling the contract method:', error);
    });
    //thông tin cần cung cấp
    const owner = "00000000000000000000";
    const information = "afasdddddddd";
    /////
    contract.methods.updateinformation(owner,information).call()
    .then(result => {
        // thông tin cần điều chỉnh
        console.log('Result from the contract:', result);
    })
    .catch(error => {
        console.error('Error calling the contract method:', error);
    });
}
function sendPostRequest(value) {
    // Tạo dữ liệu JSON từ các trường input
    var data = {
        idmetamaxk: value
    };

    // Gửi POST request
    fetch('/connectedMetaMask/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response_data => {
        // Xử lý dữ liệu từ response
        console.log("da ket noi:"+response_data);
    })
    .catch(error => {
        // Xử lý lỗi
        console.error('Error:', response_data);
    });
}
