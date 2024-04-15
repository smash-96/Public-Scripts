import React, { useState } from 'react';

function ContactManager() {
    // Initialize state with a Map
    const [contacts, setContacts] = useState(new Map());

    // Function to add a new contact
    const addContact = (id, name, phone) => {
        setContacts(prevContacts => new Map(prevContacts.set(id, { name, phone })));
    };

    // Function to read a contact by ID
    const getContact = id => {
        if (contacts.has(id)) {
            return contacts.get(id);
        } else {
            return null;
        }
    };

    // Function to update an existing contact
    const updateContact = (id, name, phone) => {
        if (contacts.has(id)) {
            setContacts(prevContacts => new Map(prevContacts.set(id, { name, phone })));
        } else {
            console.log("Contact not found!");
        }
    };

    // Function to delete a contact
    const deleteContact = id => {
        if (contacts.has(id)) {
            setContacts(prevContacts => {
                const newContacts = new Map(prevContacts);
                newContacts.delete(id);
                return newContacts;
            });
        } else {
            console.log("Contact not found!");
        }
    };

    return (
        <div>
            <h1>Contact Manager</h1>
            <button onClick={() => addContact(1, 'John Doe', '123-456-7890')}>Add John Doe</button>
            <button onClick={() => updateContact(1, 'John Doe', '987-654-3210')}>Update John's Phone</button>
            <button onClick={() => deleteContact(1)}>Delete John Doe</button>
            <div>
                <h2>Contacts:</h2>
                <ul>
                    {[...contacts.entries()].map(([id, { name, phone }]) => (
                        <li key={id}>{name} - {phone}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactManager;
