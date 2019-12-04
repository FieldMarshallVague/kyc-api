import { Logger } from 'log4js';
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA64Ex_RSqF35J87q_rTfwYW14SjtGem8w",
  authDomain: "kyc-api-3806f.firebaseapp.com",
  databaseURL: "https://kyc-api-3806f.firebaseio.com",
  projectId: "kyc-api-3806f",
  storageBucket: "kyc-api-3806f.appspot.com",
  messagingSenderId: "946828824123",
  appId: "1:946828824123:web:098146597636cc508f161e",
  measurementId: "G-88DPXPSFZQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore();

export class WebHookService {

  constructor(
    private log: Logger,
  ) {
    this.init();
  }

  init() {

  }

  get(id: string): any {
    return {};
  }

  create(data: any): any {
    return {};
  }
}