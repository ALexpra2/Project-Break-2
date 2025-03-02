const admin = require('firebase-admin');
const auth = admin.auth();

//Middleware de validacion acceso a rutas
const checkAuth = (req, res, next) => {
    const idTokenCookie = req.cookies.token

    if(!idTokenCookie) {
        return res.redirect('/login')
    }

    auth.verifyIdToken(idTokenCookie)
    .then((decodedToken) => {
        req.user = decodedToken
        next()
    })
    .catch((error) => {
        console.log(`Error al verificar el token de las cookies: ${error}`);
    })
}

module.exports = checkAuth