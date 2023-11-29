import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { UserProvider, ProductsProvider } from './components/Provider'
import { lazy, Suspense } from 'react'
import {Toaster } from "sonner";

const ProductCreate = lazy (()=> import('./Pages/ProductCreate'))
const ProductsHome = lazy (()=>import("./Pages/ProductsHome"))
const UserHome = lazy(()=> import("./Pages/UserHome"))
const UserCreate = lazy(()=> import("./Pages/UsersCreate"))
const NoMatch = lazy(()=> import("./components/NoMatch"))
function App() {

  return (
    < >
      <UserProvider>
        <ProductsProvider>
          <NavBar/>
          <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/usuarios" element={<UserHome />} />
            <Route path="/create-usuarios" element={<UserCreate />} />
            <Route path="/usuarios/:id" element={<UserCreate />} />
            <Route path="/productos" element={<ProductsHome/>} />
            <Route path="/create-products" element={<ProductCreate />} />
            
            <Route path="/productos/:id" element={<ProductCreate />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          </Suspense>
          <Toaster/>
        </ProductsProvider>
      </UserProvider>
    </>
  )
}


export default App
