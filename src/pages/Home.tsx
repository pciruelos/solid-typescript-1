import { Component } from 'solid-js'
import { respos, setUsername, username } from '../App'
import RepoCard, { Repo } from '../components/RepoCard'

const Home: Component = () => {
    const refectWithUsername = (e: Event) => {
        e.preventDefault()
        const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
        setUsername(usernameInput.value)
    }
    return (
        <div>
            
            <form class='flex items-center' onSubmit={(e) => { refectWithUsername(e) }}>
                <input type="text" class='px-2 py-1 align-middle' id='usernameInput' required />
                <button class='px-2 py-1 bg-red-400'>Fetch</button>
            </form>
            <h1 class='text-xl text-white py-5'>Github repos for {username()}</h1>
            <div class=' grid md:grid-cols-3 gap-1 '>

                <For each={respos()}>
                    {(repo: Repo) => <RepoCard repo={repo} />}
                </For>
            </div>

        </div>
    )
}

export default Home