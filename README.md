# Vorbereitung

[YouTube Livestream bei Never Code Alone](https://youtube.com/live/gKzcTk1zI_U)

## backend installieren und starten

Das "Backend" ist ein einfacher Node.js-Prozess, der auf Port 7002 lauscht.

- Port 7002 muss also frei sein :-)

```bash

cd backend
npm install
npm start
```

Wenn das Backend gestartet ist, werden einige URLs ausgegeben, die zum Testen im Browser oder per curl o.ä. aufgerufen werden können. In der Regel sollte aber alles funktionieren.

## next.js installieren und starten

Im Verzeichnis `nextjs-workspace` ist ein Next.js-Projekt vorhanden. Damit wir uns auf die Next.js-spezifika konzentrieren können, habe ich dort schon einige "normale" React-Komponenten angelegt und auch Code vorbereitet, den wir zum Zugriff auf das Backend verwenden werden.

- Der Next.js-Server läuft auf **Port 3000**, d.h. auch dieser Port muss frei sein.

**Zur Vorbereitung:**

```bash
cd nextjs-workspace

npm install
npm run dev:clean

```

Next.js sollte jetzt auf Port 3000 laufen. Wenn Du `http://localhost:3000` aufmachst, müsste eine von Next.js erzeugte "Not Found"-Seite erscheinen (da steht dann: `404 This page could not be found.`). Die Inhalte dafür bauen wir dann gemeinsam.
