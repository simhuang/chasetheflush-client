import React, { useState } from "react";

import { useRouter } from "next/router";

import { Button, Form, Input } from "antd";

import { createPost } from "src/api/paths";

import { create } from "src/api/apiHelper";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const CreatePostContainer = () => {
  const router = useRouter();
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    upvotes: 0,
    commentCount: 10,
    views: 0,
  });

  const onSubmit = async () => {
    const url = createPost();
    await create(url, newPost);
    router.push("/");
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  const onTitleChange = (e: any) => {
    setNewPost({ ...newPost, title: e.target.value });
  };

  const onContentChange = (e: any) => {
    setNewPost({ ...newPost, content: e.target.value });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onSubmit}
      validateMessages={validateMessages}
      scrollToFirstError={true}
    >
      <Form.Item
        name={["user", "name"]}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={onTitleChange} />
      </Form.Item>
      <Form.Item
        name={["user", "Content"]}
        label="Content"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea rows={4} onChange={onContentChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePostContainer;
