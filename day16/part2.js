f=x=>{
m=x.split("\n").map(y=>y.split(""));
    spos=[]
    epos=[]
    for (let i of m.keys()) for (let j of m[0].keys()) {
        if (m[i][j] === "S") spos=[i,j]
        if (m[i][j] === "E") epos = [i,j]
    }
    best = {}
    states = [{i:spos[0], j: spos[1], dir: [0, 1], cost:0,seen:[[spos[0],spos[1]]]}]
        const done = []
        while (states.length) {
            last = states.pop();
            const nexti = last.i + last.dir[0];
            const nextj = last.j + last.dir[1];
            i=last.i
            j=last.j
            dir=last.dir
            if (best[[i,j,dir]] === undefined || best[[i,j,dir]] > last.cost) best[[i,j,dir]] = last.cost;
            if (m[nexti][nextj] !== "#") {
                const newCost = last.cost + 1;
                if (best[[nexti,nextj,dir]] < newCost) continue;
                if (nexti === epos[0] && nextj === epos[1]) done.push([newCost, last.seen])
                else states.push({i:nexti, j: nextj, dir: last.dir, cost: newCost, seen: last.seen.concat([[nexti, nextj]])})
            }
            p = []
            if (last.dir[0] === 0) p =[[1,0 ], [-1,0]]
            else  p =[[0,1 ], [0,-1]]
            for (const pos of p) {
                const newCost = last.cost + 1000;
                if (best[[i,j,pos]] < newCost) continue;
                else states.push({i:last.i, j: last.j, dir: pos, cost: newCost, seen: last.seen})
            }
        }
    all= done.sort((a,b)=>a[0]-b[0])
    const highest = all[0]
    const filter = all.filter(x => x[0] === highest[0])
   console.log(new Set(filter.flatMap(x => x[1]).map(x => x.join(","))).size + 1)
}
