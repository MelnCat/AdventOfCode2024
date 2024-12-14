w=101
h=103
f=x=>{
    l=x.split("\n").map(x=>x.match(/p=(.\d*),(.\d*) v=(.\d*),(.\d*)/)).map(x=>({p:[+x[1],+x[2]],v:[+x[3],+x[4]]}))
    for (let i = 0; i < 100; i++) {
        for (const k of l) {
            k.p[0] += k.v[0]
            while (k.p[0] >= w) k.p[0] -= w;
            while (k.p[0] < 0) k.p[0] += w;
            k.p[1] += k.v[1]
            while (k.p[1] < 0) k.p[1] += h;
            while (k.p[1] >= h) k.p[1] -= h;
            
        }
    }
    let t1 = l.filter(x => x.p[0] < (w-1) / 2 && x.p[1] <(h-1) / 2);
    let t2 = l.filter(x => x.p[0] > (w-1) / 2 && x.p[1] < (h-1) / 2);
    let t3 = l.filter(x => x.p[0] < (w-1) / 2 && x.p[1] >(h-1) / 2);
    let t4 = l.filter(x => x.p[0] > (w-1) / 2 && x.p[1] > (h-1) / 2);
    return t1.length * t2.length * t3.length * t4.length
}
