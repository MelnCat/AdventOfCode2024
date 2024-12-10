f=x=>{
    l=x.split("\n\n")
        n=l[0].split("\n").map(x=>x.split("|"))
        m=l[1].split("\n").map(x=>x.split(","))
    c=0;
        for (const k of m) {
            if (n.every(r => !k.includes(r[0]) || !k.includes(r[1]) || (k.indexOf(r[0]) < k.indexOf(r[1])))) c+= +k[(k.length - 1) / 2]
        }
        return c
    }