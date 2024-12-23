f=x=>{

l=x.split("\n")
    adj = {}
    for (const a of l) {
        const [first,second] = a.split("-")
        adj[first]??=[]
        adj[second]??=[]
        adj[first].push(second)
        adj[second].push(first)
    }
    let threes = []
    for (const [k,v] of Object.entries(adj)) {
        const mutuals = []
        for (const conn of v) {
            if (adj[conn].includes(k)) mutuals.push(conn)
        }
        const mCons = []
        for (const mutual of mutuals) {
            for (const m of mutuals) {
                if (mutuals.indexOf(m) <= mutuals.indexOf(mutual)) continue;
                if (adj[mutual].includes(m)) mCons.push([mutual, m]);
            }
        }
        for (const mCon of mCons) threes.push([k].concat(mCon))
    }
    threes= [...new Set(threes.map(x=>x.sort().join(",")))].map(x=>x.split(","))
    const poss = threes.filter(x => x.some(y=>y.startsWith("t")))
    return poss
}
