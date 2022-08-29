import React from 'react'

export default function Detail(props) {
  return (
    <div>
        Giá trị tham số : {props.match.params.id}
        Giá trị tham số : {props.match.path}
        Giá trị tham số : {props.match.url}
    </div>
  )
}
