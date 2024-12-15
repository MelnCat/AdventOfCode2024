f=x=>{
t=x.split("\n\n")
map = t[0].split("\n").map(x=>x.split(""))
   moves= t[1].split("\n").flatMap(x=>x.split(""));
    objs=[]
    let mx = 0
    let my = 0;
    for (let i of map.keys()) for (let j of map[0].keys()) {
        chr = map[i][j]
        if (chr === ".") continue;
        if (chr === "@") {
            my = i;
            mx = j;
            continue;
        }
        if (chr === "#") objs.push({type:"wall", i, j})
        if (chr === "O")  objs.push({type:"box", i, j})
    }
    for (const move of moves) {
        out = [];
    for (let i of map.keys()) {
out.push([]);
        for (let j of map[0].keys()) {
            found = objs.find(x => x.i === i && x.j === j);
        out[out.length - 1][j] = i === my && j === mx ? "@" : found ? found.type === "wall" ? "#" : "O" : "." 
        }
    }
       // console.log(out.map(x=>x.join("")).join("\n"))
        const dir = move === "v" ? [1, 0] : move === "^" ? [-1, 0] : move === "<" ? [0, -1] : [0, 1]
        const [nx, ny] = [mx + dir[1], my + dir[0]];
        const collide = objs.find(x => x.i === ny && x.j === nx);
        if (collide) {
            if (collide.type === "wall") continue;
            let p = ny; let q = nx;
            while (true) {
                p+=dir[0];
                q += dir[1];
        const collide2 = objs.find(x => x.i === p && x.j === q);
                if (!collide2) {
                    collide.i = p;
                    collide.j = q;
            mx=nx;
            my=ny;
break;
                } else if (collide2.type === "wall") break;
            }
        } else {
            mx=nx;
            my=ny;
        }
    }
    return (objs.filter(x=>x.type==="box").map(x => 100*x.i+x.j).reduce((l,c)=>l+c))
}
