import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../errors/missing-param-errors'
import { badRequest } from '../helpers/http-status'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('Name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('Email'))
    }
  }
}
