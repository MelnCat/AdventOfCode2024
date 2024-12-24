f=x=>{
s =x.split("\n\n")
    vals =Object.fromEntries( s[0].split("\n").map(x => x.split(": ")).map(x=>[x[0], !!+x[1]]))
    ops=s[1].split("\n").map(x=>x.match(/(\w+) (\w+) (\w+) -> (\w+)/)).map(x=>({
        first: x[1], second: x[3], op: x[2], out: x[4]}))
    checks = ops;
    while (checks.length) {
        let newChecks = []
    for (const a of ops) {
        if (!(a.first in vals && a.second in vals)) {
            newChecks.push(a);
            continue
        }
        if (a.op === "AND") vals[a.out] = (vals[a.first] && vals[a.second]);
        if (a.op === "OR") vals[a.out] = (vals[a.first] || vals[a.second]);
        if (a.op === "XOR") vals[a.out] = (vals[a.first] !== vals[a.second]);
    }
        checks=newChecks
    }
    console.log(Object.entries(vals).filter(x=>x[0].startsWith("z")).sort((a,b)=>a[0].localeCompare(b[0])))
    return Object.entries(vals).filter(x=>x[0].startsWith("z")).sort((a,b)=>a[0].localeCompare(b[0])).map((x,i)=>x[1]*2**i).reduce((l,c)=>l+c)
}
