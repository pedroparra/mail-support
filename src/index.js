import data from '../data'
import fs from 'fs'
import css from 'css'

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
