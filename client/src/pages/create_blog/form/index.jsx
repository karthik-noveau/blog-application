import { Button, Form, Input } from "antd";

import "./style.override.css";

export const CreateBlogForm = ({ onFormFailed, onBlogCreate }) => {
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onBlogCreate}
      onFinishFailed={onFormFailed}
      autoComplete="on"
      className="formValidation"
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Please enter title",
            type: "text",
          },
        ]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Please enter description",
            type: "text",
          },
        ]}
      >
        <Input placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="imageURL"
        rules={[
          {
            required: true,
            message: "Please enter imageURL",
            type: "text",
          },
        ]}
      >
        <Input placeholder="imageURL" />
      </Form.Item>

      <Form.Item className="btn">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
