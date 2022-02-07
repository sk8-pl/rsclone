import "./style.css";
import { Image } from "antd";
import { useState } from "react";
import React from "react";

interface NumbersPhoto {
  num: number;
}

const ImageHotel = (props: NumbersPhoto) => {
  const testURL =
    "https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-max-1mb.gif";
  const [imageURL, setImageURL] = useState(testURL);

  async function getImage() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        setImageURL(JSON.parse(this.responseText)[props.num].url_max);
        // const array = Object(this.responseText);
        // console.log(array);
        console.log(JSON.parse(this.responseText)[props.num].url_max);
        return this.responseText;
      }
    });

    xhr.open(
      "GET",
      "https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=1377073&locale=ru"
    );
    xhr.setRequestHeader("x-rapidapi-host", "booking-com.p.rapidapi.com");
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "2189fd4ed5msh931f3fb548a96c3p1797d5jsn1bf4c8e6cd2c"
    );

    xhr.send(data);
  }

  // getImage();
  return (
    <Image width={"100%"} height={"100%"} src={imageURL} preview={false} />
  );
};

export default ImageHotel;
