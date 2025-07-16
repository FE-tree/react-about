export default function SearchButton({ handleClick }) {
    return (
      <button onClick={() => {
        handleClick()
      }}>
        搜索
      </button>
    );
  }
  