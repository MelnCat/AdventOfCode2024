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
            for (let ii = 0; ii < ant[t].length; ii++) for (let jj = ii + 1; jj < ant[t].length; jj++) {
                first = ant[t][ii]
                second = ant[t][jj]
                const slope1 = (i-first[0]) / (j-first[1])
                const slope2 = (i-second[0]) / (j-second[1])
                
                if (slope1 === slope2 || (isNaN(slope1) || isNaN(slope2))) {
                    d1 = (first[0]-i)**2 + (first[1]-j)**2
                    d2=(second[0]-i)**2 + (second[1]-j)**2
                    console.log(slope1, slope2)
                    if (true){l[i][j]="#";
out++;break outer}
                }
            }
        }
 }
return out;
}