window.onload = function() {
    // Cria um novo elemento div
    var quadrado = document.createElement('div');
    
    // Define os estilos para o quadrado
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = 'blue';

    // Adiciona a nova div ao corpo da página
    document.body.appendChild(quadrado);
};
