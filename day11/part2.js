f=x=>{
    l=x.split(" ").map(x=>+x).reduce((l,c)=>(l[c]?l[c]++:l[c]=1,l),{})
    
    for (let i = 0; i < 75; i++) {
        next={}
        for (const st in l) 
            if (+st === 0) {next[1] = l[st]}
        else if (st.toString().length % 2 === 0) {
            next[+st.toString().slice(0,st.toString().length / 2)]??=0
            next[ +st.toString().slice(st.toString().length / 2)]??=0
            
         next[+st.toString().slice(0,st.toString().length / 2)]+=l[st] 
             next[ +st.toString().slice(st.toString().length / 2)] += l[st]   
        }
        else next[2024 * st] = next[2024 * st] ?next[2024 * st] +l[st]:l[st];
        l = next;
    }
    return Object.values(l).reduce((l,c)=>l+c)
}
