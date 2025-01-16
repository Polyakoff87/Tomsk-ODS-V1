import React, { useState } from "react";
import styles from "./AddReview.module.css";
import { useAddReviewMutation } from "../../../api/rtkApi";
import { Button, Flex, Form, Input} from "antd";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router';

export default function AddReview() {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [newReview] = useAddReviewMutation()
  let navigate = useNavigate()

  function saveReview() {
    newReview({id: uuidv4(), author: name, text: text});
    navigate('/reviews');
    console.log('ooops')
  }

  return (
    <div className={styles.wrapper}>
      <Form
        form={form}
        scrollToFirstError={{
          behavior: "instant",
          block: "end",
          focus: true,
        }}
        style={{
          paddingBlock: 32,
        }}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
          wrapperCol={{
            offset: 6,
          }}
        ></Form.Item>

        <Form.Item
          name="username"
          label="Имя"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="bio"
          label="Отзыв"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
          }}
        >
          <Flex gap="small">
            <Button type="primary" htmlType="submit" onClick={saveReview}>
              Сохранить отзыв
            </Button>
            <Button danger onClick={() => form.resetFields()}>
              Отмена
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
}
