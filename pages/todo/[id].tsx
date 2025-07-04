import { useRouter } from "next/router"

export default function TodoDetail() {
    const router = useRouter()
    console.log(router.query)
    const { id } = router.query
    return (
        <div>待办内容{id}</div>
    )
}