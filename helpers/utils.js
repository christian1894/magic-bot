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

module.exports = {
  getCardType
}
