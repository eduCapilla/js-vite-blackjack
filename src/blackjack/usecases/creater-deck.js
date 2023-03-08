import _ from 'underscore';
/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDecarta Ejemlo: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales Ejemlo : ['C','D','H','S']
 * @returns {Array<string>} regresa un deck de cartas
 */
export const crearDeck = (tiposDecarta, tiposEspeciales) => {

    if( !tiposDecarta || tiposDecarta.length === 0 ) throw new Error('tiposDecarta es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecarta ) {
            deck.push( i + tipo);
        }
    }
 
    for( let tipo of tiposDecarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
 }


 //export default crearDeck;