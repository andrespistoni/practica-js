const fetch = require('node-fetch');

function getNombre(id) {
    console.log('Estoy en el primero')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(asd => {
            console.log('Estoy dentro del primero');
            console.log(asd.title);
        })
}

// async away
function pepe() {
    return '22';
}
async function getNombre2(id) {
    console.log('Estoy dentro del segundo')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const respuesta2 = await fetch(url);
    const json = await respuesta2.json();
    console.log(respuesta2.status);
    if (respuesta2.status !== 200) {
        throw Error(`El Id: \"${id}\" no existe`);
    }
    console.log(json.title)

    a = await pepe()

    console.log(`devuelve a: \"${a}\"`);
    return json;
}

// llamada normal.
getNombre('44');
console.log('Pase el primero')

// async away
getNombre2('1')
    .then((asd) => console.log(`Respuesta: ${asd.userId}`))
    .catch((e) => console.error(`Error ${e}`))