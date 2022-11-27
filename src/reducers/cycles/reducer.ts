import { Cycle } from '../../contexts/CyclesContext'
import { CyclesActionTypes } from './actions';
import { produce } from 'immer';

interface CyclesState {
  cycles: Cycle[]
  currentCycle: Cycle | null
}

export function cyclesReducer(
  state: CyclesState,
  action: { type: CyclesActionTypes; payload: Cycle },
) {
  switch (action.type) {
    case CyclesActionTypes.ADD:
      return produce(state, draft => {
        draft.cycles.push(action.payload)
        draft.currentCycle = action.payload
      })
    case CyclesActionTypes.REMOVE:
      return produce(state, draft => {
        draft.cycles = draft.cycles.filter(
          cycle => cycle.id !== action.payload.id,
        )
      })
    case CyclesActionTypes.STOP:
      return produce(state, draft => {
        draft.currentCycle = null
        draft.cycles = draft.cycles.map(cycle =>
          cycle.id === action.payload.id ? action.payload : cycle,
        )
      })
    default:
      return state
  }
}
