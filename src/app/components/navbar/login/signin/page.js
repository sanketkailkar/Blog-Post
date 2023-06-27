export default function SignIn(){
    return (
        <main className="w-full min-h-screen">
            <form className="flex justify-center items-center flex-col border w-1/2 mx-auto">
                <input type="email" id="email" name="email"/>
                <input type="password" name="password" id="password" />
                <button type="submit">Sign in</button>
            </form>
        </main>
    )
}