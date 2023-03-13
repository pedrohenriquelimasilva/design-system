import * as TooltipUI from '@radix-ui/react-tooltip'
import { format } from 'date-fns'
import { TooltipContent, TooltipTrigger } from './style'
import ptBr from 'date-fns/locale/pt-BR'
import { ReactNode } from 'react'

export interface TooltipProps {
  date: string
  isAvailable?: boolean
  children: ReactNode
}

export function Tooltip({ date, isAvailable = false, children }: TooltipProps) {
  const dateAvailable = format(new Date(date), "dd 'de' MMMM ", {
    locale: ptBr,
  })
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipUI.Portal>
          <TooltipContent data-side="bottom" align="center">
            {`${dateAvailable} - ${
              isAvailable ? 'Disponível' : 'Indisponível'
            }`}
            <TooltipUI.Arrow width={16} height={8} />
          </TooltipContent>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}
