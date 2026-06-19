const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const P = ref(1);
        const D = ref(1);
        const E = ref(1);
        const usaE = ref(false);

        const R = computed(() => {
            return usaE.value ? (P.value * D.value * E.value) : (P.value * D.value);
        });

        const livelloRischio = computed(() => {
            const punteggio = R.value;
            if (usaE.value) {
                if (punteggio <= 8) return 'Basso';
                if (punteggio <= 18) return 'Medio';
                if (punteggio <= 36) return 'Alto';
                return 'Critico';
            } else {
                if (punteggio <= 3) return 'Basso';
                if (punteggio <= 8) return 'Medio';
                if (punteggio <= 12) return 'Alto';
                return 'Critico';
            }
        });

        const classeRischio = computed(() => {
            const livello = livelloRischio.value;
            if (livello === 'Basso') return 'basso';
            if (livello === 'Medio') return 'medio';
            if (livello === 'Alto') return 'alto';
            return 'critico';
        });

        const indicazioni = computed(() => {
            const livello = livelloRischio.value;
            const gravitadanno = D.value;
                
            let normativa = "";
            let mitigazione = "";

            if (livello === 'Basso') {
                normativa = "D.Lgs. 81/08 Art. 28: Valutazione dei rischi ordinaria. Non sono richieste azioni immediate oltre il mantenimento delle misure in atto.";
            } else if (livello === 'Medio') {
                normativa = "D.Lgs. 81/08 Art. 29: Rischio rilevante. Necessaria programmazione di interventi a medio termine e sorveglianza sanitaria (Art. 41).";
            } else if (livello === 'Alto') {
                normativa = "D.Lgs. 81/08: Necessità di misure di prevenzione specifiche e urgenti. Obbligo di formazione specifica e informazione dettagliata ai lavoratori (Art. 36/37).";
            } else {
                normativa = "D.Lgs. 81/08 Artt. 43-44: Gestione Emergenze. Sospensione cautelativa delle attività fino al ripristino delle condizioni di sicurezza.";
            }

            if (gravitadanno === 1) {
                mitigazione = "Danno Lieve: Mantenere le dotazioni standard (es. cassetta di primo soccorso). Garantire l'ergonomia di base delle postazioni.";
            } else if (gravitadanno === 2) {
                mitigazione = "Danno Modesto: Fornire Dispositivi di Protezione Individuale (DPI) standard. Verificare la presenza in turno di addetti al primo soccorso formati.";
            } else if (gravitadanno === 3) {
                mitigazione = "Danno Grave: Priorità alla protezione collettiva (es. parapetti, cappe aspiranti, isolamento acustico). Obbligo di DPI di 3° categoria e procedure scritte vincolanti.";
            } else if (gravitadanno === 4) {
                mitigazione = "Danno Gravissimo (Potenziale letale/invalidante): Isolare fisicamente la fonte del rischio. Implementare sistemi di blocco automatico (interlock), compartimentazione e procedure di lock-out/tag-out (LOTO).";
            }

            return { normativa, mitigazione };
        });

        return {
            P, D, E, usaE, R, livelloRischio, classeRischio, indicazioni
        }
    }
}).mount('#app');