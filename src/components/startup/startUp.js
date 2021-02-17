import styles from './startUp.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';

// Using the auth from reactfire for sing in and out.
function StartUp(props) {

    const auth = useAuth();

    const signIn = async () => {
        //auth is helping for singing in with googleauthprovider
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return(
        <div className={styles.startup}>
                <h1>Global vaccine's Map</h1>
                <div>Welcome to the vaccine global app, where you can order  your own vaccine's. you will need to sign in with your Google Account to use the app </div>
                <Button primary onClick={signIn}>Sign in</Button>
        </div>
    );
}

export default StartUp;