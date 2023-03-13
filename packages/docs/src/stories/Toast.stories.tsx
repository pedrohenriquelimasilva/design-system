import { Toast, ToastProps, Box } from '@components-design-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    dateSheduled: String(new Date()),
    isSheduled: false,
  },
}

export const Secondary: StoryObj<ToastProps> = {
  args: {
    dateSheduled: String(new Date()),
  },
}
