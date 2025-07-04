import Link from 'next/link'

export default function PostIndex() {
    return <div>
        <h3>文章首页</h3>
        <div>
            <Link href="/post/1" className='underline text-blue-400'>文章1</Link>
            {/* prefetch 预加载 */}
            <Link href="/post/2" prefetch className='underline text-blue-400'>文章2 已预加载</Link>
        </div>
    </div>
}