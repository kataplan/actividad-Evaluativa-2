let form=<HTMLFormElement>document.getElementById("formulario");
let box:any=document.getElementsByClassName("box");


form.addEventListener("submit",function(evento:any){
    let nombre = <HTMLInputElement>form.elements.namedItem("nombre");
    let apellido= <HTMLInputElement>form.elements.namedItem("apellido");
    let rut= <HTMLInputElement>form.elements.namedItem("rut");
    let email= <HTMLInputElement>form.elements.namedItem("email");
    let phoneNumber= <HTMLInputElement>form.elements.namedItem("number");
    let programas =  <RadioNodeList>form.elements.namedItem("programas");
    let rango= <HTMLInputElement> form.elements.namedItem("rango");
    let experiencia=<RadioNodeList>form.elements.namedItem("programas");
    let programasSeleccionados:String[] =[];
    

    let inputElements:Array <HTMLInputElement> = [nombre,apellido,rut,email,phoneNumber];
    evento.preventDefault();
    let verification:boolean =true
    
    //programas
    programas.forEach((programa: Node)=>{
        const checkbox = <HTMLInputElement>programa;
        if(checkbox.checked){
            programasSeleccionados.push(checkbox.value);
        }
    })
    //experencia
    
   
    if(programasSeleccionados.length== 0 ){
        verification=false;
    }

    inputElements.forEach(function(inputElements){
        console.log(inputElements.value)
        if(inputElements.value.length == 0){
            verification= false;
            return false;
            
        }
    })
    

    if(verification){
        form.style.display="none";
        box[0].style.display="none";
        let mensaje:any = document.getElementById("mensaje");
        mensaje.style.display="block";
       
    }else{
        alert("Ingrese los campos corectamente");}
    
    
});


function  limpiarDatos(){
    form.reset();
}


let limpiar:any = <HTMLButtonElement> document.getElementById("btnLimpiar")
limpiar.addEventListener("click", limpiarDatos);
