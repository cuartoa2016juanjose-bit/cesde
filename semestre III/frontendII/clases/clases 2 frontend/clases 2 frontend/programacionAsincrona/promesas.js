//simular DB
let users = [
    {
    "nombre": "pepito perez",
    "correo": "pepitogmail.com",
    "telefono": "10101010"

    },
     {
    "nombre": "rosa Mel",
    "correo": "rosita.com",
    "telefono": "10101020"

    },
     {
    "nombre": "Armando casas",
    "correo": "Armandito.com",
    "telefono": "10101030"

    },
     {
    "nombre": "yahidistiria",
    "correo": "kabom.com",
    "telefono": "10101040"

    },
     {
    "nombre": "Dario Gomez",
    "correo": "latirana.com",
    "telefono": "10101050"

    }
]

function getData(u){
    //programar una promesa
    return new Promise(function(resolve,reject){
        //simular retraso
    setTimeout(function (){
    if (u.length  > 0) {
        resolve(u);
    }else{
        reject ("No hay datos en la base de datos");
    }
    }, 2000);
    });
}
/*
getData(users).then((d)=>{
        console.log(d);
    }).catch((e)=>{
        console.log(e);
    });
*/

async function showData(usuarios){
    try{
        let data = await getData(usuarios);
        console.log(data);
    }catch(error){
        console.log("error");
    }
}

showData(users);

    