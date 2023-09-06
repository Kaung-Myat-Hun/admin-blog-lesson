import {useState, useEffect} from 'react'
import axios from 'axios'
import { token } from './apis'

export const GetDataHook = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    axios.get(url).then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
      setLoading(false)
    }).catch((err) => console.error(err))
  }, [])
  return {data, loading}
}

export const PostFunction = (url , data) => {
  return axios.post(url, data, {
    headers: {
      Accept: "application/json"
    }
  })
}

export const DeleteFunction = (url) => {
  return axios.delete(url, {
    headers: {
      Accept: "application/json",
      token : token
    }
  })
}

export const UpdateFunction = (url, data) => {
  return axios.put(url, data , {
    headers: {
      Accept: "application/json",
      token: token
    }
  })
}

export const LogoutFunction = () => {
  localStorage.clear();
  window.location.reload();
}