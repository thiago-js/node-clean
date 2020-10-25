export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Propert ${paramName} is required!`)
    this.name = 'MissingParamError'
  }
}
