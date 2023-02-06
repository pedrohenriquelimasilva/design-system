import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$mb',
  padding: '$4',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as: ElementType
}

Box.displayName = 'Box'
