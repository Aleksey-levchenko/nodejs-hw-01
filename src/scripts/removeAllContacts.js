import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.error('Помилка при видаленні контактів: ', error.message);
  }
};

removeAllContacts();
