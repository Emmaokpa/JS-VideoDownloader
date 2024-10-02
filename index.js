// // create a simple cli application

// // Step 1: Import the readline module
// const readline = require('readline');

// // Step 2: Create an interface for reading input and writing output
// const rl = readline.createInterface({
//     input: process.stdin,  // Read from standard input (the keyboard)
//     output: process.stdout // Write to standard output (the console)
// });

// // Step 3: Ask the user a question
// rl.question('What is your name? ', (answer) => {
//     // Step 4: Use the user's answer
//     console.log(`Hello, ${answer}!`); // Greet the user

//     // Step 5: Close the interface
//     rl.close(); // End the input process
// });

// // Step 6: Listen for the 'closed' event
// rl.on('closed', () => {
//     console.log('Interface closed'); // Notify that the interface is closed
//     process.exit(0); // Exit the program successfully
// });

//use node js for reading and writing to a txt file

// // Step 1: Import the file system module
const fs = require('fs');

// // Step 2: Read content from input.txt
// let textin = fs.readFileSync('./Files/input.txt', 'utf-8');

// // Step 3: Print the content read from the file
// console.log(textin);

// // Step 4: Prepare new content to write
// let content = `Data read from input.txt: ${textin}\nDate created: ${new Date()}`;

// // Step 5: Write the new content to output.txt
// fs.writeFileSync('./Files/output.txt', content);


// // Step 6: Notify that writing is complete
// console.log('Content written to output.txt');

// //read and write a file asynchronously

// fs.readFile('./Files/start.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data)
// }
// )


// const fs = require('fs').promises;

// async function readMultipleFiles() {
//     try {
//         const file1 = await fs.readFile('file1.txt', 'utf8');
//         const file2 = await fs.readFile('file2.txt', 'utf8');
//         console.log('Contents of file1:', file1);
//         console.log('Contents of file2:', file2);
//     } catch (err) {
//         console.error('Error reading files:', err);
//     }
// }

// readMultipleFiles();

//create a server in node js



