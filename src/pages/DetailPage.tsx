import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../App'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: xx-large;
`
const StyledSpan = styled.span`
  font-weight: 600;
  margin: 10px 5px;
`

const isEmpty = (str: string) => {
  if (str === undefined || str === '') {
    return true
  }
  return false
}

const DetailPageComponent = () => {
  const { title } = useParams()
  const { data } = useContext(AppContext)
  const characterArr = data.filter(({ name }) => name === title)
  const character = characterArr?.[0]

  return (
    <Container>
      <div>
        {!isEmpty(character.name) && (
          <p>
            <StyledSpan>Name:</StyledSpan>
            {character.name ?? 'name'}
          </p>
        )}
        {!isEmpty(character.gender) && (
          <p>
            <StyledSpan>Gender:</StyledSpan>
            {character.gender}
          </p>
        )}
        {!isEmpty(character.race) && (
          <p>
            <StyledSpan>Race:</StyledSpan>
            {character.race}
          </p>
        )}
        {!isEmpty(character.birth) && (
          <p>
            <StyledSpan>Birth:</StyledSpan>
            {character.birth}
          </p>
        )}
        {!isEmpty(character.death) && (
          <p>
            <StyledSpan>Death:</StyledSpan>
            {character.death}
          </p>
        )}
        {!isEmpty(character.hair) && (
          <p>
            <StyledSpan>Hair:</StyledSpan>
            {character.hair}
          </p>
        )}
        {!isEmpty(character.height) && (
          <p>
            <StyledSpan>Height:</StyledSpan>
            {character.height}
          </p>
        )}
        {!isEmpty(character.realm) && (
          <p>
            <StyledSpan>Realm:</StyledSpan>
            {character.realm}
          </p>
        )}
        {!isEmpty(character.spouse) && (
          <p>
            <StyledSpan>Spouse:</StyledSpan>
            {character.spouse}
          </p>
        )}
        {!isEmpty(character.wikiUrl) && (
          <p>
            <StyledSpan>Wiki Url:</StyledSpan>
            <a href={character.wikiUrl} target='_blank' rel='noreferrer'>
              {character.wikiUrl}
            </a>
          </p>
        )}
      </div>
    </Container>
  )
}

export const DetailPage = React.memo(DetailPageComponent)
