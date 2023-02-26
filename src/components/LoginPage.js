function LoginPage({login}){
    function formlogin(e){
        e.preventDefault()
        login(e.target.username.value, e.target.password.value)
        // console.log(e.target.username.value,e.target.password.value)
    }
 return (
        <div>
            <h2 className="heading">Please Login</h2>
            <form onSubmit={formlogin}>
                <div className="msform-input">
                <div className="msform-textarea">
                
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
                </div>
                </div>
            </form>

            </div>
   )
}


export default LoginPage