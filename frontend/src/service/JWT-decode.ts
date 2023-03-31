import jwt_decode from "jwt-decode";

var token = localStorage.getItem('token');

if (token) {
    var decoded = jwt_decode(token);
}
