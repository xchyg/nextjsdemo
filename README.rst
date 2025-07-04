=========
next
=========



::

	npx create-next-app nextdemo1


next-env.d.ts::

	/// <reference types="next" />
	/// <reference types="next/image-types/global" />



app 和 pages
----------------------

两种不同的路由方式

Pages Router（传统路由）
App Router（实验性）

pages 是一个文件一个路由. 子目录下 index 文件则是默认路由

app 是必须有目录, 目录下 page 文件是默认路由


app::

	# 路由布局文件
	app\post\layout.tsx

	# /post
	app\post\page.tsx

	# /post/1
	app\post\[id]\page.tsx


pages::

	# /todo
	pages\todo\index.tsx

	# /todo/home
	pages\todo\home.tsx

	# /todo/1
	pages\todo\[id].tsx


next/router 和 next/navigation 是两个用于处理路由导航的核心模块，但它们分别对应 Pages Router 和 App Router
::

	功能	next/router	next/navigation
	获取当前路由	useRouter().pathname	usePathname()
	获取路由参数	useRouter().query	useParams()（客户端）
	params prop（服务器）
	获取查询参数	useRouter().query	useSearchParams()（客户端）
	导航到新页面	router.push('/path')	useRouter().push('/path')（客户端）
	替换当前页面	router.replace('/path')	useRouter().replace('/path')（客户端）
	服务端重定向	不支持（需在 getServerSideProps 中处理）	redirect('/path')（服务器）
	声明式导航	Link 组件	Link 组件


组件
-----------------------
::

	特性	服务端组件（默认）	客户端组件（标记 "use client"）
	渲染位置	服务器端	客户端（浏览器）
	执行环境	无浏览器 API（无 window, document）	完整浏览器环境
	Hooks 支持	仅支持有限 Hooks（如 use）	支持所有 React Hooks
	状态管理	无本地状态（如 useState）	可使用 useState, useReducer
	交互能力	静态展示，无事件监听	支持完整交互（点击、表单等）
	性能	更快的初始渲染，更小的客户端 JS	支持动态功能，但增加 JS 负载
	数据获取	直接在组件中使用 fetch（自动缓存）	需通过 useEffect 或其他异步方式

