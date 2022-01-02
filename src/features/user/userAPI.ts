import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export function authWithGoogle() {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  return new Promise<{
    accessToken: string | null,
    displayName: string | null,
    photoURL: string | null,
  }>((resolve) =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (!credential) return

        console.log({credential, result})

        // const token = credential.accessToken;
        // The signed-in user info.
        const { accessToken=null } = credential;
        const { displayName, photoURL } = result.user;
        
        resolve({ accessToken, displayName, photoURL })
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log({
          errorCode,
          errorMessage,
          email,
          credential,
        })
      })
  );
}

export function getCurrentUser() {
  const auth = getAuth();

  return new Promise<{
    accessToken: string | null,
    displayName: string | null,
    photoURL: string | null,
  }>((resolve) =>
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (!user) return

      const { displayName, photoURL } = user;

      resolve({ accessToken: "", displayName, photoURL })
    })
  );
}
