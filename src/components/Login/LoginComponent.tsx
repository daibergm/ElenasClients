import React from 'react';
import { View, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Text } from 'react-native-elements';

// @Assets
import styles from './styles';

// @Types
import { Login } from '../../types/';

// @Components
import { Button, Input } from '../common';

// @Constants
import { TEST_IDS, ERRORS } from '../../constants/';

// @Vars
const initialValues = {
  cellphone: '',
  password: '',
};

const validationSchema = yup.object().shape({
  cellphone: yup.string().trim().required('Este campo es obligatorio.'),
  password: yup.string().trim().required('Este campo es obligatorio.'),
});

interface Props {
  submitFunction: (values: Login) => void;
  loading: boolean;
  apiError?: string;
}

function LoginComponent({ submitFunction, loading, apiError }: Props) {
  const onSubmit = (values: Login) => submitFunction(values);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          isValid,
          handleSubmit,
          touched,
          dirty,
        }) => (
          <ScrollView
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
            keyboardShouldPersistTaps="handled">
            <View style={styles.subContainer}>
              <Input
                testID={TEST_IDS.cellphoneInput}
                value={values.cellphone}
                placeholder="Celular"
                errorMessage={
                  touched.cellphone ? (errors.cellphone as string) : undefined
                }
                onChangeText={handleChange('cellphone')}
                onBlur={() => setFieldTouched('cellphone')}
              />
              <Input
                testID={TEST_IDS.passwordInput}
                value={values.password}
                placeholder="Contraseña"
                errorMessage={
                  touched.password ? (errors.password as string) : undefined
                }
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title="INICIAR SESIÓN"
                  testID={TEST_IDS.submitButton}
                  disabled={!isValid || !dirty}
                  onPress={handleSubmit}
                  loading={loading}
                />
              </View>
              {apiError && (
                <View testID={TEST_IDS.errorLabel}>
                  <Text style={styles.errorLabel}>{ERRORS[apiError]}</Text>
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

export default LoginComponent;
