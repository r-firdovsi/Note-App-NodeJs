const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


// Customize yarg version
yargs.version('1.1.0')

// create add comment
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})


// create list command

yargs.command({
    command: 'list',
    descripe: "List your notes",
    handler() {
        notes.listNotes()
    }
})

// create read command

yargs.command({
    command: 'read',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    descripe: 'Read a note',
    handler(argv) {
       notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)