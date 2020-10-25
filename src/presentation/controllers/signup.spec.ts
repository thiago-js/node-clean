import { SignUpController } from './SignUpController'

describe('Signup Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'thiago',
        password: '123',
        confirmPassword: '123'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
