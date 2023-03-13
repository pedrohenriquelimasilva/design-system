import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'
import ptBr from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { X } from 'phosphor-react'
import * as ToastUI from '@radix-ui/react-toast'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'

export interface ToastProps {
  isSheduled?: boolean
  dateSheduled: string
}
export function Toast({ isSheduled = true, dateSheduled }: ToastProps) {
  const [isOpenToast, setIsOpenToast] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const date = format(
    new Date(dateSheduled),
    "EEEE'-feira' ',' dd 'de' MMMM 'ás' HH'h'",
    {
      locale: ptBr,
    },
  )

  function handleActiveToast() {
    setIsOpenToast(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setIsOpenToast(true)
    }, 100)
  }
  return (
    <ToastUI.Provider swipeDirection="right">
      <Button onClick={handleActiveToast}>Criar agenda</Button>

      <ToastContainer open={isOpenToast} onOpenChange={setIsOpenToast}>
        <ToastTitle>
          {isSheduled ? 'Agendamento realizado' : 'Agendamento não realizado'}

          <ToastAction altText="Close" asChild>
            <X weight="bold" size={14} />
          </ToastAction>
        </ToastTitle>

        <ToastDescription>{date}</ToastDescription>
      </ToastContainer>

      <ToastUI.Viewport />
    </ToastUI.Provider>
  )
}
