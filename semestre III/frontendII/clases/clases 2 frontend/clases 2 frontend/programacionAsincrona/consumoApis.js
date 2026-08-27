    let contenedor = document.querySelector(".contenedor");
    let btnCargar = document.querySelector(".boton-cargar");


    btnCargar.addEventListener("click", ()=>{
        //alert("todo bien");
        getUsers();
    });

//funcion para conectarse a una Api externa
    async function getUsers(){
    try {
        let url = "https://jsonplaceholder.typicode.com/users";
        let data = await fetch(url);
        let users = await data.json();
        //console.log(users);
        //mostrar al usuario
        users.forEach((u)=>{
            contenedor.innerHTML +=  `
            <h3>Nombre: ${u.name}</h3>
            <p>Telefono: ${u.phone}</p>
            <p>Nombre: ${u.email}</p>
            <hr></hr>
            `;
        });
    }catch(error){
        console.log(error);
        }
    }

