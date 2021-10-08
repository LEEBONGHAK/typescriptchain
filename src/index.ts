import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // static method : method가 Block class 안에 있고, class가 생성되지 않았어도  호출할 수 있는 method 즉, Block class 안에서 항상 사용가능한 method
  static calculateBlockHash = (
    index: number, 
    previousHash: string, 
    timestamp: number, 
    data: string
  ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  

  constructor(
    index: number,
    hash: string,
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

const genesisBlock: Block = new Block(0, "123412341234", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

const getBlockchain = (): [Block] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};