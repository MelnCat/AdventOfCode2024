f=x=>{
a=x.split("\n").map(x=>x.split(" ").map(y=>+y))
    return a.filter(x=>{
      tests=x.map((y,i,a)=>a.slice(0,i).concat(a.slice(i+1))).map(x => x.map((y,i,a)=>a[i-1]-y).slice(1));
        return tests.filter(x=>x.every(y=>y!==0&&Math.abs(y)<=3.1)).filter(x=>x.every(y=>y<0)||x.every(y=>y>0)).length > 0
    }).length;
    
}
