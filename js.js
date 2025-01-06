/**
     * Descarga un archivo de la carpeta 'tools'.
     * @param {string} fileName - El nombre del archivo (sin extensión).
     * @param {string} fileExtension - La extensión del archivo (ejemplo: 'pdf', 'docx').
     */

function downloadFile(fileName, fileExtension) {
     // Generar la fecha actual en formato YYYY-MM-DD
     const date = new Date();
     const formattedDate = date.toISOString().split('T')[0];

     // Construir la ruta del archivo en la carpeta 'tools'
     const filePath = `tools/${fileName}.${fileExtension}`;

     // Crear un enlace invisible para la descarga
     const link = document.createElement('a');
     link.href = filePath;

     // Definir el nombre del archivo con la fecha
     link.download = `${fileName}_${formattedDate}.${fileExtension}`;

     // Agregar el enlace al DOM, hacer clic y luego eliminarlo
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
}


function findMovie(videoName) {
     switch (videoName) {
          case 'milagro_actual':
               var videoLink = "https://drive.google.com/file/d/1I9Mhj8GeQsbnPAIlOTM7th6ADCorvQaf/view?usp=sharing";
               window.open(videoLink, '_blank');
               break;

          case 'milagro_de_jesus_1':
               var videoLink = "https://drive.google.com/file/d/1I9Mhj8GeQsbnPAIlOTM7th6ADCorvQaf/view?usp=sharing";
               window.open(videoLink, '_blank');
               break;

          case 'recursos':
               window.location.href = 'recursos.html';
               break;

          default:
               window.location.href = 'error.html';
               break;
     }

}