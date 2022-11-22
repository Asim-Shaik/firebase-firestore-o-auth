import { useState } from "react";
import "./tabs.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Get posts
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          POST a post
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Edit a post
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Delete a Post
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Tab1 />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Tab2 />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Tab3 />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Tab4 />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
