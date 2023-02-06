import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$md',
  boxSizing: 'border-box',

  padding: '$3 $4',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  minHeight: 80,
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
