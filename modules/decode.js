// decode.js
export function decode(plaintext) {
  let decodedText = ''
  for (let i = 0; i < plaintext.length; i++) {
    let dc = plaintext.charCodeAt(i) - 9
    decodedText += String.fromCharCode(dc)
  }
  return decodedText
}
