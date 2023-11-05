const t = 'weetew, gfoa, asdih ihasd. iashd ijdsaf qihsf: sadsf (re q we etetr)'

console.log(contarPalabras(t))

function contarPalabras(texto) {
    const palabras = texto.split(' ')

    return palabras.length
}