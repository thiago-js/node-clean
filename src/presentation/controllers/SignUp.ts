import { controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { EmailValidator } from '../../protocols/email-validator'
import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from '../errors/invalid-param-error'

import { badRequest } from '../helpers/http-status'

export class SignUpController implements controller {
  private readonly _emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this._emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'confirmPassword']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    if (!this._emailValidator.isValid(httpRequest.body.email)) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
