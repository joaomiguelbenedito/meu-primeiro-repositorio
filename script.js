document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.getElementById("mainContainer");
    const flashOverlay = document.getElementById("flashOverlay");
    const titleElement = document.querySelector(".glitch-title");
    const dustContainer = document.getElementById("dustContainer");
    
    /* ==========================================================================
   CONTROLO DE ÁUDIO DO VÍDEO (MUTAR / DESMUTAR)
   ========================================================================== */
const coverVideo = document.getElementById("coverVideo");
const muteBtn = document.getElementById("muteBtn");

if (coverVideo && muteBtn) {
    muteBtn.addEventListener("click", () => {
        if (coverVideo.muted) {
            coverVideo.muted = false;
            muteBtn.textContent = "🔊 SOM ON";
            muteBtn.style.color = "#00ff66"; // Altera para verde quando ativado
            muteBtn.style.borderColor = "#00ff66";
        } else {
            coverVideo.muted = true;
            muteBtn.textContent = "🔇 SOM OFF";
            muteBtn.style.color = "#ff3333"; // Volta para vermelho quando mutado
            muteBtn.style.borderColor = "#8b0000";
        }
    });
}


    /* ==========================================================================
       GERADOR DE ESTRELAS DINÂMICAS (POSIÇÕES, TAMANHOS E VELOCIDADES DIFERENTES)
       ========================================================================== */
    function createDynamicStars() {
        const starsContainer = document.querySelector(".stars");
        const starCount = 60; // Quantidade de estrelas na tela

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");

            // 1. Tamanhos variados (entre 1px e 3px)
            const size = Math.random() * 2 + 1 + "px";
            star.style.width = size;
            star.style.height = size;

            // 2. Posição inicial embaralhada na tela (Eixo X e Y)
            star.style.left = Math.random() * 100 + "vw";
            star.style.top = Math.random() * 100 + "vh";

            // 3. Velocidades variadas (entre 6s e 20s)
            const duration = Math.random() * 14 + 6 + "s";
            star.style.animationDuration = duration;

            // Atraso aleatório para manter o movimento em loop assíncrono
            star.style.animationDelay = Math.random() * -20 + "s";

            starsContainer.appendChild(star);
        }
    }
    createDynamicStars();

    /* ==========================================================================
       GERADOR DE POEIRA EM SUSPENSÃO
       ========================================================================== */
    function createDustParticles() {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("dust");
            
            const size = Math.random() * 3 + 1 + "px";
            particle.style.width = size;
            particle.style.height = size;
            particle.style.left = Math.random() * 100 + "vw";
            particle.style.animationDuration = Math.random() * 8 + 7 + "s";
            particle.style.animationDelay = Math.random() * 5 + "s";
            
            dustContainer.appendChild(particle);
        }
    }
    createDustParticles();

    /* ==========================================================================
       EVENTOS SUTIS E ALEATÓRIOS (GLITCH, TREMOR E FLASHES)
       ========================================================================== */
    function triggerRandomHorrorEffects() {
        const rng = Math.random() * 100;

        // 1. Glitch no Título (25% de chance)
        if (rng < 25) {
            titleElement.classList.add("glitch-active");
            setTimeout(() => {
                titleElement.classList.remove("glitch-active");
            }, Math.random() * 400 + 200);
        }

        // 2. Tremor na Tela (10% de chance)
        if (rng > 40 && rng < 50) {
            mainContainer.classList.add("shake-active");
            setTimeout(() => {
                mainContainer.classList.remove("shake-active");
            }, 300);
        }

        // 3. Flash Rápido (5% de chance)
        if (rng > 95) {
            flashOverlay.classList.add("flash-active");
            setTimeout(() => {
                flashOverlay.classList.remove("flash-active");
            }, 150);
        }

        const nextCheck = Math.random() * 3000 + 1500; 
        setTimeout(triggerRandomHorrorEffects, nextCheck);
    }

    setTimeout(triggerRandomHorrorEffects, 2000);
});
