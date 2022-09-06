import { Component, createEffect, createSignal } from 'solid-js';
import { Routes, Route } from "@solidjs/router"
import Nav from './components/Nav'
import Home from './pages/Home'
import SavedRepos from './pages/SavedRepos'

const [username, setUsername ] = createSignal('pciruelos')
const [respos, setRepos ] = createSignal([])

const App: Component = () => {

  createEffect(async()=> {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
  })

  return (
    <div class="w-screen h-screen bg-gray-700">
      <Nav />
      <div class="w-[80%] mx-auto py-5">
          <h1 class="text-xl text-white pb-5">App component are render here</h1>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path='/fav' element={<SavedRepos />}/>
        </Routes>

      </div>
    </div>
  );
};

export { username, setUsername, respos}
export default App;
