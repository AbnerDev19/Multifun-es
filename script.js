// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const videoInput = document.getElementById('video-input');
    const fileInfo = document.getElementById('file-info');
    const fileNameDisplay = document.getElementById('file-name');
    const removeFileBtn = document.getElementById('remove-file');
    const convertBtn = document.getElementById('convert-btn');
    const statusMessage = document.getElementById('status-message');

    let currentFile = null;

    // Trigger file input on drop zone click
    dropZone.addEventListener('click', () => videoInput.click());

    // Drag and drop events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    // File input change
    videoInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    // Remove file
    removeFileBtn.addEventListener('click', () => {
        currentFile = null;
        videoInput.value = '';
        fileInfo.style.display = 'none';
        dropZone.style.display = 'block';
        convertBtn.disabled = true;
        statusMessage.textContent = '';
    });

    function handleFile(file) {
        if (!file.type.startsWith('video/')) {
            alert('Por favor, selecione um arquivo de vídeo válido.');
            return;
        }
        currentFile = file;
        fileNameDisplay.textContent = file.name;
        dropZone.style.display = 'none';
        fileInfo.style.display = 'flex';
        convertBtn.disabled = false;
    }

    // Conversão (Simulação do processo)
    convertBtn.addEventListener('click', async () => {
        convertBtn.disabled = true;
        statusMessage.textContent = 'Processando o áudio... isso pode levar alguns instantes.';
        
        // Lógica de integração com o Backend entrará aqui.
        // O arquivo está armazenado na variável 'currentFile'.
        
        setTimeout(() => {
            statusMessage.innerHTML = '✅ Conversão concluída! <a href="#" style="color: #2eaadc;">Baixar Áudio (.mp3)</a>';
        }, 3000);
    });
});
