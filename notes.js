const fs = require('fs');
const chalk = require('chalk');



// Add and Save Notes
const addNote = (title, body) => {
    const notes = loadNotes();
    const dublicateNote = notes.find(note => note.title === title)

    if(!dublicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);
        console.log(chalk.white.bgGreen.bold("New Note Added :D"))
    } else {
        console.log(chalk.white.bgRed.bold('Note title taken!'))
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// Remove Notes
const removeNotes = title => {
    const notes = loadNotes();

    // My Solitions
    // notes.filter(note => {
    //     if(note.title === title) {
    //         notes.splice(notes.indexOf(note), 1);
    //         saveNotes(notes);
    //         console.log('Note Removed');
    //     }
    // })

    // Lesson Solitions

    const notesToKeep = notes.filter(note => note.title !== title )

    if(notes.length > notesToKeep.length) {
        console.log(chalk.white.bgGreen.bold('Note Removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.white.bgRed.bold('No note found!'));
    }

}

const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports= {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
};
