import { Component } from 'solid-js'

export type Repo = {
    id: string 
    html_url: string
    name: string
    description: string
    stargazers_count: string
    owner: {
        login:string
    }
}

interface Props {
    repo: Repo
}

const RepoCard: Component<Props> = ({repo}) => {
  return (
    <div class='bg-white h-200 m-1 rounded-sm'>
        <div class=''>
            <div class='bg-gray-100 border border-gray-400'>
                <p class='pl-2'>⭐Stars : {repo.stargazers_count}</p>
                
            </div>
            <a href={repo.html_url} target='_blank' rel='noreferrer'>
                {repo.owner?.login}/{repo.name}
            </a>
            <p>{repo.description}</p>
            <button class='bg-green-600 px-2 py-1 rounded-sm m-1'>Save</button>
        </div>
    </div>
  )
}

export default RepoCard