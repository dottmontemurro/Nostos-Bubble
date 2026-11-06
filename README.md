# Nostos Bubble / NOSTOS Flow

Applicazione web statica contenuta in `index.html`. Il codice originale è
conservato; `Index.html` reindirizza i vecchi collegamenti alla pagina principale.

## Avvio locale

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Aprire http://127.0.0.1:8080/. La pagina usa storage del browser e alcune risorse
esterne (Google Fonts e Chart.js); voce e microfono dipendono dai permessi e dal
supporto del browser. Nessun dato o token personale va aggiunto al repository pubblico.

## Preparazione per Cloudflare Pages

```sh
node scripts/build.mjs
```

Directory da pubblicare: `dist`. Comando di build: `node scripts/build.mjs`.
La cartella contiene soltanto le due pagine HTML. Creare o collegare un progetto
Pages è un passaggio separato: la presenza di questo file non attiva alcun deploy.

La pulizia del 6 novembre 2026 riguarda struttura e pubblicazione dei file;
non costituisce un collaudo completo di tutte le funzioni dell'applicazione.
