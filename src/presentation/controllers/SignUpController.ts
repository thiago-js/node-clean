export class SignUpController {
  constructor () {
    this.statusError = {
      statusCode: 400
    }
    this.statusSuccess = {
      statusCode: 200
    }
  }

  private readonly statusError
  private readonly statusSuccess

  handle (httpRequest: any): any {
    if (!httpRequest.name) { return this.getMessageError('Propert Name is required!') }

    return this.getMessageSuccess()
  }

  getMessageError (message: string): object {
    return {
      ...this.statusError,
      message
    }
  }

  getMessageSuccess (): object {
    return {
      ...this.statusSuccess
    }
  }
}
