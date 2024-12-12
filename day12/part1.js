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
            let p = 0;
            for (const it of group) {
                
const count = [[-1, 0], [1,0],[0,1],[0,-1]].filter(k=>group.some(x => x.i === (it.i + k[0]) && x.j === (it.j + k[1])));
p+=(4 - count.length)
            }
            n+=group.length * p;
        }
    }
    return n
}
