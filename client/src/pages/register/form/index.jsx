import { Button, Form, Input } from "antd";

import "./style.override.css";

export const RegisterForm = ({ onRegister, isLoading, onFormFailed }) => {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onRegister}
      onFinishFailed={onFormFailed}
      autoComplete="on"
      className="formValidation"
    >
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="First name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your Email Id!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email Id" />
      </Form.Item>
      {/* 
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please enter your Phone number!",
          },
        ]}
      >
        <Input placeholder="Phone number" />
      </Form.Item> */}

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password",
            type: "password",
          },
        ]}
      >
        <Input placeholder="Password" />
      </Form.Item>

      {/* <Form.Item
        name="Message"
        rules={[
          {
            required: true,
            message: "Please enter your Message!",
          },
        ]}
      >
        <Input.TextArea placeholder="Tell us about yourself..." />
      </Form.Item> */}

      <Form.Item className="btn">
        <Button type="primary" loading={isLoading} htmlType="submit">
          {!isLoading && <>Submit</>}
        </Button>
      </Form.Item>
    </Form>
  );
};
