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
    let list = x.split("\n").map(x=>BigInt(x))
    for (let i = 0; i < 2000; i++) list = list.map(x => next(x))
    return list.reduce((l,c)=>l+c)
}
