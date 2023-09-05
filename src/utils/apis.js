export const token = localStorage.getItem("token")
const Domain = "https://blog-firebase-7tk1.onrender.com/"

export const LoginAPI = `${Domain}api/auth/login`
export const GetAllPostsAPI = `${Domain}api/blogs`
export const GetSinglePostAPI = (id) => `${Domain}api/blogs/${id}`