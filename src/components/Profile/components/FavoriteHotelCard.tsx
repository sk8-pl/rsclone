import { HeartFilled } from "@ant-design/icons";
import { Card } from "antd";

const { Meta } = Card;

export const FavoriteHotelCard = () => (
  <Card
    hoverable
    style={{ width: 340 }}
    cover={
      <img
        alt="example"
        src="https://cdn.dayrooms.com/image_cache/A1000/1783/King-d16ae5df94d1ffadec0a2eb6ffa86c97-hotel-homepage.jpg"
      />
    }
  >
    <Meta title="Hotel Park Inn" />
  </Card>
);
