import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import FormInput from './Input';
import FormTextArea from './TextArea';
import * as yup from 'yup';
import useFieldValidation from '@/hooks/useValidation';
import Alert from '../atoms/Alert';

enum FormStatus {
  SENT = 'sent',
  UNSENT = 'unsent',
  ERROR = 'error',
}

const initialValues = {
  name: '',
  company: '',
  email: '',
  message: '',
};

const ContactMeForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.UNSENT);
  const { yupField } = useFieldValidation();

  const postEmail = async (values: {
    name: string;
    company: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) return true;

      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return (
    <>
      {status === FormStatus.SENT ? (
        <Alert variant="confirmed">
          The message has been sent successfully. I will reply within 1 - 3 working days.
        </Alert>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const response = await postEmail(values);
            if (response) setStatus(FormStatus.SENT);
            else setStatus(FormStatus.ERROR);
          }}
          validationSchema={yup.object().shape({
            name: yupField.string,
            email: yupField.email,
            message: yupField.string,
          })}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-5">
              <FormInput name="name" placeholder="Name *" />
              <FormInput name="company" placeholder="Company (optional)" />
              <FormInput name="email" type="email" placeholder="Email *" />

              <FormTextArea name="message" email="message" placeholder="Message *" rows={8} />

              {status === FormStatus.ERROR && (
                <Alert variant="warning">
                  There was an error while uploading. Please try again later.
                </Alert>
              )}

              <Button
                type="submit"
                className="flex items-center justify-center sm:w-full"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default ContactMeForm;
