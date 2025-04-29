const tarjetas = document.getElementById('tarjetas')

fetch('https://johnfredyb.github.io/mars-photos-api/mars_photos.json')
.then(response => response.json())
.then(data =>{
    data.forEach(foto =>{

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta')

        const  imagen = document.createElement('img')
        imagen.src = foto.img_src
        imagen.alt = foto.description

        const descripcion = document.createElement('p')
        descripcion.textContent = foto.description

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(descripcion)

        tarjetas.appendChild(tarjeta)
    })
} 

)