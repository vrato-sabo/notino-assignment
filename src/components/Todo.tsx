import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 10px 20px;
  background-color: #4f6c77;
  color: #eaeeef;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
    color: #eaeeef;
  }
`

type Props = {
  title: string
}

const TodoComponent = ({ title }: Props) => {
  return (
    <StyledLink to={`/${title.replaceAll(' ', '-').toLowerCase()}`}>
      {title}
    </StyledLink>
  )
}

export const Todo = React.memo(TodoComponent)
