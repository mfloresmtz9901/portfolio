import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navitage = useNavigate();

  function navigateHandler() {
    navitage("/products");
  }

  return (
    <>
      <h1>My homepage</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
