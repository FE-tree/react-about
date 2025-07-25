// import { useReducer } from 'react';
import { useReducer } from './MyReducer.js';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { initialState, messengerReducer } from './messengerReducer';

export default function Messenger() {
  contacts.forEach(item => {
    if(item.id===0) {
      initialState.message[item.id] = '你好'
    } else{
      initialState.message[item.id] = ''
    }
  })
  console.log(initialState)
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  {id: 1, name: 'Alice', email: 'alice@mail.com' },
  {id: 2, name: 'Bob', email: 'bob@mail.com' },
];
