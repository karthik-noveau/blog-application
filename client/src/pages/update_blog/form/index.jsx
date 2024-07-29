import { Button, Form, Input } from "antd";

import "./style.override.css";
import { useEffect } from "react";

export const UpdateBlogForm = ({ onFormFailed, onFormUpdate, blogData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    onFill();
  }, [blogData]);

  const onFill = () => {
    form.setFieldsValue({
      title: blogData.title,
      description: blogData.description,
      image: blogData.image,
    });
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFormUpdate}
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
        name="image"
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
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
