import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  isSmall: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  isSmall: false,
}
