f=x=>{
    out = 0;
    l=x.split("\n").map(x=>x.split(""));
    ant={}
    for (let i = 0; i < l.length;i++)for (let j = 0; j < l[0].length;j++){
        char = l[i][j];
        if (char !== ".") {
            if (!ant[char]) ant[char] = [[i, j]]
            else ant[char].push([i,j])
        }
    }
 for (let i = 0; i < l.length;i++)for (let j = 0; j < l[0].length;j++){
     outer:
        for (const t in ant) {
            const dist = ant[t].map(x=>(x[0]-i)**2 + (x[1]-j)**2)
            for (const first of ant[t]) for (const second of ant[t]) {
                if (first === second) continue;
                const slope1 = (i-first[0]) / (j-first[1])
                const slope2 = (i-second[0]) / (j-second[1])
                if (slope1 === slope2 ) {
                    d1 = (first[0]-i)**2 + (first[1]-j)**2
                    d2=(second[0]-i)**2 + (second[1]-j)**2
                    if (d1 * 4 === d2 || d2 * 4 === d1){
out++;break outer}
                }
            }
        }
 }
return out;
}