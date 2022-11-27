import { Cycle } from "../../contexts/CyclesContext";

export enum CyclesActionTypes {
  ADD = 'add',
  REMOVE = 'remove',
  STOP = 'stop',
}

export function addCycleAction(cycle: Cycle) {
  return {
    type: CyclesActionTypes.ADD,
    payload: cycle,
  }
}

export function removeCycleAction(cycle: Cycle) {
  return {
    type: CyclesActionTypes.REMOVE,
    payload: cycle,
  }
}

export function stopCycleAction(cycle: Cycle) {
  return {
    type: CyclesActionTypes.STOP,
    payload: cycle,
  }
}
