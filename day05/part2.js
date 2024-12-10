f=x=>{
    l=x.split("\n\n")
        n=l[0].split("\n").map(x=>x.split("|"))
        m=l[1].split("\n").map(x=>x.split(","))
    c=0;
        for (const k of m) {
            if (n.every(r => !k.includes(r[0]) || !k.includes(r[1]) || (k.indexOf(r[0]) < k.indexOf(r[1])))) {}
            else {
                bad = n.filter(r => !(!k.includes(r[0]) || !k.includes(r[1]) || (k.indexOf(r[0]) < k.indexOf(r[1]))))
                sorted = k.toSorted((a,b)=>{
                    found = n.find(x=>(x[0] === a && x[1] === b) || (x[0] === b && x[1] === a));
                    if (!found) return 0;
                    if (found[0] === a) return -1;
                    else return 1;
                })
                c+=+sorted[(sorted.length - 1)/2]
            }
        }
        return c
    }