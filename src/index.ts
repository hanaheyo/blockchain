import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
        ): string => 
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

    constructor(
        index: number,
        hash: string, // 모든 속성을 수하적으로 하나의 문자열로 결합한 것.
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

const genesisBlock:Block = new Block(0, "20202002", "", "Hello", 12345);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1]; // blockchain안에서 가장 최근 것.

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)

export {};
