import * as CryptoJS from "crypto-js";

class Block {
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp == "number" &&
        typeof aBlock.data === "string";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string, // 모든 속성을 수학적으로 하나의 문자열로 결합한 것.
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "20202002", "", "Hello", 12345);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; // blockchain안에서 가장 최근 것.

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestmap: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        newTimestmap,
        data
    );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestmap
    );
    return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock(" bye bye"));

const isBlockVaild = (
    candidateBlock: Block,
    previousBlock: Block
): boolean => {
    if ( !Block.validateStructure(candidateBlock) ) {
        return false;
    } else if ( previousBlock.index + 1 !== candidateBlock.index ) {
        return false;
    } else if ( previousBlock.hash !== candidateBlock.previousHash ) {
        return false;
    } else if
};

export {};
