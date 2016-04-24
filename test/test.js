import { expect } from 'chai'
import mailSupport from '../dist/index'

// Load file
const mockFileCss = __dirname + '/fixtures.css'

describe('mail-support', () => {

  it('test response', () => {
    const test = mailSupport(mockFileCss)
    expect(test[0]).to.have.ownProperty('line')
    expect(test[0]).to.have.ownProperty('property')
    expect(test[0]).to.have.ownProperty('clients')
  })

  it('validate property', () => {
    const test = mailSupport(mockFileCss)
    expect(test[0].clients).to.have.ownProperty('android')
    expect(test[0].clients.android).to.have.ownProperty('test')
    expect(test[0].clients.android.test).to.eql('info')
    expect(test[0].clients.android.info).to.eql('Image not stretched')
  })

})
