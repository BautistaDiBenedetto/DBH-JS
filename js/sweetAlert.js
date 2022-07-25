     function validarForm(){
      var nombres,apellidos, correo, pais, localidad, telefono;
      nombres = document.getElementById("nombres").value;
      apellidos = document.getElementById("apellidos").value;
      correo = document.getElementById("correo").value;
      pais = document.getElementById("pais").value;
      localidad = document.getElementById("localidad").value;
      telefono = document.getElementById("telefono").value;

      if(nombres === "" || apellidos === "" || correo === "" || pais === ""|| localidad === "" || telefono === ""){
        alerta();
       
        return false
      }
     }
     
     function alerta() {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios!',
      })
    }

    function carroAlerta() {
      
      Swal.fire({
        title: 'Producto Añadido!',
        text: `El producto se añadio correctamente`,
        icon: 'success',
        
      })
  }