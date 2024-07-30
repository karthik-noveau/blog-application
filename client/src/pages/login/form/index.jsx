import { Button, Form, Input } from "antd";

import "./style.override.css";
import { useState } from "react";

export const LoginForm = ({ onLogin, isLoading, onFormFailed }) => {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onLogin}
      onFinishFailed={onFormFailed}
      autoComplete="on"
      className="formValidation"
    >
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

      <Form.Item className="btn">
        <Button type="primary" loading={isLoading} htmlType="submit">
          {!isLoading && <>Submit</>}
        </Button>
      </Form.Item>
    </Form>
  );
};
