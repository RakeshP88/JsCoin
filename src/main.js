const { Blockchain } = require('./blockchain');

//instantialte the Blockchain
const jsCoin = new Blockchain();

const td1 = jsCoin.addBlock({ name: 'John Parker', amount: 100 });
const td2 = jsCoin.addBlock({ name: 'Abby Smith', amount: 88 });

// jsCoin.showBlockchain();

// Check if the chain is valid
console.log('Blockchain valid?', jsCoin.isChainValid() ? 'Yes' : 'No');
console.log();
