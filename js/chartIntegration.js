window.onload = function () {
    // Datos predeterminados de gatos para la tabla en index.html
    const defaultGatos = [
        { nombre: "Luna", edad: 2, raza: "Siamés", ultimaVisita: "2024-02-15" },
        { nombre: "Milo", edad: 4, raza: "Persa", ultimaVisita: "2024-01-20" },
        { nombre: "Simba", edad: 3, raza: "Maine Coon", ultimaVisita: "2024-03-05" },
        { nombre: "Nala", edad: 1, raza: "Bengala", ultimaVisita: "2024-02-28" },
        { nombre: "Tom", edad: 5, raza: "Siamés", ultimaVisita: "2024-03-01" }
    ];
    
    // Si no hay datos en localStorage, guardarlos
    if (!localStorage.getItem('gatos')) {
        localStorage.setItem('gatos', JSON.stringify(defaultGatos));
    }
    
    // Extraer datos de gatos registrados en LocalStorage
    const gatos = JSON.parse(localStorage.getItem('gatos')) || [];
    
    // Contar frecuencia de edades en 3 rangos
    const edadRanges = {
        'Jóvenes (1-4 años)': 0,
        'Adultos (5-9 años)': 0,
        'Mayores (10-14 años)': 0
    };
    
    gatos.forEach(gato => {
        if (gato.edad >= 1 && gato.edad <= 4) {
            edadRanges['Jóvenes (1-4 años)'] += 1;
        } else if (gato.edad >= 5 && gato.edad <= 9) {
            edadRanges['Adultos (5-9 años)'] += 1;
        } else if (gato.edad >= 10 && gato.edad <= 14) {
            edadRanges['Mayores (10-14 años)'] += 1;
        }
    });
    
    // Contar frecuencia de razas
    const razaCounts = {};
    gatos.forEach(gato => {
        razaCounts[gato.raza] = (razaCounts[gato.raza] || 0) + 1;
    });
    
    // Convertir los datos a formato Chart.js
    const edadLabels = Object.keys(edadRanges);
    const edadData = Object.values(edadRanges);
    const razaLabels = Object.keys(razaCounts);
    const razaData = Object.values(razaCounts);

    // Seleccionar el formulario y la galería de imágenes
    const formSection = document.querySelector('.container .row');
    
    // Crear un contenedor para los gráficos
    const chartContainer = document.createElement('div');
    chartContainer.classList.add('mt-5', 'container');
    chartContainer.innerHTML = `
        <h3 class='text-center mt-4'>Informe gráfico de datos</h3>
        <div class='row'>
            <div class='col-lg-6'>
                <h4 class='text-center'>Distribución de Edades</h4>
                <canvas id='edadChart'></canvas>
            </div>
            <div class='col-lg-6'>
                <h4 class='text-center'>Distribución de Razas</h4>
                <canvas id='razaChart'></canvas>
            </div>
        </div>
    `;
    
    // Agregar el contenedor de gráficos después del formulario y galería
    formSection.parentNode.appendChild(chartContainer);

    // Crear gráfico de barras para edades en rangos
    const edadCtx = document.getElementById('edadChart').getContext('2d');
    new Chart(edadCtx, {
        type: 'bar',
        data: {
            labels: edadLabels,
            datasets: [{
                label: 'Número de Gatos',
                data: edadData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // Crear gráfico circular para razas con colores diferenciados
    const razaCtx = document.getElementById('razaChart').getContext('2d');
    new Chart(razaCtx, {
        type: 'pie',
        data: {
            labels: razaLabels,
            datasets: [{
                label: 'Distribución de Razas',
                data: razaData,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(231, 76, 60, 0.6)',
                    'rgba(46, 204, 113, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
};
