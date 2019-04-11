//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
// Only change code below this line

    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i]["firstName"]) {
            if (!contacts[i][prop]) {
                return "No such property";
            } else {            
            } return contacts[i][prop];
        } 
    }
    return "No such contact";
    /* This is outside the "for" loop because we have to check every item first before we can
     know whether or not there's "No such contact" in the whole object. If this was inside the
     loop, then it might return this if the item being checked doesn't have that contact but a 
     item that hasn't been checked yet DOES have that contact. We only want to return it after
     we've searched the entire object and don't find the contact, which we will only know 
     after the loop is done. */
}

lookUpProfile("Akira", "likes");

// check if name exists as firstName, and if prop is a key in that obj/item

// if both are true, return the value of that prop/key.

// if name doesn't exist, return "No such contact"
// if prop doesn't exist, return "No such property"

// Only change code above this line


// Change these values to test your function
