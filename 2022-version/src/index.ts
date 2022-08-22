import { exit, init } from "myPackage";

class Block {
	constructor(private data: string) {}
	static hello() {
		return 'hi';
	}
}

init({
	url: 'hello'
});

exit(1);