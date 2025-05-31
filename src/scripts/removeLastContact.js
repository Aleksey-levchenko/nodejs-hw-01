import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контактів немає, нічого видаляти.');
      return;
    }

    const deleteLastContact = contacts.pop();
    await writeContacts(contacts);
    return deleteLastContact;
  } catch (error) {
    console.error('Помилка при видаленні контакта: ', error.message);
  }
};

removeLastContact();
