const verificaAlfabeto = (stringDeEntrada) => {
  // insira seu código aqui e retorne a resposta
  const completeAlphabet = "abcdefghijklmnopqrstuvwxyz"
  
  if (stringDeEntrada.length < 26) {
    return false
  }

  else {
    let entrada = stringDeEntrada.toLowerCase()
    entrada = entrada.split("")
    entrada = Array.from(entrada)
    
    let alfabeto = completeAlphabet.split("")
    alfabeto = Array.from(alfabeto)

    if(alfabeto.every(l => entrada.includes(l))) {
      return true
    }

    else {
      return false
    }

  }
  return; //resposta
};

export default verificaAlfabeto;
