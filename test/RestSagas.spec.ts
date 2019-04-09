import RestSagas from '../src/RequestSagas'
import RequestSagas from '../src/RequestSagas'

const expectedMethods = ['get', 'head', 'post', 'put', 'delete', 'patch']

const restActions = new RestSagas({
  url: '/test',
  method: 'post',
  body: {
    name: 'test'
  }
})

describe('RestAction', () => {
  test('Expect rest methods', () => {
    expectedMethods.forEach(method => {
      expect(restActions[method]).toBeInstanceOf(RequestActions)
    })
  })
  test('Expect get method', () => {
    const type = '@@RA_GET_TEST' 
    expect(restActions.get.type).toBe(type)
    const action = restActions.get.action()
    expect(action).toEqual({ type })
  })
})