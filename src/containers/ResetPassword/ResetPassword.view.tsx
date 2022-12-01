import React from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';
import {useTheme} from 'styled-components';
import Spacings from '../../styles/spacings';
import TextInput from '../../components/Inputs/TextInput';
import {
  BtnGhost,
  BtnPrimary,
  Col,
  Icon,
  Primary,
  Row,
  Text,
  Img,
  Container,
  Form,
  InfoBar,
} from '../../styles/global.styled';
import HeaderApollo from '../../components/Header/Header.apollo';
import FooterView from '../../components/Footer/Footer.view';
import {isCorrectPassword, isValidEmail} from '../../utils/utils';

interface Props {
  form: UseFormReturn<{
    email: string;
  }>;
  onSubmit: SubmitHandler<{email: string}>;
}

const ResetPasswordView = ({form, onSubmit}: Props) => {
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
                  Resetowanie hasła
                </Text>
              </Row>
              <InfoBar>
                <span className="icon-Info" />
                <p>
                  Podaj email na którym masz konto AlkohoLove <br />a my wyslemy
                  Ci dalsze instrukcję.
                </p>
              </InfoBar>
              <Row width="100%">
                <Controller
                  control={form.control}
                  name="email"
                  rules={{
                    required: true,
                    validate: isValidEmail,
                  }}
                  render={({field}) => (
                    <TextInput
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      icon="icon-Mail"
                      title="Email"
                      placeholder="User123"
                      error="Email jest niepoprawny."
                      state={form.formState.errors.email ? 'error' : ''}
                      isAutoCompleted
                    />
                  )}
                />
              </Row>
              <Row justifyContent="center">
                <BtnPrimary type="submit" padding="0 20px">
                  Wyślij mail w celu resetu hasła
                </BtnPrimary>
              </Row>
            </Form>
            <Row gap="5px">
              <Text
                type="body"
                weight="regular"
                size="medium"
                color={theme.palette.Grey40}>
                Masz już konto?
              </Text>
              <Text
                as="a"
                href="/login"
                type="body"
                weight="regular"
                size="medium"
                color={theme.palette.Secondary90}>
                Zaloguj się
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

export default ResetPasswordView;
