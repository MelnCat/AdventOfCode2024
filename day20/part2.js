
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
    for (let i of l.keys()) for (let j of l[0].keys()) {
        if (l[i][j] === "S") si = [i,j]
        if (l[i][j] === "E") ei = [i,j]
        if (l[i][j] === "#") {
            if (!no[i]) no[i] = {}
            no[i][j] = 1;
        }
    }
    const working = []
        let mainseen;
    {

        const state = new PriorityQueue((a,b)=>a.t-b.t);
state.enqueue({i:si[0],j:si[1],t:0,cheat:null})
        const out = []
        let seen = {}
    while (!state.isEmpty()) {
        const last = state.dequeue();
        const {i,j,t} = last;
        if (seen[[i,j]] && seen[[i,j]] < t) continue;
        seen[[i,j]]=t;
        if (i === ei[0] && j === ei[1]) {continue
        }
        const n = [[-1,0],[1,0],[0,1],[0,-1]].map(x=>[last.i+x[0], last.j+x[1]]);
        for (const neigh of n) {
            if (i < 0 || j < 0 || i > l.length || j > l[0].length) continue;
                if (no[neigh[0]]?.[neigh[1]]) continue;
           state.enqueue({i:neigh[0],j:neigh[1],t:last.t + 1})
        }
    }
        mainseen = seen;

    }
let walkable = Object.keys(mainseen).map(x=>x.split(",").map(y=>+y));
    let exitTime = {}
    {

        const state = new PriorityQueue((a,b)=>a.t-b.t);
state.enqueue({i:ei[0],j:ei[1],t:0,cheat:null})
        const out = []
        let seen = {}
    while (!state.isEmpty()) {
        const last = state.dequeue();
        const {i,j,t} = last;
        if (seen[[i,j]] && seen[[i,j]] < t) continue;
        seen[[i,j]]=t;
        if (i === si[0] && j === si[1]) {continue
        }
        const n = [[-1,0],[1,0],[0,1],[0,-1]].map(x=>[last.i+x[0], last.j+x[1]]);
        for (const neigh of n) {
            if (i < 0 || j < 0 || i > l.length || j > l[0].length) continue;
                if (no[neigh[0]]?.[neigh[1]]) continue;
           state.enqueue({i:neigh[0],j:neigh[1],t:last.t + 1})
        }
    }
        exitTime = seen;

    }
    const exitTimeOf = start =>{
        if (start.toString() in exitTime) return exitTime[start]
        const state = new PriorityQueue((a,b)=>a.t-b.t);
state.enqueue({i:start[0],j:start[1],t:0,cheat:null})
        const out = []
        let seen = {}
    while (!state.isEmpty()) {
        const last = state.dequeue();
        const {i,j,t} = last;
        if (seen[[i,j]] && seen[[i,j]] < t) continue;
        seen[[i,j]]=t;
        if (i === ei[0] && j === ei[1]) {
            return exitTime[start] = t;
            break;
        }
        const n = [[-1,0],[1,0],[0,1],[0,-1]].map(x=>[last.i+x[0], last.j+x[1]]);
        for (const neigh of n) {
            if (i < 0 || j < 0 || i > l.length || j > l[0].length) continue;
                if (no[neigh[0]]?.[neigh[1]]) continue;
           state.enqueue({i:neigh[0],j:neigh[1],t:last.t + 1})
        }
    }

    }
    mainseen[si]=0
    let out = []
    d=20;
    for (const w of walkable) {
        const targets = [];
        let i = w[0];
        let j = w[1];
        let t = mainseen[w];
        
        for (let ni = -d; ni <= d; ni++){
            let ii = i + ni;
            if (ii < 0 || ii >= l.length) continue;
            for (let nj = -d; nj <= d; nj++){
                let jj = j + nj;
            if (jj < 0 || jj >= l[0].length) continue;
                if (no?.[ii]?.[jj]) continue;
                let distance = Math.abs(ni) + Math.abs(nj);
                if (distance > d) continue;
                 targets.push({i:ii,j:jj,t:t + distance+exitTimeOf([ii,jj])})
            }
        }
        for (const tar of targets) {
out.push(tar.t)

        }
    }
    return out.filter(x=>mainseen[ei]-x>=100).map(x=>mainseen[ei]-x)
    
}
