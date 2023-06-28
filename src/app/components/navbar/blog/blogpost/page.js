
export default function Blogpost({title, descp}) {
    return <div>
        <h1>Hello Blogpost</h1>
        <h1>{title}</h1>
        <p>{descp}</p>
        {/* {Posts.map(({ Post }) => (
        <div key={Post.it}>
            <div className="max-w-full border border-gray-200 shadow-md bg-gradient-to-r from-[#08203E] from-10% via-[#0e1c26] via-50% to-[#08203E] to-100% rounded-md dark:border-gray-700 my-10">
                <Link href="">
                    {/* <img className="" width="px" src="" alt="" />
                </Link>
                <div className="p-5">
                    <Link href="">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {Post.title}
                        </h5>
                    </Link>
                    <p className="mb-3 font-sm text-gray-700 dark:text-gray-400 text-sm">
                        {Post.descp}
                    </p>
                    <Link
                        href={Post.link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        target="_blank"
                    >
                        Read more
                    </Link>
                </div>
            </div></div>
            ))} */}
    </div>
}