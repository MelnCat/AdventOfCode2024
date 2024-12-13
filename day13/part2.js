f=x=>{

    l=x.split("\n\n")
    machines = [];
        for (const li of l) {
            const p = li.split("\n")
            const [_, ax, ay] = p[0].match(/X(.\d+), Y(.\d+)/)
            const [__, bx, by] = p[1].match(/X(.\d+), Y(.\d+)/)
            const [_e, px, py] = p[2].match(/X=(\d+), Y=(\d+)/)
            machines.push({a: [+ax, +ay], b: [+bx, +by], p: [+px+10000000000000, +py+10000000000000]})
            
        }
    cost = 0;
    for (const machine of machines) {
        const [a,b] = machine.a;
        const [x,y] = machine.b;
        const [p, q] = machine.p;
        const n = (q*x -p*y)/(b*x-a*y);
        const m = (b*p-a*q)/(b*x-a*y);
        if (n % 1 || m % 1) continue;
        cost += n*3 + m;
    }
    return cost
}
