import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/index'
import AllBlog from './pages/all-blog'
import CreateBlog from './pages/create-blog'
import PostDetail from './pages/post-detail'

function View() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/all-blogs' element={<AllBlog />}></Route>
      <Route path='/post/:id' element={<PostDetail />}></Route>
      <Route path='/create-blog' element={<CreateBlog />}></Route>
    </Routes>
  )
}

export default View