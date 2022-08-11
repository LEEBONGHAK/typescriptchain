import * as CryptoJS from 'crypto-js';

class Block {
  // static method : method가 Block class 안에 있고, class가 생성되지 않았어도  호출할 수 있는 method 즉, Block class 안에서 항상 사용가능한 method
  // hash를 계산하는 method
  static calculateBlockHash = (
    index: number, 
    previousHash: string, 
    timestamp: number, 
    data: string
  ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  
  // Block이 constructor의 rule에 맞게 생성되었는지 확인하는 method
  static validateStructure = (aBlock: Block): boolean => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.previousHash === "string" && 
    typeof aBlock.timestamp === "number" && 
    typeof aBlock.data === "string";
  
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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

// 가장 처음 block 생성
const genesisBlock: Block = new Block(0, "123412341234", "", "Hello", 123456);

// block들을 담고 있는 blockchain
let blockchain: [Block] = [genesisBlock];

// blockchain을 가져오는 함수
const getBlockchain = (): [Block] => blockchain;

// 마지막 block을 가져오는 함수
const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

// 새로운 timestamp를 생성하는 함수
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// 새로운 block 생성 함수
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLastestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);

  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

  addBlock(newBlock);
  return newBlock;
};

// 계산된 해당 block의 hash를 가져오는 함수
const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

// block을 확인 하는 함수
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

// blockchain에 block을 추가하는 함수
const addBlock = (candidatedBlock): void => {
  if (isBlockValid(candidatedBlock, getLastestBlock())) {
    blockchain.push(candidatedBlock);
  }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};