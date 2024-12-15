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
        const dir = move === "v" ? [1, 0] : move === "^" ? [-1, 0] : move === "<" ? [0, -0.5] : [0, 0.5]
        const [nx, ny] = [mx + dir[1], my + dir[0]];
        if (dir[0] === 0) {
        const collide = objs.find(x => x.i === ny && (dir[1] < 0 ? x.j === nx - 0.5 : x.j === nx));
        if (collide) {
            if (collide.type === "wall") continue;
        tryMove = (obj, dx, doit) => {
        const hit = objs.filter(x => x.i === obj.i && (x.j === obj.j + dx || (x.j === obj.j + 2* dx)));
            if (hit.some(x => x.type === "wall")) return false;
            if (hit.length === 0) {
                if (doit) obj.j += dx;
                return true;
            } else {
                for (const h of hit) {
                    if (!tryMove(h, dx, false)) return false;
                }
                for (const h of hit) {
                    tryMove(h, dx, true)
                }
                if (doit) obj.j += dx;
            }
            return true;
        }
        if (tryMove({i:my, j:mx}, dir[1], true)) mx=nx;
        continue;
            
        } else {
            mx=nx;
            my=ny;continue
            
        }
        }
        const collide = objs.find(x => x.i === ny && (x.j === nx || (x.j === nx - 0.5 || x.j === nx)));
        if (!collide) {mx=nx; my=ny; continue;}
            if (collide.type === "wall") continue;
        tryMove = (obj, dy, doit, wide) => {
        const hit = objs.filter(x => x.i === obj.i + dy && (x.j === obj.j || x.j === obj.j - 0.5 || (wide && x.j === obj.j + 0.5)));
            
            if (hit.some(x => x.type === "wall")) return false;
            if (hit.length === 0) {
                if (doit) obj.i += dy;
                return true;
            } else {
                for (const h of hit) {
                    if (!tryMove(h, dy, false, true)) return false;
                }
               if (doit)  for (const h of hit) {
                    tryMove(h, dy, true, true)
                }
                if (doit) obj.i += dy;
            }
            return true;
        }
        if (tryMove({i:my, j:mx}, dir[0], true)) my=ny;
    }
    return (objs.filter(x=>x.type==="box").map(x => 100*x.i+x.j*2).reduce((l,c)=>l+c))
}
