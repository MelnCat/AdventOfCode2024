f=x=>{
    l=x.split(" ").map(x=>+x)
    for (let i = 0; i < 25; i++) {
        next=[]
        for (const st of l) 
            if (st === 0) next.push(1)
        else if (st.toString().length % 2 === 0) next.push(+st.toString().slice(0,st.toString().length / 2), +st.toString().slice(st.toString().length / 2));
        else next.push(2024 * st);
        l = next;
    }
    return l.length;
}
