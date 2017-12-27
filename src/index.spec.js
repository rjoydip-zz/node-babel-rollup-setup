const app = require('../dist')

describe('app', () => {
  it('app is truthy', () => {
    expect(app).toBeTruthy()
  })

  it('app text match', () => {
    expect(app.hello()).toEqual('Welcome')
  })
})
