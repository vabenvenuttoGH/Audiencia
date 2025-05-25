// script.js

// Simulación de base de datos local
const audiencias = [
  { id: 1, fecha: '2025-06-15', juez: 'Dra. García', descripcion: 'Audiencia preliminar - caso 54321', publica: true },
  { id: 2, fecha: '2025-06-18', juez: 'Dr. Martínez', descripcion: 'Audiencia de sentencia - caso 98765', publica: true },
  { id: 3, fecha: '2025-06-20', juez: 'Dra. López', descripcion: 'Audiencia privada - caso 11111', publica: false },
];

// Filtrar audiencias públicas y mostrarlas
function mostrarAudiencias() {
  const contenedor = document.getElementById('audiencias-lista');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  const audienciasPublicas = audiencias.filter(a => a.publica);

  if (audienciasPublicas.length === 0) {
    contenedor.innerHTML = '<p>No hay audiencias públicas disponibles.</p>';
    return;
  }

  audienciasPublicas.forEach(aud => {
    const item = document.createElement('div');
    item.classList.add('audiencia-item');
    item.innerHTML = `
      <h4>${aud.fecha} - ${aud.juez}</h4>
      <p>${aud.descripcion}</p>
    `;
    contenedor.appendChild(item);
  });
}

// Buscar por palabra clave en descripción
function buscarAudiencias() {
  const query = document.getElementById('buscador-input').value.toLowerCase();
  const contenedor = document.getElementById('audiencias-lista');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  const resultados = audiencias.filter(a => a.publica && a.descripcion.toLowerCase().includes(query));

  if (resultados.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  resultados.forEach(aud => {
    const item = document.createElement('div');
    item.classList.add('audiencia-item');
    item.innerHTML = `
      <h4>${aud.fecha} - ${aud.juez}</h4>
      <p>${aud.descripcion}</p>
    `;
    contenedor.appendChild(item);
  });
}

// Ejecutar cuando se cargue la página
window.addEventListener('DOMContentLoaded', () => {
  mostrarAudiencias();
  const buscador = document.getElementById('buscador-btn');
  if (buscador) buscador.addEventListener('click', buscarAudiencias);
});
