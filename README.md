# PROJECT-WORK-PEGASO
Tema num. 2 Privacy e sicurezza aziendale
PW 13. Sviluppo di un software mobile-friendly per il calcolo del fattore di rischio

- **URL PER ACCEDERE ALLA PAGINA**: https://frank16super.github.io/PROJECT-WORK-PEGASO/
- Repository: https://github.com/Frank16super/PROJECT-WORK-PEGASO

## Come provare la pagina
1. Aprire la URL `https://github.com/Frank16super/PROJECT-WORK-PEGASO`
2. Premere il pulsante "Scarica il PDF" per scaricare il file `documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf` disponibile sotto `docs/documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf`
3. Scansionare il QR code mostrato nella pagina: che punta a `docs/documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf`
4. Premere il pulsante "Vai al calcolatore"

# OBIETTIVI raggiunti da l´elaborato per il Calcolo del Fattore di Rischio
Questo progetto si pone e soddisfa i seguenti obiettivi di:
- Esporre in modo chiaro il calcolo del fattore di rischio nel ambito della sicurezza nei luoghi di lavoro;
- Ofrire un documento esplicativo in formato PDF con riferimenti normativi, formule ed esempi pratici;
- disporre di una pagina web responsive e mobile-friendly che consente di scaricare/visualizzare il PDF;
- integrare un QR code per l’accesso rapido al documento.
- **BONUS**, accesso a un calcolatore online realizzato utilizzando __Vue.js__, utile per mettere in pratica ciò che si è appena appreso consultando il documento esplicativo e le norme a cui fa riferimento

## Contenuti principali
- `docs/documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf`  
  Documento esplicativo sul calcolo del fattore di rischio: PDF con spiegazioni, formule, esempi e riferimenti normativi.

- `index.html`  
  Pagina HTML che funge da DASHBOARD per l´elaborato, comprende il pulsante per il download del documento: Pagina sviluppata in HTML/CSS/JavaScript ottimizzata per dispositivi mobili (responsive), con link diretto al PDF e QR code generato mediante script all´avvio della pagina per il download rapido da smartphone. 
 integra un Interfaccia responsive con:
  - integrazione librerie BootStrap
  - pulsante di download del PDF
  - pulsante di reindirizzamento al calcolatore
  - QR code generato via JavaScript

- `calcolatore-rischio.html`  
  Pagina HTML che sfrutta le librerie di Vue.js per fornire dei calcoli accurati e delle citazione a riferimenti normativi e mitigativi da usare come spunto per intraprendere delle azioni per ridurre la probabilità o la pericolosità del rischio.
  integra come la `index.html` un Interfaccia responsive con:
  - integrazione librerie BootStrap
  - pulsante reindirizzamento alla DASHBOARD
  - checkbox per la scelta della formula da utilizzare per il calcolo
  - selettori a tendina per scegliere quali dati inserire
  - riferimenti alle norme vigenti a seconda della **GRAVITÀ** e al **FATTORE DI RISCHIO**


##Analisi e collaudo dell'interfaccia web e dei componenti responsive:
la valutazione include test di usabilità e accessibilità da desktop e mobile, la verifica tecnica del QR code e la stesura di linee guida per il miglioramento dell'esperienza utente.
- `test/WAVE_WEB_ACCESSIBILITY_EVALUTATION_TOOL-INDEX-REPORT.png`
- `test/WAVE_WEB_ACCESSIBILITY_EVALUTATION_TOOL-CALCOLATORE-REPORT.png`
- `test/Lighthouse Report Viewer DESKTOP.pdf`
- `test/PageSpeed Insights CALCOLATORE DESKTOP.pdf`
- `test/Screenshot_20260623_155250_Brave.png`
- `test/Screenshot_20260623_155300_Brave.png`
- `test/Screenshot_20260623_155307_Brave.png`

per ulteriori test, accedere alla sezione `test/`

## Tecnologie usate
- HTML5 (per la struttura e il contenuto)
- CSS3  (per il layout e la UI)
- JavaScript (Libreria QRCode.js per generare il QR code lato client, Libreria Vue.js per il funzionamento della parte logica del calcolatore)
