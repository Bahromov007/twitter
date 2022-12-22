import { useRouter } from "next/router"
export default function User() {
  const router = useRouter()
  return(
      // <h1>User {router.query.user}</h1>
      <h1>user</h1>
  )
}