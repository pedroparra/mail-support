import { expect } from 'chai'
import fs from 'fs'
import path from 'path'

import mailSupport from '../src/index'

// Load css
const mockFileCss = fs.readFileSync(__dirname + '/fixtures.css').toString();

describe('mail-support', () => {
    it('test', () => {
      mailSupport.validate()
    })
})
