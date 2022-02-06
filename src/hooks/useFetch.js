import { useState, useEffect } from 'react';

const HEADERS = {
  "Authorization": `Token ${process.env.NEXT_PUBLIC_GH_TOKEN}`
}

function useFetch () {
  const [repos, setRepos] = useState([])

  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_GH_URL}`, {
      headers: HEADERS
    })
      .then(res => res.json())
      .then(reposData => setRepos(reposData))
  }, [])

  return repos
}

export default useFetch
