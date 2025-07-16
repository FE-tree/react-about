
// import { useSearchParams, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

function Profile({
  name,
  imageId,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b> 
          { profession }
        </li>
        <li>
          <b>Awards: {awards.length} </b> 
          {awards.join(', ')}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  )
}

function LoginPage() {
  // searchParams方式传参
  // const [params] = useSearchParams();
  // const name = params.get('name'); // 通过get方法来获取数据
  // const id = params.get('id'); // // 通过get方法来获取数据

  // params方式传参
  const params = useParams();
  const name = params.name;
  const id = params.id;

  return (
    <div>
      欢迎来到login, <button onClick={() => {
        alert("id: " + id)
      }}>{ name }</button>

      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

   
  export default LoginPage;