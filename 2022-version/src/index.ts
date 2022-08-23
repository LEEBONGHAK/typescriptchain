import { timeStamp } from 'console';
import crypto from 'crypto';

interface BlockShape {
	hash: string;
	prevHash: string;
	blockNumber: number;
	data: string;
	timestamp: number;
}

class Block implements BlockShape {
	public hash: string;
	constructor(
		public readonly prevHash: string,
		public readonly blockNumber: number,
		public readonly data: string,
		public readonly timestamp: number,
	) {
		this.hash = Block.calculateHash(prevHash, blockNumber, data, timestamp);
	}

	// hash 계산 static method
	static calculateHash(prevHash: string, blockNumber: number, data: string, timestamp: number): string {
		const toHash = `${prevHash}${blockNumber}${data}${timestamp}`;
		return crypto.createHash("sha256").update(toHash).digest('hex');
	}

	// Block이 constructor의 rule에 맞게 생성되었는지 확인하는 static method
	static validateStructure(Block: Block) {
		return typeof Block.blockNumber === 'number' &&
		typeof Block.hash === 'string' &&
		typeof Block.prevHash === 'string' &&
		typeof Block.data === 'string' &&
		typeof Block.timestamp === 'number'
	}
}

class Blockchain {
	private blocks: Block[]
	constructor() {
		this.blocks = [];
	}

	private getPrevHash() {
		if (this.blocks.length === 0) return "";
		return this.blocks[this.blocks.length - 1].hash;
	}

	private isBlockValid(candidateBlock: Block, previousBlock: Block) {
		if (!Block.validateStructure(candidateBlock)) {
		  return false;
		} else if (previousBlock.blockNumber + 1 !== candidateBlock.blockNumber) {
		  return false;
		} else if (previousBlock.hash !== candidateBlock.prevHash) {
		  return false;
		} else {
		  return true;
		}
	  };

	public getBlockchain() {
		return [...this.blocks];
	}

	public getLastestBlock() {
		return this.blocks[this.blocks.length - 1];
	}

	public getNewTimeStamp() {
		return Math.round(new Date().getTime() / 1000);
	}

	public addBlock(data: string) {
		const prevBlock = this.getLastestBlock();
		const blockNumber = prevBlock.blockNumber + 1;
		const timestamp = this.getNewTimeStamp();
		const newBlock = new Block(this.getPrevHash(), blockNumber, data, timestamp);
		this.blocks.push(newBlock);
	}
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlockchain());