import fs from 'fs'
import css from 'css'

// Data
import android from '../data/android.json'
import apple from '../data/apple.json'
import gmail from '../data/gmail.json'
import ios from '../data/ios.json'
import outlook_express from '../data/outlook_express.json'
import outlook_web from '../data/outlook_web.json'
import outlook from '../data/outlook.json'
import yahoo from '../data/yahoo.json'


const data = {
  android,
  apple,
  gmail,
  ios,
  outlook_express,
  outlook_web,
  outlook,
  yahoo
}

const clients_supported = [
  'android',
  'apple',
  'gmail',
  'ios',
  'outlook',
  'outlook_web',
  'outlook_express',
  'yahoo'
]

const validator = (property = 'error') => {
  let validator_info = {}
  clients_supported.map( client => {
    validator_info[client] = data[client][property] || {
      test: "warning",
      info: "Property not found in data"
    }
  })
  return validator_info
}

const template = (line = 'error', property = 'error') => {
  return {
    line,
    property,
    clients: validator(property)
  }
}

export default file => {

  // Read file
  const FILECSS = fs.readFileSync(file).toString();

  // Parser file and get css properties
  let bufferCssProperties = []
  let obj = css.parse(FILECSS)
  obj.stylesheet.rules.map( rules => {
    rules.declarations.map( declaration => bufferCssProperties.push(declaration) )
  })

  // Test properties
  let result = bufferCssProperties.map(
    prop => template(prop.position.start.line, prop.property)
  )

  return result

}
