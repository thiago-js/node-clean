import { HttpRequest, HttpResponse } from './http'

export interface controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}
