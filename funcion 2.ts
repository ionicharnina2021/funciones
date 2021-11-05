function test_param(n1:number,s1:string) { 
   console.log(n1) 
   console.log(s1) 
} 
test_param(123, "this is a string")
//si no pongo nada es que es de tipo any
//mal rollo seguir el camino de JS
function test_params(n1,s1) { 
   console.log(n1) 
   console.log(s1) 
} 
test_params("ahora es una cadena","this is a string")

function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");