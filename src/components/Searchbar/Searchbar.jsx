import { Formik, Form, Field } from 'formik';
import css from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs'

export const Searchbar = () => {
    const submitSerchbar = (values, actions) => {
        console.log('values: ', values);
        console.log('actions', actions);
        actions.resetForm()
    }
    return (
 <header className={css.Searchbar}>
    <Formik initialValues={{ name: '' }} onSubmit={submitSerchbar}>
  <Form className={css.SearchForm}>
    <button type="submit" className={css.SearchForm_button}>
    <BsSearch className={ css.SearchForm_button_label } /> 
    </button>
     <Field
      name='name'
      className={css.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
     placeholder="Search images and photos"
     
    />
  </Form>
</Formik>
</header>
    )
}