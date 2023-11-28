import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { UserProvider, ProductsProvider } from './components/Provider'
import { lazy, Suspense } from 'react'

const UserHome = lazy(()=> import("./Pages/UserHome"))
const UserCreate = lazy(()=> import("./Pages/UsersCreate"))
const NoMatch = lazy(()=> import("./components/NoMatch"))
function App() {

  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <NavBar />
          <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/usuarios" element={<UserHome />} />
            <Route path="/create-usuarios" element={<UserCreate />} />
            <Route path="/usuarios/:id" element={<UserCreate />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          </Suspense>
          
        </ProductsProvider>
      </UserProvider>
    </>
  )
}


export default App
