export interface Recipe {
  id: number;
  name: string;
  erstellerName: string;
  zutaten: string[];
  beschreibung: string;
  bildPfad: string;
  bewertung: number;
  kommentar: string;
}
