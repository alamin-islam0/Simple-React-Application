import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'
import Country from './components/Country/Country'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback = "Loading...">
        <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App