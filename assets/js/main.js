let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];



const input = document.getElementById('input_text')
const outputCrypt = document.getElementById('output_crypt')

const encrypt = () => {
    const newInput = input.value.toUpperCase();
    let outputMorse = '';
    // console.log(newInput);
    for (let i = 0; i < newInput.length; i++) {
        // console.log(newInput[i]);
        morseAlphabet.map((el) => {
            // console.log(el.letter);
            if (newInput[i] == el.letter) {
                outputMorse += `${el.morseCode}  `
                    // console.log(outputMorse);
                outputCrypt.innerHTML = outputMorse;
            }
        })

        // for (let n = 0; n < morseAlphabet.length; n++) {
        //     // console.log(morseAlphabet[n]);
        //     if (newInput[i] == morseAlphabet[n].letter) {
        //         outputMorse += morseAlphabet[n].morseCode
        //             // console.log(outputMorse);
        //         outputCrypt.innerHTML = outputMorse;
        //     }
        // }


    }
}