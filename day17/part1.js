f=x=>{
l=x.split("\n\n")
    registers=l[0].split("\n").map(x=>x.match(/Register (.): (\d+)/)).map(x=>([x[1], +x[2]]))
    registers=Object.fromEntries(registers)
    program = l[1].split(" ")[1].split(",").map(x=>+x)
    let ptr=  0;
    combo=x=>x<=3?x:x===4?registers.A:x===5?registers.B:x===6?registers.C:null;
    out=[]
    while (ptr in program) {
        let instruct = program[ptr]
        let value = program[ptr + 1]
        if (instruct === 0){

            registers.A=Math.trunc(registers.A / 2**combo(value))
        }else if (instruct === 1){ 
            registers.B ^= value;

        }else if (instruct === 2){ 
            registers.B = combo(value) % 8;

        }else if (instruct === 3){ 
            if (registers.A !== 0) {ptr = value;
            continue;}

        }else if (instruct === 4){ 
            registers.B ^= registers.C;

        }else if (instruct === 5){ 
            out.push(combo(value)%8)

        } else if (instruct === 6) {
            registers.B=Math.trunc(registers.A / 2**combo(value))
        } else if (instruct === 7) {
            registers.C=Math.trunc(registers.A / 2**combo(value))
        }
        ptr+=2
    }
    return out.join(",")
}
