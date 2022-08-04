import React from 'react'
import styled from 'styled-components'
import '../App.css'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadSpinner = () => {
  return (
    <Wrapper>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  )
}
