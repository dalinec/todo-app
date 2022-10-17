import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().min(4).max(40).required('Enter a Title'),
  description: yup.string().min(4).max(60).required('Enter a description'),
});
