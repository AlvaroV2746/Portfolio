import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const datosFormulario = {
      nombre: e.target.txtName.value,
      email: e.target.txtEmail.value,
      telefono: e.target.txtPhone.value,
      mensaje: e.target.txtMen.value,
    };

    emailjs.send(
    'service_ahj39f6', 
    'template_9sihg0c', 
    datosFormulario, 
    '51GRVsQsV94v6JBIy'
  )
  .then((response) => {
      console.log('¡Correo enviado con éxito!', response.status, response.text);
      alert('¡Mensaje enviado correctamente!');
      e.target.reset(); // Para limpiar el formulario
  })
  .catch((err) => {
      console.error('Falla en la misión, error:', err);
      alert('Hubo un error al enviar el mensaje, intenta de nuevo.');
  });

  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1>Contacto</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <p>Te invito a que te contactes enviándome un mensaje o bien por whatsapp.</p>
        </div>
        <div className="col-12 col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <input type="text" name="txtName" id="txtName" required className="form-control" placeholder="Nombre" />
            </div>
            <div className="my-3">
              <input type="email" name="txtEmail" id="txtEmail" required className="form-control" placeholder="Email" />
            </div>
            <div className="my-3">
              <input type="number" name="txtPhone" id="txtPhone" required className="form-control" placeholder="Numero" />
            </div>
            <div className="my-3">
              <textarea name="txtMen" id="txtMen" rows="4" required className="form-control" placeholder="Mensaje"></textarea>
            </div>
            <div id="Enviar">
              <button id="send" type="submit" className="mx-9 form-control">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;