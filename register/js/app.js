const formulario =document.querySelector('#formulario');
const campo_email=document.querySelector('#email-user');
const password=document.querySelector('#pass-uno');
const passwordDos=document.querySelector('#pass-dos');
const alert_email=document.querySelector('#alert-email');
const alert_password=document.querySelector('#alert-passUno');
const alert_passwordDos=document.querySelector('#alert-passDos');
const alert_success=document.querySelector('#alert-success');

const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserPass= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const usuarios=[
    {
        email:'admin@admin.com',
        contra:'Admin12345'
    },
];

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    alert_success.classList.add('d-none');
    alert_email.classList.add('d-none');
    alert_password.classList.add('d-none');
    alert_passwordDos.classList.add('d-none');


    const valor_email=campo_email.value;
    const valor_passUno=password.value;
    const valor_passDos=passwordDos.value;

    const errores=[];

    if(!regUserEmail.test(valor_email)|| !valor_email.trim()){
        errores.push({
            tipo:alert_email,
            msg:"Ingrese un email correcto",
        });
    }

    if(!regUserPass.test(valor_passUno) || !valor_passUno.trim()){
        errores.push({
            tipo:alert_password,
            msg:"Ingrese un password correcto",
        });
    }

    if(valor_passUno !== valor_passDos){
        errores.push({
            tipo:alert_passwordDos,
            msg:"Las contraseñas son distintas"
        });
    }

    const findEmail=usuarios.find((item)=>item.email ===valor_email);
    if(findEmail !==undefined){
        errores.push({
            tipo:alert_email,
            msg:"Email ya registrado"
        });
    }

    if(errores.length !==0){
        mostrarMsjError(errores);
        return
    }
    agregarUsuario(e);
    mostrarFormEnviado ();

});

const mostrarFormEnviado= ()=>{
   alert_success.classList.remove('d-none');
   alert_success.textContent="Registrado Exitosamente"
}

const mostrarMsjError =(errores) =>{
    errores.forEach((element) => {
        element.tipo.classList.remove('d-none');
        element.tipo.textContent=element.msg;
    });
}

const agregarUsuario= (e)=>{
    const usuario={
        email:campo_email.value,
        contra:password.value,
    };
    usuarios.push(usuario);
    }

