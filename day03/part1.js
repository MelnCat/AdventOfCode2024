f=x=>{
n=0;
    for (const k of x.matchAll(/mul\((\d+),(\d+)\)/g))
        (n+=k[1]*k[2])

    return n;
}
