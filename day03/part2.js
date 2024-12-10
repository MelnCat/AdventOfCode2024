f=x=>{
n=0;ke=true;
    for (const k of x.matchAll(/(?:mul\((\d+),(\d+)\))|(?:(do|don't)\(\))/g))
        {
if (k[0].startsWith("do("))ke=true; else if (k[0].startsWith("don't"))ke=false;

            if (k[0].startsWith("mul") && ke)  (n+=k[1]*k[2])
        }

    return n;
}
