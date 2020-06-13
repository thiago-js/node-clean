import SignUp from './SignUp'

describe('SignUp Handler', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SignUp()
    const httpRequest = {
      body: {
        email: 'name',
        password: 'password',
        passwordConfirmation: 'passwordConfirmation'
      }
    }
    const httpHandle = sut.start(httpRequest)

    expect(httpHandle.statusCode).toBe(400)
    expect(httpHandle.body).toEqual(new Error('Missing param: name'))
  })
})
