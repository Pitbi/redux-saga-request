
import { Reducer } from 'redux'
import { MembersState } from './types'

export const initialState: MembersState = {
  all: [],
  current: undefined
}

export const membersReducer: Reducer<MembersState> = (state = initialState, action) => {
  switch (action.type) {
    
    default: {
      return state
    }
  }
}