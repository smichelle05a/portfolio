import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'https://api.github.com/users/smichelle05a/repos'
const KEY = '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'

const HEADERS = {
  "Authorization": `Token ${KEY}`
}

function useFetch () {
  const [repos, setRepos] = useState([])

  useEffect(()=>{
    fetch(`${URL}`, {
      headers: HEADERS
    })
      .then(res => res.json())
      .then(reposData => setRepos(reposData))
  }, [])

  return repos
}

export default useFetch
