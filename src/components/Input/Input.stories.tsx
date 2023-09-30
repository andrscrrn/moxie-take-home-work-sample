import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const BaseInput: Story = {
  args: {
    placeholder: 'Input',
  },
}

export const InputWithLabel: Story = {
  args: {
    placeholder: 'Input',
    label: 'Label',
  },
}
