import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Input, Label, Textarea } from '../../styled/Form';
import { H2, P } from '../../styled/GlobalElements';
import { Button } from '../../styled/Button';
import { postData } from '../../api';
import { selectSettings } from '../../selectors';

const GreenBox = styled.div`
  background-color: var(--brand-green);
  border-radius: 4px;
  box-shadow: 1px 1px 20px #949494;
  flex: 1;
  padding: 30px 30px 30px;
  margin-bottom: 20px;
  max-width: 600px;
  h2 {
    margin-bottom: 25px;
  }
  form {
    max-width: 100%;
  }
`;

const ContactForm = () => {
  const settings = useSelector(selectSettings);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <GreenBox>
      <Formik
        initialValues={{
          name: '',
          url: '',
          email: '',
          message: '',
          le: settings ? settings.email : '',
          lm: '',
        }}
        initialStatus={{ submitted: false }}
        validationSchema={Yup.object().shape({
          le: Yup.string().email('Must be a valid email').required('Required'),
          lm: Yup.string().required('Required'),
        })}
        onSubmit={(values, actions) => {
          // execute our recaptcha check
          if (recaptchaRef && recaptchaRef.current) {
            recaptchaRef.current.execute();
          }

          // submit our values
          postData('/api/v1/feedback/', {
            email: values.le,
            message: values.lm,
          })
            .then(() => {
              actions.setSubmitting(false);
              actions.setStatus({ submitted: true });
            })
            .catch(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {props => (
          <Form>
            <legend>
              <H2>Send us a Message</H2>
            </legend>
            <Label htmlFor="le">Email</Label>
            <Input
              id="le"
              name="le"
              placeholder="john.smith@gmail.com"
              error={props.touched.email && props.errors.email}
              disabled={props.status.submitted}
            />
            <P>
              <ErrorMessage name="le" />
            </P>
            <Label htmlFor="lm">Message</Label>
            <Textarea
              component="textarea"
              id="lm"
              name="lm"
              placeholder="Tell us what's on your mind."
              error={props.touched.message && props.errors.message}
              disabled={props.status.submitted}
            />
            <P>
              <ErrorMessage name="lm" />
            </P>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lf5SeQUAAAAACWa2toI5bh8zdeKlI82fe_9r6P0"
              size="invisible"
            />
            {props.status.submitted ? (
              <div>
                <Button onClick={props.handleReset}>Reset</Button>
                {props.status.submitted && "Thanks, we'll be in touch soon!"}
              </div>
            ) : (
              <div>
                <Button
                  type="submit"
                  disabled={
                    !props.isValid ||
                    props.isSubmitting ||
                    props.status.submitted
                  }
                >
                  Submit Message
                </Button>
                {props.status.submitted && 'Submitted!'}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </GreenBox>
  );
};

export default ContactForm;
