import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Logo, LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {},
} as Meta

const Template: Story<LogoProps> = args => <Logo {...args}>Logo</Logo>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  isSmall: false,
}

