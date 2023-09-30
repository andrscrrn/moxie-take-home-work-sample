import type { Meta, StoryObj } from '@storybook/react'

import { BottomBar } from './BottomBar'
import { Button } from '../Button/Button'

const meta = {
  title: 'BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomBar>

export default meta
type Story = StoryObj<typeof meta>

export const BaseBottomBar: Story = {
  args: {
    className: 'w-full',
    children: 'BottomBar',
  },
}

export const BottomBarWithElements: Story = {
  args: {
    className: 'w-full',
    children: (
      <Button className="w-full lg:w-auto" label="Continue" size="large" />
    ),
  },
}
