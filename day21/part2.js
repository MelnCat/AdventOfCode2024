f=x=>{
keypad=[
[7,8,9],
    [4,5,6],
    [1,2,3],
    [null, 0, "A"]
    ]
    arrowpad=[
[null, "^", "A"],
        ["<","v",">"]
        ]
    findPos = (arr, char) => [arr.findIndex(x=>x.includes(char)),arr.find(x=>x.includes(char)).indexOf(char)]
steps=(pattern, pad) => {
    let ways = [""]
    let pos = findPos(pad, "A")
    for (const char of pattern) {
        const target = findPos(pad, isNaN(char) ? char : +char);
        const delta = [target[0] - pos[0], target[1] - pos[1]]
        let done = []
        let state = [{pos, steps:[]}];
        const di = Math.sign(delta[0])
        const dj = Math.sign(delta[1])
        while (state.length) {
            const last = state.shift();
            if (pad[last.pos[0]][last.pos[1]] === null) continue;
            if (last.pos[0] === target[0] && last.pos[1] === target[1]) {
                done.push(last);
                continue;
            }
            if (last.pos[0] !== target[0]) state.push({pos:[last.pos[0] + di, last.pos[1]], steps: last.steps.concat(di < 0 ? "^" :"v")})
            if (last.pos[1] !== target[1]) state.push({pos:[last.pos[0], last.pos[1] + dj], steps: last.steps.concat(dj < 0 ? "<"  :">")})
        }
        const changes = Math.min(...done.map(x => x.steps.filter((y,i,a)=>y !== a[i - 1]).length));
        
        const filt = done.filter(x => x.steps.filter((y,i,a)=>y !== a[i - 1]).length === changes)
        ways=ways.flatMap(x => filt.map(y => x+ y.steps.join("")+"A"))
        pos=target
    }
    return ways;
}
    const cache = {}
    const getCost = (pattern, level) => {
        if (cache[[pattern,level]]) return cache[[pattern,level]]
        if (level === 0) return cache[[pattern,level]] = pattern.length;
        const split = pattern.match(/.+?A/g)
        let n = 0;
        for (const p of split) {
            let list = steps(p, arrowpad).map(x => getCost(x, level - 1));
            n+=Math.min(...list)
        }
        return cache[[pattern,level]] = n;
    }
    const getN = pattern => {
        const ways = steps(pattern, keypad)
        return Math.min(...ways.map(x => getCost(x, 25)))
    }
    return x.split("\n").map(x=>getN(x)*parseInt(x,10)).reduce((l,c)=>l+c)
}
