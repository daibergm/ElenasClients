import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

// @Assets
import styles from './styles';

// @Types
import { Client } from '../../types/';

// @Components
import { Button, Input } from '../common';

// @Constants
import { TEST_IDS, ERRORS } from '../../constants/';

const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required('Este campo es obligatorio.'),
  lastName: yup.string().trim().required('Este campo es obligatorio.'),
  cellphone: yup.string().trim().required('Este campo es obligatorio.'),
  address: yup.string().trim().required('Este campo es obligatorio.'),
});

interface Props {
  submitFunction: (values: Client) => void;
  loading: boolean;
  mutationLoading: boolean;
  apiError?: string;
  id?: number;
  client: Client;
}

function ClientComponent({
  submitFunction,
  loading,
  mutationLoading,
  id,
  client,
  apiError,
}: Props) {
  const onSubmit = (values: Client) => submitFunction(values);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={client}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize>
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
                testID={TEST_IDS.firstNameInput}
                value={values.firstName}
                placeholder="Nombre"
                errorMessage={
                  touched.firstName ? (errors.firstName as string) : undefined
                }
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
              />
              <Input
                testID={TEST_IDS.lastNameInput}
                value={values.lastName}
                placeholder="Apellido"
                errorMessage={
                  touched.lastName ? (errors.lastName as string) : undefined
                }
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
              />
              <Input
                testID={TEST_IDS.cedulaInput}
                value={values.cedula}
                placeholder="Cédula"
                errorMessage={
                  touched.cedula ? (errors.cedula as string) : undefined
                }
                onChangeText={handleChange('cedula')}
                onBlur={() => setFieldTouched('cedula')}
              />
              <Input
                testID={TEST_IDS.emailInput}
                value={values.email}
                placeholder="Correo electrónico"
                errorMessage={
                  touched.email ? (errors.email as string) : undefined
                }
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
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
                testID={TEST_IDS.addressInput}
                value={values.address}
                placeholder="Dirección"
                errorMessage={
                  touched.address ? (errors.address as string) : undefined
                }
                onChangeText={handleChange('address')}
                onBlur={() => setFieldTouched('address')}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title={id ? 'EDITAR' : 'CREAR'}
                  testID={TEST_IDS.submitButton}
                  disabled={(!isValid || !dirty) && !id}
                  onPress={handleSubmit}
                  loading={loading || mutationLoading}
                />
              </View>
              {!isEmpty(apiError) && (
                <View>
                  <Text style={styles.errorLabel}>
                    {ERRORS[apiError as string]}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

export default ClientComponent;
