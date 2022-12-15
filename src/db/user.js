import { db } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

export const getUserData = async (userID) => {
    const docSnap = await getDoc(doc(db, "users", userID));
    if (docSnap.exists()) {
        return docSnap;
    } else {
        alert("Document does not exist")
    }
        // .then(() => {
        //     console.log(docSnap);
        //     return docSnap.data;
        // })
        // .catch(error => alert(error.message))

    // if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    // } else {
    // // doc.data() will be undefined in this case
    // console.log("No such document!");
    // }
}