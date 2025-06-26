// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.


function ehDataValida(dia,mes,ano){
    let bissexto
    
    // Verificar Ano bissexto
    if (ano % 4 == 0) {
        if (ano % 100 == 0 & ano % 400 != 0){
            bissexto = false
        } else {
            bissexto = true
        }
    } else {
        bissexto = false
    }

    // Verificar Mes e determinar quantidade de dias 
    let diasDoMes
    if ([1,3,5,7,8,10,12].includes(mes)){
        diasDoMes = 31
    } else if (mes == 2){
        if (bissexto){
            diasDoMes = 29
        } else {
            diasDoMes = 28
        }
    } else if([4,6,9,11].includes(mes)){
        diasDoMes = 30
    } else if ( mes < 1 | mes > 12){
        return false
    }

    // Verificar Dia
    if (dia <= diasDoMes & dia > 0){
        return true
    } else {
        return false
    }

}

// Erros
console.log(ehDataValida(29,22,2000))
console.log(ehDataValida(29,2,1900))
console.log(ehDataValida(31,4,2000))
console.log(ehDataValida(31,11,1990))
console.log(ehDataValida(32,1,2010))
console.log(ehDataValida(15,-1,2010))
console.log(ehDataValida(0,1,2010))

// Datas Corretas
console.log(ehDataValida(29,2,2000))
console.log(ehDataValida(31,12,2020))
console.log(ehDataValida(29,2,2016))
console.log(ehDataValida(30,11,1990))
console.log(ehDataValida(15,11,1980))