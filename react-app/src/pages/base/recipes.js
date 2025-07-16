import { recipes } from '../../utils/data.js';

// 组件化
function RecipeCom({ id, name, ingredients }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <div>
        <span>所需的原料: </span>
        {
          ingredients.map((name,i) =>
            <span key={i}>
              {name + (i!==ingredients.length-1 && "、")}
            </span>
          )
        }
      </div>
    </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {/* 直接遍历渲染 */}
      {
        recipes.map(item => 
          <div key={item.id}>
            <h2>{item.name}</h2>
            <div>
              <span>所需的原料: </span>
              {
                item.ingredients.map((name,i) => 
                  <span key={i}>
                    {name + (i!==item.ingredients.length-1 && "、")}
                  </span>
                )
              }
            </div>
          </div>
        )
      }

      <br />
      <h1>菜谱2</h1>
      {
        recipes.map(item => 
          // <RecipeCom id={item.id} name={item.name} ingredients={item.ingredients}></RecipeCom>
          <RecipeCom {...item} key={item.id}></RecipeCom>
        )
      }
    </div>
  );
}
