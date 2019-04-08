
import { Reducer } from 'redux'
import { FlashesState } from './types'
import { ActionType } from './actions'

export const initialState: FlashesState = {
  message: undefined
}

export const flashesReducer: Reducer<FlashesState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ShowFlash: {
      return {
        ...state,
        message: action.payload.message
      }
    }
    case ActionType.HideFlash: {
      return {
        ...state,
        message: undefined
      }
    }
    default: {
      return state
    }
  }
}