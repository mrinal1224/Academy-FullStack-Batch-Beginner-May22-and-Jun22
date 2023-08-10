const fs = require('fs')


const path = require('path')



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

// fs.unlinkSync('f4.txt')

// console.log('file deleted')


// Fs module with Directories


// create and delete a directory (FOLDER)

// fs.mkdirSync('myDirectory')

// fs.mkdirSync('myDirectory2')

// fs.mkdirSync('myDirectory3')

// console.log('Directories Created')


// fs.rmdirSync('myDirectory')

// console.log('Directory Removed')


// Check wheter a directory or a file exists or not

// let doesExist = fs.existsSync('f6.txt')

// console.log(doesExist)


// Copying a file from one directory to another

// srcFilePath
// destinationDirectoryPath

let srcFilePath = '/Users/admin/Desktop/Academy FullStack Batch Beginner May22 and Jun22/Node-1/node_inbuilt_modules/myDirectory2/NewFile.txt'

let destDirectoryPath = '/Users/admin/Desktop/Academy FullStack Batch Beginner May22 and Jun22/Node-1/node_inbuilt_modules/myDirectory3'


let toBeCopiedFileName = path.basename('/Users/admin/Desktop/Academy FullStack Batch Beginner May22 and Jun22/Node-1/node_inbuilt_modules/myDirectory2/NewFile.txt')



console.log(toBeCopiedFileName)

let destPath = path.join(destDirectoryPath ,toBeCopiedFileName )

console.log(destPath)


fs.copyFileSync(srcFilePath , destPath)

fs.unlinkSync(srcFilePath)


console.log('File Copied')













