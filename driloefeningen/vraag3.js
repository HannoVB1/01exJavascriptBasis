/**
 * Vraag 3
 * Vraag een getal aan de gebruiker en beeld in de console een aantal regels af met hartjes (♥),
 * zoals in onderstaand voorbeeld.
 *
 * Voorbeeld:
 *
 * INPUT:
 *   Hoeveel regels met hartjes moeten er afgeprint worden? 4 regels
 *
 * OUTPUT:
 *    START PROGRAM
 *    ♥
 *    ♥♥
 *    ♥♥♥
 *    ♥♥♥♥
 *    END PROGRAM
 */

 const aantal = prompt("Hoeveel bitches?");

const bitches = ''; 

 for (var i = 1; i <= aantal; i++) {
   bitches += '♥';
   console.log(bitches);
 }
