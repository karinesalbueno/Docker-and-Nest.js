import jwt_decode from "jwt-decode";

interface DecodedToken {
    userCode: string;
    userId: number;
    userName: string;
    iat: number;
    exp: number;
}

export const JWTAuth: () => boolean = () => {
    const token = localStorage.getItem('token');

    if (token) {
        let decoded: DecodedToken;

        try {
            decoded = jwt_decode(token);

            const expiration = decoded.exp; // obtém a data de expiração do token
            const expirationInSeconds = expiration * 1000; // converte para milissegundos
            const nowInMilliseconds = new Date().getTime(); // obtém a hora atual em milissegundos

            if (nowInMilliseconds > expirationInSeconds) {
                // token expirado
                return false
            } else {
                // token válido
                return true
            }

        } catch (e) {
            // token inválido
            console.log('token inválido')
            return false
        }
    }
    else {
        return false
    }
}
