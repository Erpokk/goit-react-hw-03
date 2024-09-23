import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(1, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "number number must be in the format 123-45-67").required("Required"),
    });
    
    const handleSubmit = (formData, { resetForm }) => {
        onAdd({
            id: nanoid(),  
            name: formData.name,  
            number: formData.number 
        });
        resetForm();  
    };
    
    
    return (
        <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <Field type="phone" name="number" id="number" />
                    <ErrorMessage name="number" component="span" />
                </div>
                <button type="submit">Add task</button>
            </Form>
        </Formik>
  );
};
   
export default ContactForm;