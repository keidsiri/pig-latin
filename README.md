# Practice: Form Input Types

By _Kate Kiatsiri_ , _Curtis Brooks_

_week:3 ,lesson page:28_

## Technologies used
  1. HTML
  2. CSS
  3. Bootstrap
  4. Javscript & jQuery

## Description
_Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"?_

## Set up/installation requirement
* Code editor required (such as Visual Studio Code) and Github account.
* Navigate this address https://github.com/keidsiri/Portfolio into your browser or 
<a href="https://github.com/keidsiri/Portfolio"> click here! </a>
* Clone this repository to your desktop.
* Navigate to the top of disrectory
* Connect to your Github repository
* Open files in VS code to view or edit
* Open file name _index.html_ in your browser to view this project.


## Known bugs
* _No known issues_

## License
MIT License _(https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Kate Kiatsiri , Curtis Brooks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you have any questions please feel free to [Contact me](mailto:keidsiri@gmail.com)_


******************************

### Testing :

Describe: Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"?

Test: "It will determine if it's empty string or not"
Code: pigLatin("");
Expected Output: false (not the empty string)
X

Test: "It will recognize a consonant or vowel as the first letter of a word"
Code: pigLatin("true");
Expected Output: "consonant as first letter"
X

Test: "If the word starts with a vowel, then it will add 'way' to the end of the word."
Code: pigLatin("away");
Expected Output: "awayway"
X

Test: "For words beginning with one or more consonants. It will recognize multiple consonants at the beginning of a word"
Code: pigLatin("true");
Expected Output: true
X

Test: "It will move consonants before the first consonant in the word to the end of the word, but before adding 'ay' to the end of the word"
Code: pigLatin("code");
Expected Output: "odec"
X

Test: "It will add 'ay' to the end of words that begin with one or more consonants."
Code: pigLatin("code");
Expected Output: "odecay"
X

Test: "If the word starts with 'qu' or contain 'qu', it will move 'qu' and consonants before qu to the end of the word and add "ay"
Code: pigLatin("quality", "squeal" , "ealsquay.");
Expected Output: "alityquay" 

Test: "It will take text from the user and split it into an array"
Code: pigLatin("This is text");
Expected Output: "["This", "is", "text"]"