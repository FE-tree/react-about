import { people } from '../../utils/data.js';

const people1 = people.filter(person => person.profession==="化学家");
const people2 = people.filter(person => person.profession!=="化学家");
function List(list) {
  const listItems = list.map(person =>
    <li key={person.id}>
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        因{person.accomplishment}而闻名世界
      </p>
    </li>
  );
  return listItems
}

function AboutPage() {
    
    return (
      <div>
        <div>欢迎来到AboutPage</div>
        <br />
        <article>
            <h1>科学家</h1>
            <ul>{List(people1)}</ul>
        </article>
        <article>
            <h1>其余人</h1>
            <ul>{List(people2)}</ul>
        </article>
      </div>
    );
  }
   
  export default AboutPage;