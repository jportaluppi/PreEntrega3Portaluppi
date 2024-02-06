if (window.location.pathname === '/publicar.html') {
    
    let mensajeBienvenida = "Bienvenido a Patas Felices - Sistema de Registro de Mascotas";
    alert(mensajeBienvenida);

    
    const mascotas = [];
    let continuar = prompt("Desea comenzar con el registro de mascotas?");
    while (continuar !== "no") {
        let nombre = prompt("Ingrese el nombre de la nueva mascota");
        let tipo = prompt("Ingrese el tipo de mascota (perro, gato, pájaro, etc.)");
        let edad = parseInt(prompt("Ingrese la edad de la mascota"));
        let descripcion = prompt("Ingrese una breve descripción de la mascota");
        
        let mascota = {
            id: mascotas.length + 1,
            nombre,
            tipo,
            edad,
            descripcion,
        };
        mascotas.push(mascota);
        continuar = prompt("Desea continuar con el registro de mascotas?");
    }

    
    const verMascotas = prompt("Desea ver las mascotas registradas?");
    if (verMascotas === "si") {
        alert(JSON.stringify(mascotas, null, 2));
    }

    
    alert("Gracias por utilizar Patas Felices - Sistema de Registro de Mascotas");
}

