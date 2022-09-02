const lyrics = 'Timi bondhu kala pakhi ami jeno ki boshonto kale tomay chinte pari ni';

const doesExist = lyrics.includes('pakhi');
console.log(doesExist);


// // we also can use veriable

// const lyrics = 'Timi bondhu kala pakhi ami jeno ki boshonto kale tomay chinte pari ni';

// const searchString = 'pakhi';

// const doesExist = lyrics.includes(searchString);

// console.log(doesExist);

// // // this oprtation is case sensitive
// // // we can ignore case

// // const lyrics = 'Timi bondhu kala pakhi ami jeno ki boshonto kale tomay chinte pari ni';
// // const searchString = 'pakhi';
// // const lyricsLowerCase = lyrics.toLowerCase();
// // const searchStringLower = searchString.toLowerCase();
// // const doesExist = lyricsLowerCase.includes(searchStringLower);
// // console.log(doesExist);


// // // // alturenetive system

// // // const lyrics = 'Timi bondhu kala pakhi ami jeno ki boshonto kale tomay chinte pari ni';
// // // const searchString = 'pakhi';

// // // const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
// // // console.log(doesExistOnline);

// // // // //..................................
// // // // // use of indexOf()

// // // // const lyrics = 'Timi bondhu kala pakhi ami jeno ki boshonto kale tomay chinte pari ni';
// // // // console.log(lyrics.indexOf('pakhi'));

// // // // if (lyrics.indexOf('sada') !== -1) {
// // // //     console.log('exist inside the string');
// // // // }
// // // // else {
// // // //     console.log('cannor find it');
// // // // }

// // // // // //...........................
// // // // // // startsWith

// // // // // const lyrics = 'Timi bondhu kala pakhi ami jeno ki boshonto kale tomay chinte pari ni';

// // // // // console.log(lyrics.startsWith('Tumi'));

// // // // // // //.......................
// // // // // // //endsWith

// // // // // // const fileName = 'mydiodata.pdf';
// // // // // // const otherFile = 'mypic.png';

// // // // // // fileName.endsWith('.pdf')