import RestSagas from '../src/RestSagas'
import RestActions from '../src/RestActions'
import RequestSagas from '../src/RequestSagas'

const expectedMethods = ['get', 'getOne', 'post', 'put', 'delete', 'patch']

const restActions = new RestActions('TEST')
const restSagas = new RestSagas(restActions, {
  baseUrl: '/test'
})

describe('RestAction', () => {
  describe('Build urls', () => {
    test('Item urls', () => {
      const itemMethods = ['getOne', 'put', 'delete', 'patch']
      itemMethods.forEach((method: string) => {
        const url = restSagas._buildUrl(method)
        expect(url).toBe('/test/:id')
      })
    })
    test('Resource urls', () => {
      const itemMethods = ['get', 'post']
      itemMethods.forEach((method: string) => {
        const url = restSagas._buildUrl(method)
        expect(url).toBe('/test')
      })
    })
  })
  test('Expect listeners', () => {
    expect(restSagas.sagas).toHaveLength(expectedMethods.length)
    expect(restSagas.forkSagas).toHaveLength(expectedMethods.length)
  })
  test('Expect rest methods', () => {
    expectedMethods.forEach(method => {
      expect(restSagas[method]).toBeInstanceOf(RequestSagas)
    })
  })
})