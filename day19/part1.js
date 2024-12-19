f=x=>{
t=x.split("\n\n");
    available = t[0].split(", ")
    const test = curr => {
        if (available.includes(curr)) return true;
        const toTest = available.filter(y => curr.startsWith(y))
        if (!toTest.length) return false;
        for (const foo of toTest) {
            if (test(curr.slice(foo.length))) return true;
        }
            return false;
    }
    n=0;
    for (const q of t[1].split("\n")) if (test(q)) n++;
    return n;
}
