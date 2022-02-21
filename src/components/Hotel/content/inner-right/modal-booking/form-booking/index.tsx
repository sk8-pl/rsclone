import "./style.css";
import { useState } from "react";
import { Form, Select, Button } from "antd";
import { tailFormItemLayout } from "../../../../constants/tailForm";
import { DateArrive } from "../../../../../Hotels/components/Dates/DateArrive";
import { DateLeave } from "../../../../../Hotels/components/Dates/DateLeave";
import { useParams } from "react-router";

const { Option } = Select;

type LayoutType = Parameters<typeof Form>[0]["layout"];

const FormBooking = (props: any) => {
  const data = props.data;
  const { id } = useParams();

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const priceDay = data.minrate;
  const valueDays = 4;
  const discount = 300;
  const extraService = 300;

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
    >
      <div className="form-header">
        <div className="form-header_left">ID Отеля{id}</div>
        <div className="form-header_right">{priceDay}₽ в сутки</div>
      </div>

      <div className="date-booking">
        <DateArrive />
        <DateLeave />
      </div>

      <Form.Item
        name="guest"
        label="Гости"
        rules={[{ required: true, message: "Гости" }]}
      >
        <Select placeholder="выберите количество гостей">
          <Option value="1">1 гость</Option>
          <Option value="2">2 гостя</Option>
          <Option value="3">3 гостя</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <div className="price-container">
          <div className="price">
            {priceDay}₽ x {valueDays} суток
          </div>
          <div className="price-total">{priceDay * valueDays}₽</div>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="price-container">
          <div className="price-discount">
            Сбор за услуги: скидка {discount}₽
          </div>
          <div className="discount-total">0₽</div>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="price-container">
          <div className="price-discount">Сбор за дополнительные услуги</div>
          <div className="discount-total">{extraService}₽</div>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="price-container">
          <div className="price-discount">Итого</div>
          <div className="discount-total">
            {priceDay * valueDays - discount + extraService}₽
          </div>
        </div>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Забронировать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormBooking;
