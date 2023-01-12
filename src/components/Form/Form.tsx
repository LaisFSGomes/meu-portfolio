import { Button, Input, Title } from "components";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, FormDraw, FormWrapper } from "./Form.styles";

export const Form: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  return (
    <FormWrapper>
      <FormDraw />
      <Title>Entre em Contato</Title>
      <Container data-aos="fade-up">
        <Input
          label="e-mail"
          id="email"
          type="email"
          onChange={onEmailChange}
          value={email}
        />
        <Input
          label="nome"
          id="name"
          type="text"
          onChange={onNameChange}
          value={name}
        />
        <Input
          label="assunto"
          id="title"
          type="text"
          onChange={onTitleChange}
          value={title}
        />
        <Input
          label="mensagem"
          id="message"
          type="textarea"
          onChange={onMessageChange}
          value={message}
        />
        <Button>Enviar</Button>
      </Container>
    </FormWrapper>
  );
};
