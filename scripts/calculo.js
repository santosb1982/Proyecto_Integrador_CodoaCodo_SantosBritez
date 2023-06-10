function calculoTicket(){
    const valorTicket = 200;
    
    let descEstudiante = 0.8;
    let descTrainee = 0.5;
    let descJunior = 0.15;
    let opcion = document.getElementById("categoria").value;
    
    let cantidad = parseInt(document.getElementById("cantidad").value);
    
    let totalResumen = 0;
    
    switch(opcion){
    case "Normal":
            totalResumen = (valorTicket)*cantidad;
             break;
        case "Estudiante":
            totalResumen = (valorTicket-(valorTicket*descEstudiante))*cantidad;
        break;
        case "Trainee":
            totalResumen = (valorTicket-(valorTicket*descTrainee))*cantidad;
         break;
        case "Junior":
            totalResumen = (valorTicket-(valorTicket*descJunior))*cantidad;
        break;
    
        
       
    }
   
    document.getElementById("resultado").innerHTML="Total a pagar $ " + totalResumen;
       
    }