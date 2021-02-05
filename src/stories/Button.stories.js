import React from 'react';
import Button from '../component/Button/Button';

export default {
  title: 'Button',
  
  component: Button,
  args:{
    label: 'Tombol'
  },
  argTypes:{
    handleClick: { action: 'handleclick works' }
  },
}

export const buttonExample = () => <Button label={'Tombol'} variant={'primary'}/>

const Template = (args) => <Button {...args}/>

export const primary = Template.bind({})
primary.args={
  variant: 'primary'
}

export const secondary = Template.bind({})
secondary.args={
  variant: 'secondary'
}

export const danger = Template.bind({})
danger.args={
  variant: 'danger'
}

export const success = Template.bind({})
success.args={
  variant: 'success'
}