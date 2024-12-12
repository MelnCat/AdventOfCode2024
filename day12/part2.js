f=x=>{
l=x.split("\n").map(x=>x.split(""))
    map = []
    
    
    for (const i of l.keys()) 
        for (const j of l[0].keys()) {
            const chr = l[i][j];
            map.push({i,j,chr})
        }
    
    const letters = [...new Set(l.flat())];
    const out = []
    for (const letr of letters) {
        const found = new Set()
        const specific = map.filter(x => x.chr === letr);
        let stuff = []
        for (const s of specific) {
             if (found.has(`${s.i},${s.j}`)) continue;
            let group = [];
            const check = (i, j) => {
                    p = i;
                    q = j;
                    if (!l[p]?.[q]) return;
                    if (found.has(`${p},${q}`)) return;
                    if (l[p][q] !== letr) return;
                    found.add(`${p},${q}`);
                    group.push({i:p, j:q});
                for (const offset of [[-1, 0], [1,0],[0,1],[0,-1]]) {
                    p = i + offset[0];
                    q = j + offset[1];
                    check(p,q)
                }
            }
            check(s.i, s.j);
            stuff.push(group);
        }
        out.push({chr:letr, list: stuff})
    }
    let n = 0;
    for (const t of out) {
        for (const group of t.list) {
            const edge = []
            for (const it of group) {
                
const count = [[-1, 0], [1,0],[0,1],[0,-1]].filter(k=>!group.some(x => x.i === (it.i + k[0]) && x.j === (it.j + k[1])));
if (true) {
for (const k of count) {
edge.push({i: it.i + 0.25 * k[0], j: it.j + 0.25 * k[1]})
}
}
            }
            const groups = Object.values(Object.groupBy(edge, x => x.i));
            let sides = 0;
            for (const g of groups) {
                if (g[0].i % 1 === 0) continue;
                const sorted = g.toSorted((a,b)=>a.j - b.j);
                let last = -2;
                for (const s of sorted) {
                    if (s.j !== last + 1) {
                        last = s.j; sides++;
                    }
                    last = s.j;
                }
            }
            const groups2 = Object.values(Object.groupBy(edge, x => x.j));
            for (const g of groups2) {
                if (g[0].j % 1 === 0) continue;
                const sorted = g.toSorted((a,b)=>a.i - b.i);
                let last = -2;
                for (const s of sorted) {
                    if (s.i !== last + 1) {
                        last = s.i; sides++;
                    }
                    last = s.i;
                }
            }
            n+=group.length * sides;
        }
    }
    return n
}
