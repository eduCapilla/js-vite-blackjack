/**
 * Me permite coger una carta de la baraja
 * @param {Array<string>} deck es un array de strings
 * @returns {string} retorna la carta del deck 
 */
export const pedirCarta = ( deck ) => {
    if ( !deck ) throw new Error('tiene que venir informado el deck');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
 }