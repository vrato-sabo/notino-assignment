import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 10px 20px;
  background-color: #4f6c77;
  color: #eaeeef;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    color: #eaeeef;
  }
`

type Props = {
  name: string
  race: string
  gender: string
}

export const Character = ({ name, race, gender }: Props) => {
  return (
    <StyledLink to={`/${name}`}>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Race: {race}</p>
    </StyledLink>
  )
}
