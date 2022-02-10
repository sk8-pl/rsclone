import "antd/dist/antd.css";
import "./style.css";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/Auth.Context";
import { useHttp } from "../../../../hooks/http.hooks";

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request } = useHttp();
  const [forms, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event: { target: { name: any; value: any } }) => {
    setForm({ ...forms, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/login", "POST", { ...forms });
      auth.login(data.token, data.userId);
    } catch (err: any) {
      console.log("crch", err.message);
    }
  };

  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your E-mail!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="E-mail"
          name="email"
          onChange={changeHandler}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={loginHandler}
          disabled={loading}
        >
          Log in
        </Button>
        Or{" "}
        <a className="login-form-register" href="">
          register now!
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
