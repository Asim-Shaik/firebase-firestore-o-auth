import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
export default function Tab2() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");
  const [id, setId] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data);
      setData("user deleted");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="register">
      <form className="registerform" onSubmit={handleSubmit}>
        <label>ID</label>
        <input
          className="registerinput"
          type="text"
          placeholder="enter your id"
          onChange={(e) => setId(e.target.value)}
        />
        {!user ? (
          <div>please sign in to use</div>
        ) : (
          <button className="registerbutton" type="submit">
            delete
          </button>
        )}

        {error && <span>something went wrong</span>}
      </form>
      <div>
        <h2>{data}</h2>
      </div>
    </div>
  );
}
