import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { Character } from '../components/Character'
import { LoadSpinner } from '../components/LoadSpinner'
import { useGetCharacters } from '../hooks/hooks'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  font-size: xx-large;
  text-align: center;
  margin: 80px 0;
`

export const HomePage = () => {
  const { setData } = useContext(AppContext)
  const { data: characters, isLoading, isFetching } = useGetCharacters()

  React.useEffect(() => {
    if (!characters) return
    setData(characters)
  }, [characters, setData])

  if (isLoading && isFetching) return <LoadSpinner />

  if (!characters) return <>No data</>

  return (
    <>
      <Heading>List of few LOTR characters</Heading>
      <Container>
        {characters.map(({ _id, name, gender, race }) => (
          <Character key={_id} name={name} gender={gender} race={race} />
        ))}
      </Container>
    </>
  )
}
