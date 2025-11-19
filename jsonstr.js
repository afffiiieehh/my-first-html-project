// 1. Normal JavaScript Object
    const strobj = {
        name : "michu",
        about : `he is good listener
        and very powerful man
        he gone africa`,
        id : 3,
    };

    console.log(strobj);        // whole object
    console.log(strobj.name);   // "michu"
    console.log(strobj.id);     // 3

    // 2. JSON string (must be one line for "about", use \n for new lines)
    const stronjson = `{
      "name": "michu",
      "about": "he is good listener and very powerful man he gone africa",
      "id": 3
    }`; // those two dotes (``) used make JSON code to inside javascript 

    console.log(typeof stronjson); // "string"

    // 3. Convert JSON -> Object
    const stringtoobj = JSON.parse(stronjson);
    console.log(stringtoobj);        // whole object
    console.log(stringtoobj.about);  // shows with new lines

    // 4. Convert Object -> JSON string
    const stringfy = JSON.stringify(strobj);
    console.log(stringfy);
    console.log(typeof stringfy);
