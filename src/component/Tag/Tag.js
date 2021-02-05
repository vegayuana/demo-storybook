import React from 'react';
import './tag.css'

export default function Tag(props) {
  const { color, withShadow, data=[], onHover } = props;
  return (
    <div>
      <h1 style={color && {color}}>Tags</h1>
      {data.map(item=>(
        <div className={`card ${withShadow && 'shadow'}`} onMouseOver={onHover}>
          <h2 style={color && {color}}>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
