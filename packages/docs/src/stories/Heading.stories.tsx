import { Heading, HeadingProps } from '@components-design-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custon title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomText: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'Custom title h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading é como tag `h2`, mas podemos trocar com o tag `as` no componente',
      },
    },
  },
}
