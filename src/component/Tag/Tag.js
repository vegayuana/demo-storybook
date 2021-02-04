import React from 'react';
import './tag.css'

export default function Tag(props) {
  const { color, withShadow, data=[] } = props;
  return (
    <div>
      <h1 style={color && {color}}>Tags</h1>
      {data.map(item=>(
        <div className={`card ${withShadow && 'shadow'}`}>
          <h2 style={color && {color}}>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
