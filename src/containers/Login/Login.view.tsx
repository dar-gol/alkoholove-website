import React from 'react';
import {Controller, SubmitHandler, UseFormReturn} from 'react-hook-form';
import {useTheme} from 'styled-components';
import TextInput from '../../components/Inputs/TextInput';
import {
  BtnPrimary,
  Col,
  Primary,
  Row,
  Text,
  Img,
  Container,
  Form,
} from '../../styles/global.styled';
import HeaderApollo from '../../components/Header/Header.apollo';
import {LoginData} from '../../@types/user';
import FooterView from '../../components/Footer/Footer.view';

interface Props {
  form: UseFormReturn<{username: string; password: string}>;
  onSubmit: SubmitHandler<LoginData>;
}

const LoginView = ({form, onSubmit}: Props) => {
  const theme = useTheme() as {palette: {[k: string]: string}};
  return (
    <>
      <HeaderApollo />
      <Col alignItems="center">
        <Container backgroundColor={theme.palette.Grey5}>
          <Col
            justifyContent="center"
            alignItems="center"
            gap="20px"
            padding="50px 0">
            <Form onSubmit={form.handleSubmit(onSubmit)}>
              <Row alignItems="center" gap="20px">
                <Img
                  width="50px"
                  height="50px"
                  src="/logo192.png"
                  alt="Logo AlkohoLove"
                />
                <Text
                  as="h1"
                  type="h3"
                  weight="bold"
                  size="large"
                  color={theme.palette.Grey80}>
                  Alkoho<Primary>Love</Primary>
                </Text>
              </Row>
              <Row>
                <Text
                  as="h2"
                  type="h4"
                  weight="bold"
                  size="large"
                  color={theme.palette.Grey80}>
                  Zaloguj się
                </Text>
              </Row>
              <Row width="100%">
                <Controller
                  control={form.control}
                  name="username"
                  rules={{required: true}}
                  render={({field}) => (
                    <TextInput
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      icon="icon-Profil"
                      title="Nazwa użytkownika"
                      placeholder="User123"
                      error="Nazwa uzytkownika jest wymagana"
                      state={form.formState.errors.username ? 'error' : ''}
                      isAutoCompleted
                    />
                  )}
                />
              </Row>
              <Row width="100%">
                <Controller
                  control={form.control}
                  name="password"
                  rules={{
                    minLength: 8,
                    required: true,
                  }}
                  render={({field}) => (
                    <TextInput
                      value={field.value}
                      onChange={field.onChange}
                      icon="icon-Password"
                      inputRef={field.ref}
                      title="Hasło"
                      placeholder="**********"
                      error="Hasło jest nieprawidłowe!"
                      state={form.formState.errors.password ? 'error' : ''}
                      type="password"
                      autoComplete="on"
                      isAutoCompleted
                    />
                  )}
                />
              </Row>
              <Row justifyContent="center">
                <BtnPrimary type="submit" width="150px">
                  Zaloguj się
                </BtnPrimary>
              </Row>
            </Form>
            <Row gap="5px">
              <Text
                type="body"
                weight="regular"
                size="medium"
                color={theme.palette.Grey40}>
                Nie pamiętasz hasła?
              </Text>
              <Text
                as="a"
                href="/reset_password"
                type="body"
                weight="regular"
                size="medium"
                color={theme.palette.Secondary90}>
                Kliknij tutaj
              </Text>
            </Row>
          </Col>
        </Container>
      </Col>
      <Row width="100%" padding="50px 0" backgroundColor={theme.palette.White}>
        <Container>
          <FooterView />
        </Container>
      </Row>
    </>
  );
};

export default LoginView;
