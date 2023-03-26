const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

// invokeAction({action: "list"})
// invokeAction({action: "readById", id: "drsAJ4SHPYqZeG-83QTVW"});
// invokeAction({action: "add", name: "Sam Fisher", phone: '123-456-123'})
// invokeAction({action: "updateById", id: "cc560b04-c688-4e25-958d-8be80cef8f52",  "name": "Sam_Fisher", "phone": "(748) 000-0000"})
// invokeAction({action: "deleteById", id: "6b934506-a3a1-4074-949d-c60aca0fd69b"})
