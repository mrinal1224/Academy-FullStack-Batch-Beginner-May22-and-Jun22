const fs = require('fs')



//1 . Read , Write , update and delete a file

// let content = fs.readFileSync('f1.txt')

// console.log("Content -> " + content)

// write a file with FS module

// writeFileSync('filename' , content)

// fs.writeFileSync('f3.txt' , 'This is the content for File 3')



// fs.writeFileSync('f4.txt' , 'This content is for f4')
// console.log('Data written')

// update or append a file 

// appendFileSync('filename' , 'data you want to append')

// fs.appendFileSync('f2.txt' , 'This is the updated Data')

// console.log('Data updated')


// Delete a file with FS module

// unlickSync('filename')

fs.unlinkSync('f4.txt')

console.log('file deleted')


// Fs module with Directories

