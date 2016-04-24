import { expect } from 'chai'
import mailSupport from '../src/index'

// Load file
const mockFileCss = __dirname + '/fixtures.css'

describe('mail-support', () => {
  it('test', () => {
    console.log( mailSupport(mockFileCss) )
  })
})
