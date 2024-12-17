f = x => {
	let l = x.split("\n\n");
	let oldregisters = l[0]
		.split("\n")
		.map(x => x.match(/Register (.): (\d+)/))
		.map(x => [x[1], BigInt(x[2])]);
	oldregisters = Object.fromEntries(oldregisters);
	let program = l[1]
		.split(" ")[1]
		.split(",")
		.map(x => +x);
	const testOutput = a => {
		let ptr = 0;
		let registers = structuredClone(oldregisters);
		let combo = x => (x <= 3 ? BigInt(x) : x === 4 ? registers.A : x === 5 ? registers.B : x === 6 ? registers.C : null);
		let out = [];
		let steps = 0;
		registers.A = a;
		while (ptr in program) {
			let instruct = program[ptr];
			let value = program[ptr + 1];
			if (instruct === 0) {
				registers.A = registers.A / 2n ** combo(value);
			} else if (instruct === 1) {
				registers.B ^= BigInt(value);
			} else if (instruct === 2) {
				registers.B = BigInt(combo(value)) % 8n;
			} else if (instruct === 3) {
				if (registers.A !== 0n) {
					ptr = value;
					continue;
				}
			} else if (instruct === 4) {
				registers.B ^= BigInt(registers.C);
			} else if (instruct === 5) {
				out.push(combo(value) % 8n);
				// if (out.some((x,i)=>x!==program[i])) continue outer;
			} else if (instruct === 6) {
				registers.B = registers.A / 2n ** combo(value);
			} else if (instruct === 7) {
				registers.C = registers.A / 2n ** combo(value);
			}
			ptr += 2;
		}
		return out;
	};
	const test = (acc, layer) => {
		const available = [];
		for (let p = 0n; p < 8n; p++) {
			available.push(testOutput(acc + 8n ** (16n - 1n - BigInt(layer)) * p));
		}
		const desired = program[15 - layer];
		const desiredIdx = available
			.map((x, i) => [x, i])
			.filter(([n, i]) => n[15 - layer] === BigInt(desired))
			.map(x => x[1]);
			if (!desiredIdx.length) return null;
			for (const opt of desiredIdx) {
				if (available[opt][0] === BigInt(program[0])) return [acc + 8n ** (16n - 1n - BigInt(layer)) * BigInt(opt)]
				const val = test(acc + 8n ** (16n - 1n - BigInt(layer)) * BigInt(opt), layer + 1)
				if (val) return val;
			}
	};
	return test(8n ** 15n, 0);
};
