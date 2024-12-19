f=x=>{
t=x.split("\n\n");
    available = t[0].split(", ")
    cache= {}
    const test = curr => {
        if (curr in cache) return cache[curr]
        let acc = 0;
        if (available.includes(curr)) acc++;
        const toTest = available.filter(y => curr.startsWith(y))
        for (const foo of toTest) {
           acc += test(curr.slice(foo.length));
        }
            return cache[curr]= acc;
    }
    n=0;
    for (const q of t[1].split("\n")) n+=test(q);
    return n;
}
