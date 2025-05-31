import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = contacts.concat(newContact);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка при генерації контакту: ', error.message);
  }
};

addOneContact();
