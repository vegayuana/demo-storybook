
import React from 'react';
import Tag from '../component/Tag/Tag';

export default{
  title: '/Test/Tag',
  component: Tag, 
  args:{
    data:[{title:'tag1'}, {title:'tag2'}, {title:'tag3'}],
    color: '#000',
  },
  argTypes:{
    color: { control: 'color'},
    onHover: { action: 'works'},
  },
  decorators:[(Story)=> <div style={{border:'1px solid lightgrey', padding: '10px', textAlign: 'justify', width: '300px'}}><Story/></div>]
}

const Template = (args) => <Tag {...args}/>

export const basic = Template.bind({})

export const shadow = Template.bind({})
shadow.args={
  withShadow:true,
}
