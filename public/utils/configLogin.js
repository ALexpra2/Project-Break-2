// -----> Estas SDKs son todas las herramientras que tiene Firebase para poder configurar este login de usuario
// y en general las herramientras necesarias para poder configurar verificaciones de usuario --> es lo que hace el login

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCezr1z2ctrzX_lJY7PwiTtqi_Fi7ORUxQ",
    authDomain: "fir-auth-2c470.firebaseapp.com",
    projectId: "fir-auth-2c470",
    storageBucket: "fir-auth-2c470.firebasestorage.app",
    messagingSenderId: "1067432490459",
    appId: "1:1067432490459:web:6b6a7726685a7e5933e3fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// en la función de login usaremos el email y password que nos ha dado el usuario por el fomrulario de registro
// si el usuario existe y estña guardado en Firebase ---> nos devuelve el token
// usamos asincronía porque hacemos una llamada a firebase

const login = async (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Iniciar sesión en Firebase con email y password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // OBTENER EL TOKEN DE AUTENTICACIÓN
        const idToken = await user.getIdToken();

        console.log("Token enviado al servidor:", idToken); 

        // Enviar el token al backend en lugar de email y password
        const response = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken })
        });
        
        console.log("Cuerpo de la solicitud enviado:", { idToken });
        

        const data = await response.json();
        if (data.success) {
            window.location.href = "/dashboard"; // Redirigir si el login es exitoso
        } else {
            console.error("Error en login:", data.message);
        }

    } catch (error) {
        console.log(`No se ha podido hacer el login de usuario ${error}`);
    }
};


document.getElementById('loginForm').addEventListener('submit', login);