/* ==========================================================================
   LÓGICA DAS ABAS CORRIGIDA
   ========================================================================== */
function mudarAba(nomeAba, evento) {
    // Esconde todas as abas
    document.querySelectorAll('.aba-conteudo').forEach(aba => {
        aba.classList.remove('ativa');
    });

    // Desmarca todos os botões do menu
    document.querySelectorAll('.aba-link').forEach(link => {
        link.classList.remove('ativa');
    });

    // Exibe a aba clicada
    const abaAlvo = document.getElementById('aba-' + nomeAba);
    if (abaAlvo) {
        abaAlvo.classList.add('ativa');
    }
    
    // Destaca o botão atual usando o evento repassado pelo HTML
    if (evento && evento.currentTarget) {
        evento.currentTarget.classList.add('ativa');
    }
}

/* ==========================================================================
   SIMULADOR DE PLANTIO
   ========================================================================== */
let totalArvores = 0;
let operacaoAtiva = false;

const contadorElemento = document.getElementById('contador');
const arvoreElemento = document.getElementById('arvore');
const statusElemento = document.getElementById('status');
const btnPlantar = document.getElementById('btnPlantar');

if (btnPlantar) {
    btnPlantar.addEventListener('click', () => {
        if (operacaoAtiva) return;
        
        operacaoAtiva = true;
        btnPlantar.disabled = true;

        // Estágio 1: Semente aparece
        arvoreElemento.className = "arvore-virtual estagio-semente";
        arvoreElemento.innerHTML = "🌱";
        statusElemento.innerText = "Semeando o solo preparado...";

        // Estágio 2: Broto (800ms)
        setTimeout(() => {
            arvoreElemento.className = "arvore-virtual estagio-broto";
            arvoreElemento.innerHTML = "🌿";
            statusElemento.innerText = "Regando... o broto está se desenvolvendo!";
        }, 800);

        // Estágio 3: Árvore Adulta (1800ms)
        setTimeout(() => {
            arvoreElemento.className = "arvore-virtual estagio-arvore";
            
            const especies = ["🌳", "🌲", "🌴", "🍒", "🍁"];
            arvoreElemento.innerHTML = especies[Math.floor(Math.random() * especies.length)];
            
            statusElemento.innerText = "Crescimento concluído! Uma nova árvore vive.";

            totalArvores++;
            contadorElemento.innerText = totalArvores;

            // Estágio 4: Limpeza do campo (2000ms após crescer)
            setTimeout(() => {
                arvoreElemento.className = "arvore-virtual"; 
                arvoreElemento.innerHTML = "";               
                statusElemento.innerText = "Pronto para o próximo plantio.";
                
                operacaoAtiva = false;
                btnPlantar.disabled = false;
            }, 2000);

        }, 1800);
    });
}