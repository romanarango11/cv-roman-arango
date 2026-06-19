// Función para el botón "Saludar"
function saludar() {
    var nombre = document.querySelector('.profile-name').innerText;
    alert('¡Hola! Soy ' + nombre + ', programador junior.\n\n' +
          'Estudiante de 4to semestre de Ingeniería de Sistemas\n\n' +
          'Tecnologías que manejo:\n' +
          '- Java (POO, Swing, JavaFX)\n' +
          '- Persistencia: CSV y JSON\n' +
          '- HTML, CSS y JavaScript (básico)\n\n' +
          'Proyectos destacados:\n' +
          '- Sistema de Órdenes Médicas (Java + JavaFx + JSON)\n' +
          '- Hoja de Vida - Página Web (HTML + CSS + JS)\n' +
          '- Sistema de Biblioteca (JavaFX + JSON)\n' +
          'Listo para aprender y aportar valor.');
}

// Asignar el evento al botón
var btnSaludar = document.getElementById('saludarBtn');
if (btnSaludar) {
    btnSaludar.onclick = function() {
        saludar();
    };
}

// Función para el buscador
function buscar() {
    var busqueda = document.getElementById('searchInput').value;
    if (busqueda.trim() === '') {
        alert('Por favor escribe algo para buscar');
        return;
    }
    
    var mensaje = 'Buscaste: "' + busqueda + '"\n\n';
    mensaje = mensaje + 'Estudiante de 4to semestre de Ingeniería de Sistemas\n\n';
    mensaje = mensaje + 'Tecnologías que conozco:\n';
    mensaje = mensaje + '- Java (POO, Swing, JavaFX)\n';
    mensaje = mensaje + '- Persistencia en CSV y JSON\n';
    mensaje = mensaje + '- HTML, CSS y JavaScript (básico)\n\n';
    mensaje = mensaje + 'Proyectos destacados:\n';
    mensaje = mensaje + '- Sistema de Órdenes Médicas (Java + Swing + JSON)\n';
    mensaje = mensaje + '- Hoja de Vida - Página Web (HTML + CSS + JS)\n';
    mensaje = mensaje + '- Registro de Estudiantes (JavaFX + JSON)\n';
    mensaje = mensaje + '- Sistema de Inventario (Java + Swing + CSV)';
    
    alert(mensaje);
}

// Asignar evento al buscador (presionar Enter)
var inputBusqueda = document.getElementById('searchInput');
if (inputBusqueda) {
    inputBusqueda.onkeydown = function(e) {
        if (e.key === 'Enter') {
            buscar();
        }
    };
}

// Mensaje en consola
console.log('Hoja de vida - Roman Arango');
console.log('Estudiante de 4to semestre - Ingenieria de Sistemas');
console.log('Puesto: Programador Junior');
console.log('Tecnologias: Java (POO), CSV/JSON, Swing/JavaFX, HTML/CSS/JS');
console.log('Proyectos: Sistema de Ordenes Medicas, Hoja de Vida Web, Registro de Estudiantes, Sistema de Inventario');
console.log('Listo para mi primera oportunidad laboral');