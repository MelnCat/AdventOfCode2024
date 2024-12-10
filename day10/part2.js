f=x=>{
    grid=x.split("\n").map(x=>x.split(""));
        starts=[];
        let n = 0;
        for (const i in grid) for (const j in grid[0]) {
            if (grid[i][j] === "0") starts.push({i, j, n: n++,v:0});
        }
        state = structuredClone(starts);
        ends = [];
        while (state.length) {
            const last = state.shift();
            const tests = [[0,1],[1,0],[-1,0],[0,-1]].map(x=>{
                const i = +last.i + +x[0];
                const j = +last.j + +x[1];
                const v = grid[i]?.[j];
                if (String(v) !== String(last.v+1)) return;
                if (+v === 9) {ends.push({i, j, n: last.n})
                              return};
                state.push({i,j,n: last.n,v: +v});
            })
        }
        return starts.map(x=>ends.filter(y=>y.n===x.n).length).reduce((l,c)=>l+c,0);
    }