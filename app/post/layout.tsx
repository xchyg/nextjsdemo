import Link from "next/link";

export default function PostLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>
        <h2><Link href="/post">---文章---</Link></h2>
        {children}
    </div>
}