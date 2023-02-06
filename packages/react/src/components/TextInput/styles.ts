import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  padding: '$3 $4',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontWeight: 'regular',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const Input = styled('input', {
  border: 0,
  backgroundColor: 'transparent',
  color: '$white',
  width: '100%',
  fontFamily: '$default',
  fontWeight: 'regular',
  fontSize: '$sm',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
