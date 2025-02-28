import React from 'react'

type Props={
    title:string,
    desc:string
}
export default function Title({title,desc}:Props) {
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{fontSize:40}}>{title}</h2>
      <p style={{fontSize:17}}>{desc}</p>
    </div>
  )
}
