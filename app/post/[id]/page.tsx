// "use client"
// import { useParams } from "next/navigation"

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    // 默认是服务端组件 (服务端渲染)
    // You're importing a component that needs `useParams`. This React hook only works in a client component. 
    // To fix, mark the file (or its parent) with the `"use client"` directive.
    // const p = useParams()
    // console.log(p)

    // 服务端组件可以直接方法内异步请求数据

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())

    return <div>文章{id}: {data.title}</div>
}