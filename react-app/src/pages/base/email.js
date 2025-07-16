import { useState } from 'react';
import { letters } from '../../utils/data';

function Letter({
    letter,
    onToggle,
    isSelected,
  }) {
    return (
      <li className={
        isSelected && 'selected'
      }>
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => {
              onToggle(letter.id);
            }}
          />
          {letter.subject}
        </label>
      </li>
    )
  }

export default function MailClient() {
  const [selectedId, setSelectedId] = useState([]);

  // TODO: 支持多选
  // const selectedCount = 0;

  function handleToggle(toggledId) {
    // TODO: 支持多选
    // setSelectedId(toggledId);

    let item = letters.filter(item => item.id === toggledId)[0]
    if(selectedId.includes(toggledId)) {
      item.isStarred = false
    } else {
      item.isStarred = true
    }

    let selectedIdArr = []
    letters.forEach(item => {
      if(item.isStarred) {
        selectedIdArr.push(item.id)
      }
    })
    setSelectedId(selectedIdArr)
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: 支持多选
              // letter.id === selectedId
              selectedId.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedId.length} letters
          </b>
        </p>
      </ul>
    </>
  );
}
