const fs = require("fs"); // imports file system

// reading files

// // this function is ASYNCHRONOUS
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data); // shows buffer
//   console.log(data.toString); // shows method
//   console.log(data.toString()); // shows text in data
// });

// console.log('last line'); // this is executed first

// writing files
// //creates a new file if file you're writing to doesn't exist
// fs.writeFile("./docs/blog2.txt", "FUck me", () => {
//     console.log('file was written');

// });




// directories


// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }




// deleting files
// if(fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) {
//             console.log(err);
            
//         }
//         console.log('file deleted');
        
//     })
// }