size=70+1
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = await import('https://cdn.skypack.dev/@datastructures-js/priority-queue');
f=x=>{
  l=  x.split("\n").map(x=>x.split(",").map(y=>+y))

    let cache = {}
    let bad = {}
    for (const thing of l.slice(0,1024)) {
         bad[thing[0]]??={}
        bad[thing[0]][thing[1]] = true;
    }
    const states = new PriorityQueue((a,b)=>a.steps-b.steps);
    states.enqueue({i:0,j:0,steps:0})
    const out = []
    while (!states.isEmpty()) {
        let next = states.dequeue();
        if (next.steps >= cache[[next.i,next.j]]) continue;
        if (!cache[[next.i,next.j]] || next.steps < cache[[next.i,next.j]]) cache[[next.i,next.j]]=next.steps;
        for (let dir of [[-1, 0], [1,0],[0,1],[0,-1]]) {
            const ni = next.i + dir[0];
            const nj = next.j + dir[1];
            if (ni < 0 || nj < 0 || ni >= size || nj >= size) continue;
            const newSteps = next.steps + 1;
            if (ni === size - 1 && nj === size - 1) {
                out.push(newSteps);
                continue;
            }
            if (bad[ni]?.[nj]) continue;
            if (cache[[ni, nj]] && newSteps >= cache[[ni, nj]]) continue;
            states.enqueue({i:ni,j:nj,steps:newSteps});
        }
    }
    return Math.min(...out)
}
