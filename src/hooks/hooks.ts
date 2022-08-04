import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../api/api'
import { Characters } from '../types/types'

export const useGetCharacters = () =>
  useQuery(['characters'], () => getCharacters(), {
    select: (data) => data.docs as Characters,
  })
