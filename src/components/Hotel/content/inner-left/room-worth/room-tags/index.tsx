import { Tag, Divider } from "antd";
import "./style.css";
import { useState, useEffect } from "react";

const TagsWorth = () => {
  const [dataTags, setData] = useState([
    {
      facility_name: "Питание и напитки",
    },
  ]);

  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("facilities-hotel.json");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const result = dataTags.map((obj, i) => {
    const numColor = i > 10 ? i - 10 : i;
    return <Tag color={colors[numColor]}>{obj.facility_name}</Tag>;
  });

  return (
    <>
      <Divider orientation="left">Удобства</Divider>
      <div>{result}</div>
    </>
  );
};

export default TagsWorth;
