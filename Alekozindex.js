$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})

    const Reg_Form = document.getElementById('FormReg');

    Reg_Form.addEventListener('submit',function(e){
          e.preventDefault();

          const formData = new FormData(this);
          var dataform = {
            "IdEntidad": "1",
            "Nombre":document.getElementById("Reg_nombre").value,
            "Apellido":document.getElementById("Reg_apellido").value,
            "Edad":document.getElementById("Reg_edad").value,
            "Documento":document.getElementById("Reg_documento").value
        };
        // $.post("https://ethoscolapi. azurewebsites.net/api/Pacientes/PostPaciente",data,
        // function(response){alert(response)}
        //alert(formData);
        // );
            $.ajax({
              type: "POST",
              url: "https://ethoscolapi.azurewebsites.net/api/Pacientes/PostPaciente",
              data: dataform,
              datatype: 'json',
              success: function(response){
                  //alert(response);
              },
              error:function(error){
                //alert("No funciona");
                $('#modalRegistro').modal('hide');
                document.getElementById("FormReg").reset();
              }
            });
    });
                //$('#modalRegistro').modal('hide');