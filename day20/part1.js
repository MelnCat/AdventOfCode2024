
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = await import('https://cdn.skypack.dev/@datastructures-js/priority-queue');
f=x=>{
l=x.split("\n").map(x=>x.split(""));
const no = {}
    let si=[]
    let ei = []
    let walls = [[-1,-1]]
    for (let i of l.keys()) for (let j of l[0].keys()) {
        if (l[i][j] === "S") si = [i,j]
        if (l[i][j] === "E") ei = [i,j]
        if (l[i][j] === "#") {
            if (!no[i]) no[i] = {}
            no[i][j] = 1;
            walls.push([i,j])
        }
    }
    const working = []
    outer:
    for (const w of [{}]) {
        const state = new PriorityQueue((a,b)=>a.t-b.t);
state.enqueue({i:si[0],j:si[1],t:0})
        const out = []
        let seen = {}
    while (!state.isEmpty()) {
        const last = state.dequeue();
        const {i,j,t} = last;
        if (t >= working[0]?.[1]) continue;
        if (seen[[i,j]] && seen[[i,j]] < t) continue;
        seen[[i,j]]=t;
        if (i === ei[0] && j === ei[1]) {
            working.push([w, t])
            console.log(working)
            continue outer
        }
        const n = [[-1,0],[1,0],[0,1],[0,-1]].map(x=>[last.i+x[0], last.j+x[1]]);
        for (const neigh of n) {
            if (i < 0 || j < 0 || i > l.length || j > l[0].length) continue;
            if (neigh[0] !== w[0] || neigh[1] !== w[1]) {

                if (no[neigh[0]]?.[neigh[1]]) continue;
            }
            if (!seen[neigh] || seen[neigh] > last.t + 1) state.enqueue({i:neigh[0],j:neigh[1],t:last.t + 1})
        }
    }
    }
    return working.filter(x=>x[1] <= working[0][1]-100)
    
}
