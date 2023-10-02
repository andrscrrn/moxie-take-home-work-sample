import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const BaseCheckbox: Story = {
  args: {
    placeholder: 'Checkbox',
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    placeholder: 'Checkbox',
    label:
      'We ask that you please reschedule or cancel at least 24 hours before the beginning of your appointment or you may be charged a cancellation fee of $50. In the event of emergency, contact us directly. Your card will held in case of late cancellation and for future purchases. It will not be charged now.',
  },
}
