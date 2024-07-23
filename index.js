var div = document.createElement('div');
        div.style.borderRadius = '50%';
        div.style.border = '4px solid';
        div.style.padding = '2px';
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.overflow = 'clip';
        div.style.position = 'fixed';
        div.style.top = '190px';
        div.style.left = '100px';
        div.style.zIndex = '3'

        // Cria o pseudo-elemento ::after usando um elemento extra
        var afterDiv = document.createElement('div');
        afterDiv.style.content = '';
        afterDiv.style.position = 'absolute';
        afterDiv.style.borderRadius = '50%';
        afterDiv.style.border = '2px solid white';
        afterDiv.style.padding = '1px';
        afterDiv.style.width = '98px';
        afterDiv.style.height = '98px';

        // Cria o elemento vídeo
        var video = document.createElement('video');
        video.width = 200;
        video.height = 200;
        video.loop = true;
        video.autoplay = true;
        video.muted = true;
        video.className = 'video-content-autoplay'; // Adiciona uma classe para ajudar com o pseudo-elemento

        // Cria o elemento source
        var source = document.createElement('source');
        source.src = 'https://videos.widde.io/widde-bucket-sp/7f33c60a-2eca-4682-8126-f3f8f947fb45/videos/0d060c5d-f1dc-47d3-ba5e-92b51d6c04ed/gif.mp4';
        source.type = 'video/mp4';

        // Adiciona o source ao vídeo
        video.appendChild(source);

        // Adiciona o vídeo à div
        div.appendChild(video);

        // Adiciona o pseudo-elemento à div
        div.appendChild(afterDiv);

        // Adiciona a div ao corpo do documento
        document.querySelector('.section-featured-home').appendChild(div);
