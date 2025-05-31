import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = contacts.concat(newContacts);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка при генерації контактів: ', error.message);
  }
};

generateContacts(5);
