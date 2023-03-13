import { Box, Button, Tooltip, TooltipProps } from '@components-design-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return <Box css={{ padding: '4rem' }}>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    date: String(new Date()),
    isAvailable: true,
    children: <Button>12</Button>,
  },
}

export const Secondary: StoryObj<TooltipProps> = {
  args: {
    date: String(new Date()),
    children: <Button />,
  },
}
