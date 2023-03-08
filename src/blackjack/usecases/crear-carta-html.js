/**
 * 
 * @param {String} carta 
 * @returns {HTMLIFrameElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) =>{
    if( !carta ) throw new Error ('La carta es un valor obligatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}