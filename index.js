function sendmail(){
    let peram ={
        name : document.getElementById("name").value,
        email : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }


    const service_id ="service_4bojbjg";
   const template_id ="template_dxgs0ba";
     emailjs.send(service_id,template_id,peram)
.then(
    res=>{
         document.getElementById("name").value= " ";
         document.getElementById("email_id").value=" ";
         document.getElementById("subject").value=" ";
         document.getElementById("message").value=" ";
         console.log(res);
         alert("Your messege send sussesfully");

       
    }
)
.catch((err) => console.log(err));

}

