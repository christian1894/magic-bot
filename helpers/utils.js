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
  const foundNameLength = params ? params.length : 0
  const firstLetter = query[0].toLocaleLowerCase()
  let result
  switch (firstLetter) {
    case 'p':
      result = foundNameLength > 0 ? 6 : 1
      break
    case 'n':
      result = foundNameLength > 0 ? 7 : 2
      break
    case 'm':
      result = foundNameLength > 0 ? 8 : 3
      break
    case 'q':
      result = foundNameLength > 0 ? 9 : 4
      break
    case 'd':
      result = foundNameLength > 0 ? 0 : 5
      break
    case 'e':
      result = foundNameLength > 0 ? 0 : 5
      break
  }
  console.log(result)
  return result
}

function getStackValue (contexts, firstDigit) {
  console.log(contexts)
  const selectedCardContext = contexts.find((context) => context.name === 'selectedcard')
  console.log(selectedCardContext.parameters.typeOfCard)
  firstDigit = selectedCardContext.parameters.typeOfCard === '2-digit' ? String(firstDigit) : ''
  console.log(firstDigit)
  return Number(firstDigit + String(selectedCardContext.parameters.secondDigit))
}

function getCard (stackValue) {
  let card
  switch (stackValue) {
    case 1:
      card = '4♣'
      break
    case 2:
      card = '2♥'
      break
    case 3:
      card = '7♦'
      break
    case 4:
      card = '3♣'
      break
    case 5:
      card = '4♥'
      break
    case 6:
      card = '6♦'
      break
    case 7:
      card = 'A♠'
      break
    case 8:
      card = '5♥'
      break
    case 9:
      card = '9♠'
      break
    case 10:
      card = '2♠'
      break
    case 11:
      card = 'Q♥'
      break
    case 12:
      card = '3♦'
      break
    case 13:
      card = 'Q♣'
      break
    case 14:
      card = '8♥'
      break
    case 15:
      card = '6♠'
      break
    case 16:
      card = '5♠'
      break
    case 17:
      card = '9♥'
      break
    case 18:
      card = 'K♣'
      break
    case 19:
      card = '2♦'
      break
    case 20:
      card = 'J♥'
      break
    case 21:
      card = '3♠'
      break
    case 22:
      card = '8♠'
      break
    case 23:
      card = '6♥'
      break
    case 24:
      card = '10♣'
      break
    case 25:
      card = '5♦'
      break
    case 26:
      card = 'K♦'
      break
    case 27:
      card = '2♣'
      break
    case 28:
      card = '3♥'
      break
    case 29:
      card = '8♦'
      break
    case 30:
      card = '5♣'
      break
    case 31:
      card = 'K♠'
      break
    case 32:
      card = 'J♦'
      break
    case 33:
      card = '8♣'
      break
    case 34:
      card = '10♠'
      break
    case 35:
      card = 'K♥'
      break
    case 36:
      card = 'J♣'
      break
    case 37:
      card = '7♠'
      break
    case 38:
      card = '10♥'
      break
    case 39:
      card = 'A♦'
      break
    case 40:
      card = '4♠'
      break
    case 41:
      card = '7♥'
      break
    case 42:
      card = '4♦'
      break
    case 43:
      card = 'A♣'
      break
    case 44:
      card = '9♣'
      break
    case 45:
      card = 'J♠'
      break
    case 46:
      card = 'Q♦'
      break
    case 47:
      card = '7♣'
      break
    case 48:
      card = 'Q♠'
      break
    case 49:
      card = '10♦'
      break
    case 50:
      card = '6♣'
      break
    case 51:
      card = 'A♥'
      break
    case 52:
      card = '9♦'
      break
  }
  return card
}

module.exports = {
  getCardType,
  getSecondDigit,
  getStackValue,
  getCard
}
