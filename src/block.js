const crypto = require('crypto');

class Block {
    /**
   * @param {number} index
   * @param {object} data
   * @param {string} prevHash
   */
    constructor(index, data, prevHash = '') {
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    /**
   * Returns the SHA256 of this block (by processing the data for this block)
   *
   * @returns {string}
   */
    calculateHash() {
        return crypto.createHash('sha256').update(this.prevHash, this.timestamp, JSON.stringify(this.data)).toString();
    }
}

module.exports = {
    Block
}
