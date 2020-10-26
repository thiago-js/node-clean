export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Propert ${paramName} is invalid!`)
    this.name = 'InvalidParamError'
  }
}
