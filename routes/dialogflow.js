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
      name: 'typeOfCard',
      lifespan: 4,
      parameters: {
        type: result.context
      }
    }
    agent.context.set(context)
    return agent.add(result.message)
  }

  function secondDigit (agent) {
    console.log(agent)

  }

  const intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcomeIntent)
  intentMap.set('Default Welcome Intent-secondDigit', secondDigit)
  
  agent.handleRequest(intentMap)
})

module.exports = router
