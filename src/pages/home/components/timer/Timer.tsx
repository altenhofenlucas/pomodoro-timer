import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { Separator, TimerContainer } from './Timer.styles'

export function Timer() {
  const {
    currentCycle,
    stopCycle,
    amountSecondsPassed,
    updateAmountSecondsPassed,
  } = useContext(CyclesContext)

  const totalSecondsFromCurrentCycle = currentCycle ? currentCycle.time * 60 : 0
  const currentSecondsFromCurrentCycle = currentCycle
    ? totalSecondsFromCurrentCycle - amountSecondsPassed
    : 0

  const minutesAmount = Math.floor(currentSecondsFromCurrentCycle / 60)
  const secondsAmount = currentSecondsFromCurrentCycle % 60

  const minutesAmountFormatted = minutesAmount.toString().padStart(2, '0')
  const secondsAmountFormatted = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    let interval: number
    if (currentCycle) {
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          new Date(currentCycle.start),
        )

        if (secondsPassed >= totalSecondsFromCurrentCycle) {
          stopCycle('finished')
          updateAmountSecondsPassed(0)
        } else {
          updateAmountSecondsPassed(secondsPassed)
        }
      }, 200)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    currentCycle,
    totalSecondsFromCurrentCycle,
    stopCycle,
    updateAmountSecondsPassed,
  ])

  useEffect(() => {
    if (currentCycle) {
      document.title = `${minutesAmountFormatted}:${secondsAmountFormatted} - Pomodoro`
    } else {
      document.title = 'Pomodoro'
    }
  }, [currentCycle, minutesAmountFormatted, secondsAmountFormatted])

  return (
    <TimerContainer>
      <span>{minutesAmountFormatted[0]}</span>
      <span>{minutesAmountFormatted[1]}</span>
      <Separator>:</Separator>
      <span>{secondsAmountFormatted[0]}</span>
      <span>{secondsAmountFormatted[1]}</span>
    </TimerContainer>
  )
}
