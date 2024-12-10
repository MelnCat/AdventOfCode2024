f=x=>{
    lines = x.split("\n");out=0;
for (let i = 0; i < lines.length; i++)
    for (let j = 0; j < lines[0].length; j++) {
        const sides = [lines[i].slice(j, j+4),lines[i].slice(Math.max(0,j-3), j+1).split("").reverse().join(""),lines.slice(i, i+4).map(n=>n?.[j]),lines.slice(Math.max(0,i-3), i+1).reverse().map(n=>n?.[j]),
   ...[-1,1].flatMap(p=>[-1,1].map(q=>[lines[i][j],lines[i+p]?.[j+q],lines[i+p*2]?.[j+q*2],lines[i+p*3]?.[j+q*3]]))                   
                      ].map(x=>x.join?x.join(""):x)
out+=sides.filter(x=>x==="XMAS").length
    }
    return out
}
