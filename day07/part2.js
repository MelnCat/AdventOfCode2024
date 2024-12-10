f=x=>{
    l=x.split("\n").map(x=>x.split(": ")).map(x=>[BigInt(x[0]), x[1].split(" ").map(y=>BigInt(y))])
        c=0n
        for (const [target, tests] of l) {
            ok = false;
            test = (curr, t, remain) => {
                if (curr > t) return;
                if (ok) return;
                if (curr === t){ ok = true; return};
                if (remain.length === 0) return;
                test(curr * remain[0], t, remain.slice(1));
                test(curr + remain[0], t, remain.slice(1));
                test(BigInt(curr.toString() + remain[0].toString()), t, remain.slice(1));
            }
            test(tests[0], target, tests.slice(1))
            if (ok){
                c+=target;
            }
        }
        return c;
    }