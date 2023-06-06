import React from 'react'
import { useSelector } from 'react-redux'

export default function Repositories() {
    const repos = useSelector(state => state.repos)

    return(
        <div className="mainRepositories">
            {repos.map((item) => {
                return (
                    <div className="repoItem">
                        <div className="repoChild">
                            <a href={item.svn_url} target="_blank">{item.name}</a>
                            <button>star</button>
                        </div>
                        <p>last updated 1 hour ago</p>
                    </div>
                )
            })}
        </div>
    )
}
{/* <a>Repository Name 1</a>
<button>Star</button>
<span>Last updated on February 17</span> */}

//  Add a time stamp for 'last updated'