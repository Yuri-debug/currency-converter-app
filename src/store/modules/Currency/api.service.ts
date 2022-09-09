import { AxiosResponse } from 'axios'
import { HttpService } from '../../../services'
import { TResponse } from '../../types'

export class ApiCurrencyService extends HttpService {
  static get(url: string): Promise<AxiosResponse<TResponse>> {
    const response = this.request({
      url: url,
      method: 'GET',
    })

    return response
  }
}
