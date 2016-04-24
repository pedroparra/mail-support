import data from './data'
import fs from 'fs'
import css from 'css'

const template = (line = 'error', property = 'error') => {
  let row = {
    "line": line,
    "property": property,
    "clients": {}
  }
  return row
}

const mailsupport = (file) => {

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

export default mailsupport
