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
  GreenBar,
} from '../../styles/global.styled';
import HeaderApollo from '../../components/Header/Header.apollo';
import FooterView from '../../components/Footer/Footer.view';
import {
  isCorrectPassword,
  isPasswordEqual,
  isValidEmail,
} from '../../utils/utils';
import {ResetPasswordData} from '../../@types/user';

interface Props {
  form: UseFormReturn<{
    token: string;
    new_password: string;
    passwordAgain: string;
  }>;
  onSubmit: SubmitHandler<ResetPasswordData>;
}

const ChangePasswordView = ({form, onSubmit}: Props) => {
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
              <GreenBar margin="0 0 10px 0">
                <span className="icon-Success" />
                <p>
                  Teraz należy wypełnic poniższe pola tekstowe <br /> i hasło
                  zostanie zmienione.
                </p>
              </GreenBar>
              <Col width="100%" gap="10px">
                <Controller
                  control={form.control}
                  name="new_password"
                  rules={{required: true, validate: isCorrectPassword}}
                  render={({field}) => (
                    <>
                      <Row width="100%">
                        <TextInput
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          icon="icon-Password"
                          title="Hasło"
                          type="password"
                          placeholder="User123"
                          error="Hasło nie jest poprawne."
                          state={
                            form.formState.errors.new_password ? 'error' : ''
                          }
                          isAutoCompleted
                        />
                      </Row>
                      <InfoBar>
                        <span className="icon-Info" />
                        <p>
                          Hasło musi zawierać przynajmniej 8 znaków, <br />
                          jedną cyfrę oraz jedną dużą literę.
                        </p>
                      </InfoBar>
                    </>
                  )}
                />
              </Col>
              <Row width="100%">
                <Controller
                  control={form.control}
                  name="passwordAgain"
                  rules={{
                    required: true,
                    validate: (passwordAgain: string) =>
                      isPasswordEqual(
                        form.getValues('new_password'),
                        passwordAgain,
                      ),
                  }}
                  render={({field}) => (
                    <TextInput
                      value={field.value}
                      onChange={field.onChange}
                      icon="icon-Password"
                      inputRef={field.ref}
                      title="Powtórz hasło"
                      placeholder="**********"
                      error="Hasła nie są identyczne!"
                      state={form.formState.errors.passwordAgain ? 'error' : ''}
                      type="password"
                      autoComplete="on"
                      isAutoCompleted
                    />
                  )}
                />
              </Row>
              <Row justifyContent="center">
                <BtnPrimary type="submit" padding="0 20px">
                  Zmień hasło
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

export default ChangePasswordView;
