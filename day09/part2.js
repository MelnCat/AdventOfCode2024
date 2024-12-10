f=x=>{
    blocks=x.split("").map(x=>+x);
        let n = 0;
        let acc = 0;
        let b = []
        for (let i = 0; i < blocks.length; i++){
            if (i%2 === 0) {
                b.push({length:blocks[i],idx: acc, number: n});
                n++;
            }
            acc += blocks[i]
        }
        let spaces = [];;
            const sorted = b.toSorted((a,b)=>a.idx - b.idx);
                for (let i = 0; i < Math.max(...b.map(x=>x.idx+x.length));) {
                if (b.some(x=>i >= x.idx && i < x.idx + x.length)) {i++;continue};
                const next = sorted.find(x=>x.idx > i);
                const space = next.idx - i;
                spaces.push({idx:i, length:space})
                    i+=space;
            }
        outer:
        for (const block of b.toReversed()) {
            const free = spaces.find(x => x.length >= block.length)
            if (!free) continue;
            if (free.idx > block.idx) continue;
            const old = block.idx;
            block.idx = free.idx;
            free.idx += block.length;
            free.length -= block.length;
            const after = spaces.find(x => x.idx === old + block.length)
            const before = spaces.find(x => x.idx + x.length === old)
            if (after && before) {
                before.length+= after.length + block.length;
                after.length = 0;
            } else if (after) {
                after.idx -= block.length;
                after.length += block.length;
            } else if (before ){
                before.length += block.length;
            } else spaces.push({idx: old, length: block.length})
    
            spaces.sort((a,b)=>a.idx-b.idx)
        }
        out = 0;
        for (const block of b) {
            out += (block.length + block.idx - 1) / 2 * (block.length + block.idx) * block.number
            out -= ( + block.idx - 1 ) / 2 * ( + block.idx) * block.number
        }
        return out}