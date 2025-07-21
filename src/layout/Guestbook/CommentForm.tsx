import { useState } from 'react';
import styled from '@emotion/styled';
// import { push, ref, serverTimestamp } from 'firebase/database';
// import { realtimeDb } from '../../firebase.ts';

// TODO: 保存姓名、留言内容、创建时间和填写日期。
// const guestbookRef = ref(realtimeDb, 'guestbook');

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!name || !message) {
      alert('请填写姓名和留言内容。 🥹');
    } else {
      e.preventDefault();
      // TODO: 保存姓名、留言内容、创建时间和填写日期。
      // const guestbookMessage = {
      //   sender: name,
      //   message: message,
      //   createdAt: serverTimestamp(),
      //   date: new Date().toLocaleString(),
      // };
      // void push(guestbookRef, guestbookMessage);
      //
      // alert('消息已发送. 💌');
      setName('');
      setMessage('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="姓名"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="留言"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit">发送</SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
`;
export default CommentForm;
