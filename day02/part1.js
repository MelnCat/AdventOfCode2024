f=x=>{
a=x.split("\n").map(x=>x.split(" ").map(y=>+y))
    return a.map(x => x.map((y,i,a)=>a[i-1]-y).slice(1)).filter(x=>x.every(y=>y!==0&&Math.abs(y)<=3.1)).filter(x=>x.every(y=>y<0)||x.every(y=>y>0)).length;
    
}
