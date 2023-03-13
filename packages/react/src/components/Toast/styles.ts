import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  background: '$gray800',
  padding: '$3 $5',
  width: '100%',
  maxWidth: '22.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  borderRadius: '$md',
  border: '1px solid $gray600',
  fontFamily: 'Roboto',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  fontSize: '$xl',
})

export const ToastAction = styled(Toast.Action, {
  background: 'transparent',
  border: '0',
  cursor: 'pointer',
  svg: {
    color: '$gray200',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '$:hover': {
      color: '$gray400',
    },
  },
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})
