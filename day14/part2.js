w=101
h=103
f=x=>{
    l=x.split("\n").map(x=>x.match(/p=(.\d*),(.\d*) v=(.\d*),(.\d*)/)).map(x=>({p:[+x[1],+x[2]],v:[+x[3],+x[4]]}))
    for (let i = 0; i < 10000; i++) {
        for (const k of l) {
            k.p[0] += k.v[0]
            while (k.p[0] >= w) k.p[0] -= w;
            while (k.p[0] < 0) k.p[0] += w;
            k.p[1] += k.v[1]
            while (k.p[1] < 0) k.p[1] += h;
            while (k.p[1] >= h) k.p[1] -= h;
            
        }
        img = []
        for (let i = 0; i < h; i++)
            {
                img.push([])
for (let j = 0; j < w; j++) {
                img[img.length - 1][j] = l.some(x => x.p[0] === j && x.p[1] === i) ? "#" : " "
            }
            }
        for (let ii of img.keys()) {outer: for (let j of img[0].keys()) {
        for (let k = 0; k < 6; k++) {
            if (img[ii-k]?.[j+k] !== "#") continue outer;
        }
            console.log(i)
            hello=img.map(x=>x.join("")).join("\n")
        console.log("%c" + img.map(x=>x.join("")).join("\n"), `background-color:black;color:white`)
        }}
    }
    let t1 = l.filter(x => x.p[0] < (w-1) / 2 && x.p[1] <(h-1) / 2);
    let t2 = l.filter(x => x.p[0] > (w-1) / 2 && x.p[1] < (h-1) / 2);
    let t3 = l.filter(x => x.p[0] < (w-1) / 2 && x.p[1] >(h-1) / 2);
    let t4 = l.filter(x => x.p[0] > (w-1) / 2 && x.p[1] > (h-1) / 2);
    return t1.length * t2.length * t3.length * t4.length
}
