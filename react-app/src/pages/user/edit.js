import { useState } from 'react';
import './edit.css'

export default function EditProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  
  return (
    <form className={'form'} onSubmit={ (e) => {
      e.preventDefault();
      setIsEdit(!isEdit);
    } }>
      <label>
        First name: 
        {
          isEdit ? (
            <input value={firstName} onChange={e => {
              setFirstName(e.target.value)
            }} />
          ) : <b>{firstName}</b>
        }
      </label>
      <br />
      <label>
        Last name: 
        {
          isEdit ? (
            <input value={lastName} onChange={e => {
              setLastName(e.target.value)
            }} />
          ) : <b>{lastName}</b>
        }
      </label>
      <br />
      <button type='submit'>{isEdit ? 'Save' : 'Edit'} Profile</button>
      <p>
        <i>Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
}
