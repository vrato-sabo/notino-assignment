import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailPage } from './pages/DetailPage'
import { HomePage } from './pages/HomePage'
import { Characters } from './types/types'

type ContextType = {
  data: Characters
  setData: React.Dispatch<React.SetStateAction<Characters>>
}

export const AppContext = createContext<ContextType>({
  data: [],
  setData: () => {},
})

export const App = () => {
  const [data, setData] = useState<Characters>([])

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:title' element={<DetailPage />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  )
}
