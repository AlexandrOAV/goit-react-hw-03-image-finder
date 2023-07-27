import { Formik, Form, Field } from 'formik';
import css from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs'
import { Component } from 'react';
 import { toast } from 'react-toastify';


export class Searchbar extends Component {
  state = {
   values:'',
  }
  
  submitSerchbar = (values, actions) => {
    this.setState({ values: values });
    if (values.serchText.trim() === '') {
      return toast.error('Please enter a query to search',
                          {position: "top-center",
                           autoClose: 2000,
                          })
    } 
    this.props.onSubmit(values);
    actions.resetForm()
  }

  render() {
    
    return (
      <header className={css.Searchbar}>
        <Formik
          initialValues={{ serchText: '' }}
          onSubmit={this.submitSerchbar}
        >
          <Form className={css.SearchForm}>
            <button type="submit" className={css.SearchForm_button}>
              <BsSearch className={css.SearchForm_button_label} />
            </button>
            <Field
              name='serchText'
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              pattern="[A-Za-z0-9 ]*"
              placeholder="Search images and photos"
            />
            
          </Form>
        </Formik>
      </header>
    )
  }
}