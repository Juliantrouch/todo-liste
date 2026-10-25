# To-do-Liste

Eine To-do-Liste im Browser. Die Grundversion stammt aus dem JavaScript-Kurs von **SuperSimpleDev**, die Erledigt-Liste, das Speichern und den Zähler habe ich selbst gebaut.

**Live ausprobieren:** https://juliantrouch.github.io/todo-liste/

## Aus dem Kurs

- Aufgabe mit Namen und (optional) Fälligkeitsdatum hinzufügen
- Aufgaben übersichtlich in einem Raster anzeigen
- Aufgaben mit "Löschen" entfernen

## Meine eigenen Erweiterungen

- **Leere Eingaben werden ignoriert**
- **Speichern:** Die Liste startet leer und bleibt nach dem Neuladen erhalten (`localStorage`)
- **Erledigt-Liste:** Der Button "Erledigt" verschiebt eine Aufgabe in eine eigene Liste rechts, dort durchgestrichen und einzeln löschbar
- **Zähler "Insgesamt erledigt":** zählt alle erledigten Aufgaben und bleibt auch dann stehen, wenn du Erledigtes löschst

## Verwendete Technik

- HTML
- CSS
- JavaScript (ohne Frameworks)

## Was ich dabei gelernt habe

- Daten in Arrays und Objekten speichern
- Elemente zwischen zwei Listen verschieben (`splice`, `push`)
- Mit Schleifen HTML erzeugen und das DOM neu zeichnen
- Daten als JSON in `localStorage` speichern und wieder laden

## Starten

Einfach `index.html` im Browser öffnen, oder die Live-Version oben nutzen.
