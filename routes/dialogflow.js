var express = require('express')
var router = express.Router()
const { WebhookClient } = require('dialogflow-fulfillment')
const utils = require('../helpers/utils')

router.post('/', express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })

  function welcomeIntent (agent) {
    // console.log(agent)
    const query = agent.query
    console.log(query.search('robot'))
    console.log(utils.getCardType(query))
    const result = utils.getCardType(query)
    console.log(result)
    const context = {
      name: 'selectedCard',
      lifespan: 4,
      parameters: {
        typeOfCard: result.context
      }
    }
    agent.context.set(context)
    return agent.add(result.message)
  }

  function secondDigit (agent) {
    // console.log(agent)
    const params = agent.parameters.name.name ? agent.parameters.name.name : ''
    console.log(params)
    const query = agent.query
    console.log(query)
    const secondDigit = utils.getSecondDigit(query, params)
    console.log(params, query, secondDigit)
    const secondDigitContext = {
      name: 'selectedCard',
      lifespan: 4,
      parameters: {
        secondDigit: secondDigit
      }
    }
    agent.context.set(secondDigitContext)
    return agent.add('¡Claro que si, ¿Cómo quieres que te la diga?')
  }

  function firstDigit (agent) {
    // console.log(agent)
    const query = agent.query
    console.log(query)
    const firstDigit = utils.getSecondDigit(query)
    console.log(query, firstDigit)
    const firstDigitContext = {
      name: 'selectedCard',
      lifespan: 4,
      parameters: {
        firstDigit: firstDigit
      }
    }
    agent.context.set(firstDigitContext)
    const stackValue = utils.getStackValue(agent.contexts, firstDigit)
    console.log(stackValue)
    const selectedCard = utils.getCard(stackValue)
    console.log(selectedCard)
    return agent.add(`Es ${selectedCard}, ¡gracias por participar!`)
  }

  const intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcomeIntent)
  intentMap.set('Default Welcome Intent-secondDigit', secondDigit)
  intentMap.set('Default Welcome Intent-firstDigit', firstDigit)
  agent.handleRequest(intentMap)
})

module.exports = router
