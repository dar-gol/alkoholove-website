import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled, {useTheme} from 'styled-components';
import {IAlcohol} from '../../@types/alcohol';
import {BtnPrimary, Col, Form, Row, Text} from '../../styles/global.styled';
import TextInput from '../Inputs/TextInput';
import Modal from '../modal/Modal';

interface Props {
  alcohol?: IAlcohol;
  isOpen: boolean;
  onClose: () => void;
  sendError: (description: string) => void;
}

type SuggestChange = {
  description: string
}

const defaultValues = {
  description: "",
};

const StyledForm = styled(Form)`
  min-width: 300px;
  gap: 10px;
  padding: 0;
` 

const SuggestChanges = ({alcohol, isOpen, onClose, sendError}: Props) => {
  const theme = useTheme();
  const form = useForm({ defaultValues });
  const onSubmit = (data: SuggestChange) => {
    sendError(data.description);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Col gap="10px">
        <Col>
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey90}>
            Zaproponuj zmiany
          </Text>
          {alcohol && (
            <Text
              type="caption"
              weight="regular"
              size="large"
              color={theme.palette.Grey40}>
              {alcohol.name}
            </Text>
          )}
        </Col>
        <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
        <Row width="100%">
          <Controller
            control={form.control}
            name="description"
            rules={{
              required: true,
            }}
            render={({field}) => (
              <TextInput
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                icon="icon-Flagged_comment"
                type="textarea"
                title="Opisz problem"
                error="Opis problemu jest wymagany"
                placeholder="Niepoprawny typ"
                state={form.formState.errors.description ? 'error' : ''}
              />
            )}
          />
          </Row>
          <BtnPrimary type="submit" width='100%'>Zaproponuj zmiany</BtnPrimary>
        </StyledForm>
      </Col>
    </Modal>
  );
};

export default SuggestChanges;