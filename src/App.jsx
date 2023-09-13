import './App.css'
import Posts from './Posts'

function App() {
  return (
    <>
      <h3>Core Concepts of React</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Data Load</li>
        <li>Hooks (useState, useEffect, useContext, useRef, useCallback, useMemo, useReducer)</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App