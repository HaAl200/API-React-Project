# API-React-Project

React API Project - Country List
Projektbeschreibung
Dieses Projekt ist eine React-Anwendung, die eine Liste von Ländern anzeigt. Die Daten werden von der REST Countries API abgerufen. Benutzer können nach Ländern suchen und die Liste nach Kontinenten filtern. Die Anwendung bietet eine einfache und intuitive Möglichkeit, Informationen über Länder und deren Hauptstädte zu durchsuchen.

Features
Länder anzeigen: Zeigt eine Liste aller Länder mit Namen und Hauptstadt.
Suche: Ermöglicht die Suche nach Ländernamen (case-insensitive).
Filter: Filtert die Länder nach Kontinenten (z. B. Afrika, Europa, Asien, etc.).
Datenquelle: Die Daten werden von der REST Countries API abgerufen.
Fallback für Hauptstädte: Wenn ein Land keine Hauptstadt hat, wird "Keine Angabe" angezeigt.

Verwendete Technologien
React: Frontend-Bibliothek für die Benutzeroberfläche.
Axios: HTTP-Client für API-Anfragen.
REST Countries API: Datenquelle für Länderinformationen.
CSS: Für das Styling der Anwendung.

Projektstruktur
src/
├── components/
│   └── CountryList.jsx  # Hauptkomponente für die Länderanzeige
├── styles/
│   └── countryList.css  # CSS-Datei für das Styling
├── App.js               # Einstiegspunkt der Anwendung
├── index.js             # Rendert die Anwendung

Nutzung der Anwendung
Länder durchsuchen:
Gib einen Ländernamen in das Suchfeld ein, um die Liste zu filtern.
Nach Kontinent filtern:
Wähle einen Kontinent aus der Dropdown-Liste aus, um die Länder nach Region zu filtern.
Informationen anzeigen:
Die Liste zeigt den Namen und die Hauptstadt jedes Landes an.

Reflexion
Die Reflexion zu diesem Projekt wurde als separate Markdown-Datei verfasst und bei Ilias eingereicht.

Von Hala Alkilani und Li-Mei Bissot
