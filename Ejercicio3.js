function encontrarDuplicados(numeros){
    const nums = []
    const repetidos = []
    
    numeros.reduce((num1,numE) => {
        if(nums.includes(numE)){
            if(repetidos.includes(numE)){
                return
            }
            repetidos.push(numE)
        }else(
            nums.push(numE)
        )
    })
    console.log(repetidos)
}

const numeros = [2,53,1,5,12,35, 6 ,12, 7, 8,3,  6,2,6,7,8]

encontrarDuplicados(numeros)    