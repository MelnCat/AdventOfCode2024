f=x=>{
    s=x.split("\n").map(x=>x.split(""))
dir=0;
    dirs=[[-1, 0], [0, 1], [1, 0], [0, -1]];
    x=s.map(a=>a.indexOf(`^`)).find(a=>a!==-1);
    y=s.findIndex(a=>a.includes("^"));
    found=new Set();
    while (y in s && x in s[0]) {
        found.add(`${x},${y}`);
        const [i, j] = [y + dirs[dir][0], x + dirs[dir][1]]
        if (s[i]?.[j] === "#") dir++;
        else {
x=j;y=i;
        }
        dir %= 4;
        
    }
    return found.size;
}