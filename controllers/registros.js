
const knex = require('../db/config')
const nodemailer = require('nodemailer')
const async = require('hbs/lib/async')



const inicio = (req, res) => {
    res.render('index')
}


const mostrarFormulario = (req, res) => {
    res.render('contacto')
}


const all = (req, res) => {
    knex
        .from('inscriptos')
        .then((json) =>{
            res.render('list', {data: json})
        })
}


const createRegistro = (req, res) => {
    let nombreForm, apellidoForm, emailForm, 
    localidadForm, comentarioForm;

    nombreForm = req.body.nombre;
    apellidoForm = req.body.apellido;
    emailForm = req.body.email;
    localidadForm = req.body.localidad;
    comentarioForm = req.body.comentario;

    function validacion() {
        if (nombreForm == '' || apellidoForm == '' || emailForm == '' || localidadForm == ''){
            let validacion = 'Completar la información necesaria'
            res.render('contacto', {
                validacion,
                nombreForm,
                apellidoForm,
                emailForm,
                localidadForm
            })
        }
        else {
            async function main(){
                let transporter = nodemailer.createTransport ({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true,
                        auth: {
                            user: "riskonlineutn@gmail.com",
                            pass: "bplhkhtsknyzwxrp"
                        }
                    });
                    let info = await transporter.sendMail({
                        from: `${nombreForm} <${emailForm}>`,
                        to: `${nombreForm} <${emailForm}>`,
                        subject: 'Confirmación del torneo de RISK Online',
                        html: 
                        `<strong>Usted ha sido aceptado</strong> <br>
                        Sus datos ingresados son: <br>
                        Nombre: ${nombreForm} <br>
                        Apellido: ${apellidoForm} <br>
                        Email: ${emailForm} <br>
                        Localidad: ${localidadForm} <br>
                        Comentario: ${comentarioForm} <br>`
                    });

                    res.render('formEnviado', {
                        nombreForm,
                        apellidoForm,
                        emailForm,
                        localidadForm,
                        comentarioForm,
                        envío: true
                    })
                }
                main().catch(console.error);
            }
        }
        validacion();
    }



module.exports = {
    inicio,
    all,
    mostrarFormulario,
    createRegistro,
}