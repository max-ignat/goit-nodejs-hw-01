const contacts = require("./db");

const invokeAction = async ({ action, id, name, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "readById":
      const oneContacts = await contacts.getById(id);
      return console.log(oneContacts);
    case "add":
      const newContact= await contacts.add({ name, phone });
      return console.log(newContact);
    case "updateById":
      const updateContacts = await contacts.updateById(id, { name, phone });
      return console.log(updateContacts);
    case "deleteById":
      const deleteContact = await contacts.deleteById(id);
      return console.log(deleteContact);
  }
};

// invokeAction({action: "list"})
// invokeAction({action: "readById", id: "drsAJ4SHPYqZeG-83QTVW"});
// invokeAction({action: "add", name: "Sam Fisher", phone: '123-456-123'})
// invokeAction({action: "updateById", id: "cc560b04-c688-4e25-958d-8be80cef8f52",  "name": "Sam_Fisher", "phone": "(748) 000-0000"})
// invokeAction({action: "deleteById", id: "6b934506-a3a1-4074-949d-c60aca0fd69b"})
