f=x=>{
    ss=x.split("\n").map(x=>x.split(""))
    count=0;
    for (let p = 0; p < s.length; p++)
        outer:
        for (let q = 0; q< s[0].length; q++){
            s=ss.map(x=>x.slice(0))
            s[p][q] = "#";
dir=0;
    dirs=[[-1, 0], [0, 1], [1, 0], [0, -1]];
    x=s.map(a=>a.indexOf(`^`)).find(a=>a!==-1);
    y=s.findIndex(a=>a.includes("^"));
    found=new Set();
    while (y in s && x in s[0]) {
        if (found.has(`${x},${y},${dir}`)) {
count++; continue outer;
        }
        found.add(`${x},${y},${dir}`);
        const [i, j] = [y + dirs[dir][0], x + dirs[dir][1]]
        if (s[i]?.[j] === "#") dir++;
        else {
x=j;y=i;
        }
        dir %= 4;
        
    }
        }
    return count;
}