import RequestActions from '../src/RequestActions'

const expectedActions = ['request', 'success', 'failure', 'cancel', 'progress']

const requestActions = new RequestActions('TEST')

describe('RequestAction', () => {
  test('Expect type, action, types & actions', () => {
    expect(requestActions.type).toBe('@@RA_TEST')
    expect(requestActions.action).toBeInstanceOf(Function)
    expect(Object.keys(requestActions.types)).toHaveLength(expectedActions.length)
    expect(Object.keys(requestActions.actions)).toHaveLength(expectedActions.length)
    expectedActions.forEach(action => {
      expect(requestActions.types[action]).toBe(`@@RA_TEST_${action.toUpperCase()}`)
      expect(requestActions.actions[action]).toBeInstanceOf(Function)
    })
  })
  test('Expect action result', () => {
    const data = { 
      payload: { test: 1 },
      query: 'id=x'
    }
    const reduxAction = requestActions.action(data)
    expect(reduxAction).toEqual({
      type: '@@RA_TEST',
      ...data
    })
  })
  test('Expect actions result', () => {
    const data = { 
      payload: { test: 1 },
      query: 'id=x'
    }
    expectedActions.forEach(action => {
      const reduxAction = requestActions.actions[action](data)
      expect(reduxAction).toEqual({
        type: `@@RA_TEST_${action.toUpperCase()}`,
        ...data
      })
    })
  })
})