f=x=>{
    lines = x.split("\n");out=0;
for (let i = 0; i < lines.length; i++)
    for (let j = 0; j < lines[0].length; j++) {
        for (const [a,b,c,d] of [
"SSMM","MSMS","MMSS","SMSM"
            
            ])
        if (lines[i][j]==="A" && lines[i+1]?.[j+1]===a&&lines[i-1]?.[j+1]===b&&lines[i+1]?.[j-1]===c&&lines[i-1]?.[j-1]===d) out++
    }
    return out
}
