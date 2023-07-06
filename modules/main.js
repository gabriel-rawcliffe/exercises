// main.js
// Encode
import { encode } from './encode.js'

const input = document.getElementById('PlainTextArea')
const output = document.getElementById('CodedText')

input.addEventListener('change', (event) => {
  const plaintext = input.value
  const codedText = encode(plaintext)
  output.textContent = codedText
})

// Decode
import { decode } from './decode.js'

const input2 = document.getElementById('PlainTextAreaDecode')
const output2 = document.getElementById('decodedText')

input2.addEventListener('change', (event) => {
  const plaintext2 = input2.value
  const decodedText = decode(plaintext2)
  output2.textContent = decodedText
})
