import React, { useState, useEffect } from "react";
import RadioButtons from "./Radiobuttons";
import ArtContainer from "./ArtContainer";

const ART_CATEGORIES = [
  {
    category: "audio",
    choices: ["acoustic", "cinematic", "rock"],
  },
  {
    category: "image",
    choices: ["butterfly", "flower", "planet"],
  },
  {
    category: "text",
    choices: ["lyric", "poem", "quote"],
  },
];

export default function App() {
  //Keeps track of active categories:
  const [activeAudioCategory, setActiveAudioCategory] = useState("acoustic");
  const [activeImageCategory, setActiveImageCategory] = useState("butterfly");
  const [activeTextCategory, setActiveTextCategory] = useState("lyric");

  //Stores media being displayed:
  const [activeTab, setActiveTab] = useState("0");
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  function changeActiveArt(category, active) {
    switch (category) {
      case "audio":
        setActiveAudioCategory(active);
        break;
      case "image":
        setActiveImageCategory(active);
        break;
      case "text":
        setActiveTextCategory(active);
        break;
      default:
        break;
    }
  }

  function changeActiveTab(active) {
    setActiveTab(active);
  }

  //Fetch texts
  useEffect(() => {
    // Displays nothing while fetching new text to enhance UX
    setText(null);

    const url =
      process.env.PUBLIC_URL + "/content/text/" + activeTextCategory + ".json";
    let data = sessionStorage.getItem(url);

    //If text stored in sessionStorage, no need to fetch again
    if (data) {
      setText(JSON.parse(data).items[activeTab]);
    }

    //If not fetched before; fetch and store in sessionStorage
    else {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setText(res.items[activeTab]);
          sessionStorage.setItem(url, JSON.stringify(res));
        });
    }
  }, [activeTextCategory, activeTab]);

  //Fetch audio
  useEffect(() => {
    // Displays nothing while fetching new audio to enhance UX
    setAudio(null);

    const url =
      process.env.PUBLIC_URL +
      `/content/audio/${activeAudioCategory}/${activeAudioCategory}${activeTab}.mp3`;
    let data = sessionStorage.getItem(url);

    //If audio stored in sessionStorage, no need to fetch again
    if (data) {
      setAudio(JSON.parse(data));
    }

    //If not fetched before; fetch and store in sessionStorage
    else {
      setAudio(url);
      sessionStorage.setItem(url, JSON.stringify(url));
    }
  }, [activeAudioCategory, activeTab]);

  //Fetch image
  useEffect(() => {
    // Displays nothing while fetching new image to enhance UX
    setImage(null);

    const url =
      process.env.PUBLIC_URL +
      `/content/image/${activeImageCategory}/${activeImageCategory}${activeTab}.svg`;
    let data = sessionStorage.getItem(url);

    //If image stored in sessionStorage, no need to fetch again
    if (data) {
      setImage(JSON.parse(data));
    }

    //If not fetched before; fetch and store in sessionStorage
    else {
      fetch(url)
        .then((res) => res.text())
        .then((svg) => {
          setImage(svg);
          sessionStorage.setItem(url, JSON.stringify(svg));
        });
    }
  }, [activeImageCategory, activeTab]);

  //Store favourite artcollection in localStorage
  function makeFavourite() {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("favTab", activeTab);
      localStorage.setItem("favImage", activeImageCategory);
      localStorage.setItem("favAudio", activeAudioCategory);
      localStorage.setItem("favText", activeTextCategory);
    }
  }

  //Get favourite artcollection from localStorage (if it exists)
  function showFavourite(e) {
    e.preventDefault();
    if (typeof Storage !== "undefined") {
      if (localStorage.favImage) {
        setActiveAudioCategory(localStorage.getItem("favAudio"));
        setActiveImageCategory(localStorage.getItem("favImage"));
        setActiveTextCategory(localStorage.getItem("favText"));
        setActiveTab(localStorage.getItem("favTab"));
      } else {
        console.log("You have no favourite :(");
      }
    }
  }

  return (
    <div>
      <div className="header">
        <h1>ART EXHIBITION</h1>
      </div>

      <div className="main">
        <ArtContainer
          activeTab={activeTab}
          image={image}
          text={text}
          audio={audio}
          changeActiveTab={changeActiveTab}
        />
        <div className="btn-div">
          <button className="fav-btn" onClick={makeFavourite}>
            Make Favourite
          </button>
          <button className="fav-btn" onClick={showFavourite}>
            Show Favourite
          </button>
        </div>
      </div>

      <div>
        <div className="flex-container-radio footer">
          {ART_CATEGORIES.map((element, index) => {
            return (
              <RadioButtons
                changeActiveArt={changeActiveArt}
                active={[
                  activeAudioCategory,
                  activeImageCategory,
                  activeTextCategory,
                ]}
                key={index}
                category={element.category}
                choices={element.choices}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
