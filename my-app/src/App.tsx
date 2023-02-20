// https://github.com/gopinav/React-Query-Tutorials 

import './App.css' 
import AllRoutes from './routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import  Home  from './pages/Home'
import  { Superhero }   from './pages/Superhero'
import RQsuperhero from './pages/RQsuperhero'

const queryClient = new QueryClient()

function App() {
     return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
       <AllRoutes />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/super-heroes" element={<Superhero />} />
              <Route path="/rq-super-heroes" element={<RQsuperhero />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      
  
     )
}

export default App