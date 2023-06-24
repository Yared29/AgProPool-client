import CustomeTextField from "./Form/CustomeTextField";
import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerMediator } from "../redux/actions/mediatorActions";
import CustomeSelect from "./Form/CustomeSelect";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: "",
  phone: "",
  gender: "",
  kebele: "",
};

const RegisterFamrmerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  gender: Yup.string().required("Required"),
  kebele: Yup.string().required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(11, "Too Long!")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const AddMediatorForm = () => {
  const { loading, error } = useSelector((state) => state.mediator);
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(registerMediator(data));
  };

  return (
    <div className='flex flex-col items-center mx-auto justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterFamrmerSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='flex  flex-col  justify-center'>
              {error && <div className='text-red-500'>{error}</div>}

              <CustomeTextField
                title='Mediator Name'
                type='text'
                placeholder='Abebe Kebede'
                id='name'
                width='80'
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
                error={errors.name && touched.name && errors.name}
              />

              <Field
                name='gender'
                id='gender'
                placeholder='Select Gender'
                title='Gender'
                width='80'
                isMulti={false}
                component={CustomeSelect}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                error={errors.gender && touched.gender && errors.gender}
              />

              <CustomeTextField
                title='Phone Number'
                type='phone'
                placeholder='0922998877'
                id='phone'
                width='80'
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.phone}
                error={errors.phone && touched.phone && errors.phone}
              />
              <Field
                name='kebele'
                id='kebele'
                placeholder='Select Kebele'
                title='Kebele'
                width='80'
                isMulti={false}
                component={CustomeSelect}
                options={[
                  { value: "one", label: "One" },
                  { value: "two", label: "Two" },
                  { value: "three", label: "Three" },
                ]}
                error={errors.kebele && touched.kebele && errors.kebele}
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
              {loading ? "Loading" : "Register Mediator"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddMediatorForm;
