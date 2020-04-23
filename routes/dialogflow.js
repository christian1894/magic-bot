var express = require('express')
var router = express.Router()
const { WebhookClient } = require('dialogflow-fulfillment')
const utils = require('../helpers/utils')

router.post('/', express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })

  function welcomeIntent (agent) {
    console.log(agent)
    const query = agent.query
    console.log(query.search('robot'))
    console.log(utils.getCardType(query))
    const result = utils.getCardType(query)
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
    console.log(agent)
    const params = agent.parameters
    const query = agent.query
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

  const intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcomeIntent)
  intentMap.set('Default Welcome Intent-secondDigit', secondDigit)
  agent.handleRequest(intentMap)
})

module.exports = router
