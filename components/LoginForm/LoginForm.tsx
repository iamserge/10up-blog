import { useState } from 'react';
import styles from './LoginForm.module.scss';
import { useRouter } from 'next/router';
import { useGlobal } from '../../providers/global';

const LoginForm = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const { loginUser, loginError, loggedIn } = useGlobal();
    const router = useRouter()
    const [ validationError, setValidationError ] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0 || password.length === 0) {
            setValidationError(true);
        } else {
            loginUser({
                username,
                password
            })
        }
        
    }
    if (loggedIn) {
        router && router.push('/');
        return (
            <div className={`login ${styles.login}`}>
                <div className={`${styles.error} message`}>
                    Hello {username}, you are logged in
                </div>
            </div>
        )
    } else {
        return (
            <div className={`login ${styles.login}`}>
                <form onSubmit={onSubmit}>
                    { loginError && (
                        <div className={`error ${styles.error}`}>
                            Incorrect username or password
                        </div>
                    )}
                    { validationError && (
                        <div className={`error ${styles.error}`}>
                            Both username and password are required
                        </div>
                    )}
                    <div className={styles["input-container"]}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div className={styles["input-container"]}>
                        <input type="submit" value="Submit" id="submit" />
                    </div>
                </form>
            </div>
        );
    }
    
};

export default LoginForm;
