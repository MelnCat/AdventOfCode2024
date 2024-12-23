f=x=>{

l=x.split("\n")
    adj = {}
    conn=[]
    for (const a of l) {
        const [first,second] = a.split("-")
        adj[first]??=[]
        adj[second]??=[]
        adj[first].push(second)
        adj[second].push(first)
        conn.push([first, second])
    }
    nodes = [...new Set(Object.values(adj).flat())]
    return `import networkx as nx
from json import dumps
G = nx.Graph()\n`+nodes.map(x => `G.add_node("${x}")`).join("\n"
                                                )+"\n"+conn.map(x => `G.add_edge("${x[0]}", "${x[1]}")`).join("\n"
                                                )+`
print(dumps(list(nx.find_cliques(G))))
`
}
// Dump python output into here
g=x=>{
return x.sort((a,b)=>a.length-b.length).at(-1).sort().join(",")
}
