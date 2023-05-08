import classes from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={classes.login_container}>
            <div className={classes.login}>
                <h1>Login</h1>
                <form action="" method="post" className={classes.login_form}>
                    <div className={classes.login_input}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div  className={classes.login_input}>
                        <label htmlFor="username">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button className='button'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm