
import { Reducer } from 'redux'
import { MembersState } from './types'
import { MembersRestActions } from './actions'

export const initialState: MembersState = {
  all: [],
  current: undefined,
  loading: false,
  fetchProgress: 0
}

export const membersReducer: Reducer<MembersState> = (state = initialState, action) => {
  switch (action.type) {
    case MembersRestActions.get.types.request: {
      return {
        ...state,
        all: [],
        loading: true,
        fetchProgress: 0
      }
    }
    case MembersRestActions.get.types.progress: {
      return {
        ...state,
        fetchProgress: action.payload.percent
      }
    }
    case MembersRestActions.get.types.success: {
      return {
        ...state,
        all: action.payload.members,
        loading: false
      }
    }
    default: {
      return state
    }
  }
}