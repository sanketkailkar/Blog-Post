'use client'

export default function Login() {
    return (
        <>
        <div className="m-20 flex items-center justify-center">
                <div className=" bg-white flex flex-col p-5 rounded-xl sm:w-5/6 xl:w-1/3 border-2 px-5 py-10">
                    <input
                        className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
                        type="text"
                        placeholder="Email address or phone number"
                    />
                    <input
                        className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
                        Log in
                    </button>
                    <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">
                        Forgotten password?
                    </p>    
                    <span className="my-2">
                        <hr />
                    </span>
                    <button className="bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">
                        Create new account
                    </button>
                </div>
            </div>
        </>
    )
}