import { differenceInSeconds } from 'date-fns'
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { addCycleAction, removeCycleAction, stopCycleAction } from '../reducers/cycles/actions'
import { cyclesReducer } from '../reducers/cycles/reducer'

export interface Cycle {
  id: string
  task: string
  time: number
  start: Date
  end?: Date
  status?: 'finished' | 'in-progress' | 'stopped'
}

interface CyclesContextData {
  cycles: Cycle[]
  currentCycle: Cycle | null
  amountSecondsPassed: number
  updateAmountSecondsPassed: (amount: number) => void
  stopCycle: (status: 'finished' | 'stopped') => void
  addCycle: (cycle: Cycle) => void
  removeCycle: (cycleId: string) => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    currentCycle: null,
  }, () => {
    const localData = localStorage.getItem('@pomodoro-timer:cycles-state-1.0.0')
    return localData ? JSON.parse(localData) : { cycles: [], currentCycle: null }
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@pomodoro-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const { cycles, currentCycle } = cyclesState

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (currentCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(currentCycle.start),
      )
    }
    return 0
  })

  function stopCycle(status: 'finished' | 'stopped') {
    if (currentCycle) {
      const stoppedCycle: Cycle = {
        ...currentCycle,
        status,
        end: new Date(),
      }
      dispatch(stopCycleAction(stoppedCycle))
    }
  }

  function updateAmountSecondsPassed(amount: number): void {
    setAmountSecondsPassed(amount)
  }

  function addCycle(cycle: Cycle): void {
    cycle.status = 'in-progress'
    dispatch(addCycleAction(cycle))
  }

  function removeCycle(cycleId: string): void {
    const cycle = cycles.find((cycle) => cycle.id === cycleId)
    if (cycle) {
      dispatch(removeCycleAction(cycle))
    }    
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles: cyclesState.cycles,
        currentCycle: cyclesState.currentCycle,
        amountSecondsPassed,
        updateAmountSecondsPassed,
        stopCycle,
        addCycle,
        removeCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
