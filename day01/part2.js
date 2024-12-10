f=x=>{a= x.split("\n").map(x=>x.split(/\s+/));
      first=a.map(x=>x[0]);
      second=a.map(x=>x[1]);
      return first.map((x,i)=>second.filter(y=>y===x).length*x).reduce((l,c)=>l+c)
     }
