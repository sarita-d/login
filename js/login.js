class Usuario{
    constructor(user, clave){
        this.user = user;
        this.clave = clave;
    }
    validar(){
        var x;
        if(this.user=='sarita' && this.clave=='123'){
            x = 1;
        }else{
            x = 0
        }
        return x;
    }
};
var c = 0;
function login(){
    var u = new Usuario(
        document.getElementById('user').value,
        document.getElementById('pass').value)
        if(u.validar()==1){
            limpiar()
            alert("Datos del Usuario correctos");
            c = 0;
        }else{
            c++;
            alert("Ud. tiene "+ c + " intentos");
            limpiar()
            if(c == 3){
                desabilitar();
            }
        }
}
function limpiar(){
    document.getElementById('user').value="";
    document.getElementById('pass').value="";
    document.getElementById('user').focus();
}
function desabilitar(){
    document.getElementById('user').disabled=true;
    document.getElementById('pass').disabled=true;
    document.getElementById('boton').disabled=true;
}
