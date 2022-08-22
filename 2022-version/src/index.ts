import crypto from 'crypto';

interface BlockShape {
	hash: string;
	prevHash: string;
	blockNumber: number;
	data: string;
}

class Block implements BlockShape {
	public hash: string;
	constructor(
		public prevHash: string,
		public blockNumber: number,
		public data: string
	) {
		this.hash = Block.calculateHash(prevHash, blockNumber, data);
	}

	static calculateHash(prevHash: string, blockNumber: number, data: string): string {
		const toHash = `${prevHash}${blockNumber}${data}`;
		return crypto.createHash("sha256").update(toHash).digest('hex');
	}
}