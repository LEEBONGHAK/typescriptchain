import { exit } from "./myPackage";

class Block {
	constructor(private data: string) {}
	static hello() {
		return 'hi';
	}
}

exit(1);