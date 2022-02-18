import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

export class Firebase {
    constructor() {
        this._initalized = false;

        this._config = {
            apiKey: "AIzaSyDLHcK6YjS7UE488xFZHekvpuUVdI3YAAU",
            authDomain: "whatsapp-clone-a93a1.firebaseapp.com",
            projectId: "whatsapp-clone-a93a1",
            storageBucket: "whatsapp-clone-a93a1.appspot.com",
            messagingSenderId: "581697670637",
            appId: "1:581697670637:web:335895873a7db4313c6be4",
            measurementId: "G-CBSWX6CTZV"
        }

        this.init();
    }

    init() {
        if(!this._initalized) {
            this.app = initializeApp(this._config);
            
            this._db = getFirestore(this.app);
            
            this._initalized = true;
        }
    }

    static db() {
        return this._db;
    }

    static hd() {
        return this.app.storage();
    }

    initAuth() {
        return new Promise((s, f) => {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();

            signInWithPopup(auth, provider).then(result=> {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                let token = credential.accessToken;
                let user = result.user;

                s({user, token});
            }).catch(err => {
                console.error(err);
            });
        });
    }
}