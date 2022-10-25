const consumirAPI= async()=>{
    const respuesta= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json=await respuesta.json();
    console.log("USER ID:"+json.userid);
    console.log("ID:"+json.id);
    console.log("TITULO:"+json.title);
    console.log("COMPLETADO:"+json.completed);
    let div=document.createElement("div")
    div.className="cajita";
    div.innerHTML=`<p>User Id:${json.userId} </p>
    <p>ID:${json.id}</p>
    <p>titulo:${json.title}</p>
    <p>Completado: ${json.completed} </p>`;
    document.body.appendChild(div);
        
}

