import { useState } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import { useContext } from "react";
export default function Tab2() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
        }
      );
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="register">
      <form className="registerform" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="registerinput"
          type="text"
          placeholder="enter your Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <input
          className="registerinput"
          type="text"
          placeholder="enter your body"
          onChange={(e) => setBody(e.target.value)}
        />

        {!user ? (
          <div>please sign in to use</div>
        ) : (
          <button className="registerbutton" type="submit">
            add user
          </button>
        )}

        {error && <span>something went wrong</span>}
      </form>

      <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
