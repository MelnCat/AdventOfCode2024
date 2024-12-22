f=x=>{
        let mix = (secret, num) => secret ^ num
    let prune = (secret) => secret % 16777216n
    let next = secret => {
        secret = mix(secret, secret * 64n) 
        secret = prune(secret)
        secret = mix(secret, (secret / 32n))
        secret = prune(secret)
        secret = mix(secret, secret * 2048n)
        secret = prune(secret)
        return secret
    }
    let list = x.split("\n").map(x=>[BigInt(x)])
    for (let i = 0; i < 2000; i++) list = list.map(x =>x.concat( next(x.at(-1))))
    const ones = list.map(x => x.map(y=>(10n + y%10n) % 10n))
    const changes = ones.map(x => x.map((y,i,a)=>i===0?null:y-a[i-1]))
    const bestMap = {}
    for (let i = 0; i < changes.length; i++) {
        bestMap[i] = {}
        const l = changes[i]
        for (let j = 1; j < l.length - 3; j++) {
            if (!([l.slice(j, j+4)].join(",") in bestMap[i])) bestMap[i][l.slice(j, j+4)]= ones[i][j + 3];
        }
    }
    const all = [...new Set(Object.values(bestMap).flatMap(x=>Object.keys(x)))]
    const p = []
    const mm = {}
    for (const k of all) {
        const value = Object.values(bestMap).map(x => x[k] ?? 0n).reduce((l,c)=>l+c,0n);
        p.push(value)
    }
    return Math.max(...p.map(x=>Number(x)))
}
