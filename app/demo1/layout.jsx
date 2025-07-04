import Link from "next/link";
import { Inter, Source_Code_Pro } from 'next/font/google'
import localFont from 'next/font/local'

// const font = Inter({ subsets: ['latin'] })
const font = Source_Code_Pro({ subsets: ['latin'] })
// 加载本地字体
// const font = localFont({
//     src: './ff.font',
//     display: 'swap'
// })


export default function Demo1Layout({ children }) {
    return <div className={font.className}>
        <div className="flex justify-between container mx-auto absolute text-white">
            <div className="text-3xl font-bold">
                <Link href="/demo1">Home</Link>
            </div>
            <div className=" text-2xl space-x-4">
                <Link href="/demo1/performance">Performance</Link>
                <Link href="/demo1/reliability">Reliability</Link>
                <Link href="/demo1/scale">Scale</Link>
            </div>
        </div>
        {children}
    </div>
}