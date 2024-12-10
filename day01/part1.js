f=x=>{a= x.split("\n").map(x=>x.split(/\s+/));
      first=a.map(x=>x[0]);
      second=a.map(x=>x[1]);
      first.sort((a,b)=>a-b)
      second.sort((a,b)=>a-b);
      return first.map((x,i)=>Math.abs(second[i]-x)).reduce((l,c)=>l+c)
     }
