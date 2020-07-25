const { Block } = require('./block');

class Blockchain {

    constructor() {
        this.chain = [this.createOriginBlock()];
    }

    /**
   * @returns {Block}
   */
    createOriginBlock() {
        return new Block(0, { name: 'Block Zero', amount: 0 }, '0');
    }

    /**
   * Returns the latest block from the chain.
   *
   * @returns {Block[]}
   */
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    /**
   * @param {Block} blockData
   */
    addBlock(blockData) {
        let index = this.chain.length;
        let prevHash = this.getLatestBlock().hash;
        let block = new Block(index, blockData, prevHash);

        this.chain.push(block);
    }

    /**
    * Returns true if blockchain is valid, false otherwise
    * 
    * @returns {boolean}
    */
    isChainValid() {
        // Check if the origin block hasn't been tampered
        const originBlock = JSON.stringify(this.createOriginBlock());

        if (originBlock !== JSON.stringify(this.chain[0])) {
            return false;
        }

        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
        }

        return true;
    }

    /**
    * Returns the data in the current blockchain. Only for test purpose
    * 
    * @returns {Block}
    */
    showBlockchain() {
        if (this.chain.length === 0) {
            console.log('Blockchain is empty! Please add some data');
            return;
        }

        console.log('Current Blockchain');
        console.log('----------------------------------------------------');
        for (let i = 0; i < this.chain.length; i++) {
            console.log(this.chain[i]);
            console.log('----------------------------------------------------');
        }
        console.log();
    }
}

module.exports = {
    Blockchain
}
