import { initializeApp } from "firebase/app"
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
            
            this._db = getFirestore();
            
            this._initalized = true;
        }
    }

    static db() {
        return this._db;
    }

    static hd() {
        return this.app.storage();
    }
}