import React from 'react'
function Text(props) {
    const {t, children, style,id,onClick} = props;
    const type = t & t
  return (
    <h1
    onClick={onClick}
    className={"text"+type}
    style={style}
    id={id}
    >
        {children}
    </h1>
  )
}
export default Text