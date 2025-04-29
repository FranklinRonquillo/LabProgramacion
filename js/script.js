const tarjetas = document.getElementById('tarjetas')

fetch('./json/datos.json')
.then(response => response.json())
.then(data =>{
    data.forEach(foto =>{

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta')

        const  imagen = document.createElement('img')
        imagen.src = foto.img
        imagen.alt = foto.description

        const descripcion = document.createElement('p')
        descripcion.textContent = foto.descripcion

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(descripcion)

        tarjetas.appendChild(tarjeta)
    })
} 

)