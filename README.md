# PROJECT-WORK-PEGASO

## Tema num. 2: Privacy e sicurezza aziendale
### PW 13. Sviluppo di un software mobile-friendly per il calcolo del fattore di rischio

- **URL di accesso alla pagina**: [Visualizza il Progetto](https://frank16super.github.io/PROJECT-WORK-PEGASO/)
- **Repository GitHub**: [Frank16super/PROJECT-WORK-PEGASO](https://github.com/Frank16super/PROJECT-WORK-PEGASO)

## Come provare la pagina
1. Accedere alla URL della pagina `index.html` : `https://frank16super.github.io/PROJECT-WORK-PEGASO/`
2. È possibile premere il pulsante **"Scarica il PDF"** per ottenere direttamente il documento esplicativo, oppure scansionare il **QR Code** dinamico mostrato a schermo per consultare il file `documento_esplicativo_fattore_di_rischio-Francesco-Fontana.pdf` direttamente da dispositivo mobile.
3. Nella dashboard principale, utilizzare il pulsante **"Vai al calcolatore"** per testare l'applicazione web applicativa.

## Obiettivi raggiunti dall'elaborato
Il progetto ha implementato e soddisfatto i seguenti obiettivi accademici e tecnici:
* **Chiarezza espositiva:** Esposizione fluida e strutturata del calcolo del fattore di rischio nell'ambito della sicurezza nei luoghi di lavoro.
* **Documentazione rigorosa:** Redazione di un documento esplicativo in formato PDF completo di riferimenti normativi (D.Lgs. 81/08), formule matematiche ed esempi pratici.
* **Approccio Mobile-First:** Sviluppo di una piattaforma web responsive e ottimizzata per la consultazione da smartphone e tablet.
* **Interattività (Funzionalità Bonus):** Integrazione di un calcolatore online interattivo basato su logica reattiva per consentire all'utente di applicare tempestivamente le formule di calcolo apprese.

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

*Per consultare l'intera suite di test e i log prestazionali dettagliati, accedere alla directory `/test` della presente repository.*

## Tecnologie usate
Il software è stato ingegnerizzato seguendo gli standard web moderni, minimizzando il carico sul server e massimizzando la velocità di esecuzione sul client attraverso le seguenti tecnologie:

* **HTML5 e CSS3:** Utilizzati per garantire una struttura semantica solida e una separazione netta tra logica, contenuto e stile visivo.
* **Bootstrap 5:** Scelto come framework CSS principale per velocizzare lo sviluppo dell'interfaccia utente. Grazie alla sua griglia fluida (*Grid System*) e alle classi di utility responsive, l'applicazione si adatta automaticamente a qualsiasi risoluzione dello schermo (Desktop, Tablet, Smartphone).
* **Vue.js (v2/v3):** Utilizzato per la gestione dello stato dell'applicazione nel calcolatore. La reattività nativa di Vue permette di aggiornare in tempo reale il valore del fattore di rischio ($R = P \times D$) non appena l'utente modifica i menu a tendina, senza dover ricaricare la pagina web.
* **QRCode.js:** Libreria JavaScript cross-browser impiegata per generare dinamicamente il codice QR all'avvio della Dashboard, traducendo l'URL assoluto del documento PDF in un'immagine vettoriale leggera e facilmente scansionabile.
