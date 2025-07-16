import { Fragment } from 'react';
 
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      <h1>诗句</h1>
      {
        poem.lines.map((line, i) =>
          <Fragment key={i}>
            {/* {i > 0 && <hr />} */}
            <p>{line}</p>
            {i < poem.lines.length-1 && <hr />}
          </Fragment>
        )
      }
    </article>
  );
}