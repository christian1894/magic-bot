const getCardType = (query) => {
  if (query.search('robot') === -1) {
    // set two digit context
    console.log('2 digit')
    return { message: 'Hola, soy tu asistente, ¿Cómo te puedo ayudar?', context: '2-digit' }
  } else {
    // set one digit context
    console.log('1 digit')
    return { message: 'Hola, soy tu asistente robot, ¿Cómo te puedo ayudar?', context: '1-digit' }
  }
}
// Receives query as string and found parameters in intent
// and return secondDigit of card in the mnemonic stack
const getSecondDigit = (query, params) => {
  const foundName = params.name.name.length
  const firstLetter = query[0].toLocaleLowerCase()
  let result
  switch (firstLetter) {
    case 'p':
      result = foundName > 0 ? 6 : 1
      break
    case 'n':
      result = foundName > 0 ? 7 : 2
      break
    case 'm':
      result = foundName > 0 ? 8 : 3
      break
    case 'q':
      result = foundName > 0 ? 9 : 4
      break
    case 'd':
      result = foundName > 0 ? 0 : 5
      break
  }
  return result
}

module.exports = {
  getCardType,
  getSecondDigit
}
