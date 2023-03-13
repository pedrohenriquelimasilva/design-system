import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  fontSize: '$md',
  lineHeight: '$short',
  borderRadius: '5px',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
})
