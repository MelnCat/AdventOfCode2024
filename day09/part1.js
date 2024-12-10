f=x=>{
    blocks=x.split("").map(x=>+x);
        list = Array(blocks.reduce((l,c)=>l+c))
        let n = 0;
        let acc = 0;
        for (let i = 0; i < blocks.length; i++){
            if (true) {
                for (let j = acc; j < acc + blocks[i]; j++)
                    list[j] = i%2 === 0 ? n : null;
                if (i%2 === 0) n++;
            }
            acc += blocks[i]
        }
        while (list.includes(null)) {
            const found = list.findLastIndex(x => x !== null);
            list[list.indexOf(null)] = list[found];
            list.splice(found, 1);
        }
        return list.reduce((l,c,i)=>l+c*i, 0)
    }