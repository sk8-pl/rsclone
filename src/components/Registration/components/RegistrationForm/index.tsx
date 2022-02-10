import "antd/dist/antd.css";
import "./style.css";
import { Form, Input, Select, Button, DatePicker } from "antd";
import { useState } from "react";
import { useHttp } from "../../../../hooks/http.hooks";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const config = {
  rules: [{ type: "object" as const, message: "Please select time!" }],
};

const RegistrationForm = () => {
  const { loading, error, request } = useHttp();
  const [forms, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event: { target: { name: any; value: any } }) => {
    setForm({ ...forms, [event.target.name]: event.target.value });
  };

  const reqisterHandler = async () => {
    try {
      const data = await request("register", "POST", { ...forms });
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }}>
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
        <Option value="380">+380</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className="registration__form"
      onFinish={onFinish}
      initialValues={{
        prefix: "375",
      }}
      scrollToFirstError
    >
      {/* <Form.Item
        name="Name"
        label="Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Surname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your surname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker style={{ width: "100%" }} />
      </Form.Item> */}
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input name="email" onChange={changeHandler} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password name="password" onChange={changeHandler} />
      </Form.Item>

      {/* <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ message: "Please input your phone number!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[{ message: "Please input Intro" }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item> */}

      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="registration-button"
          onClick={reqisterHandler}
          disabled={loading}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
