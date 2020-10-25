import { SignUpController } from './SignUpController'
import { MissingParamError } from '../errors/missing-param-errors'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'thiago',
        password: '123',
        confirmPassword: '123'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'thiago',
        email: 'thiago.jsimao.me@gmail.com',
        confirmPassword: '123'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no confirmPassword is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'thiago',
        email: 'thiago.jsimao.me@gmail.com',
        password: '123'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('confirmPassword'))
  })
})
