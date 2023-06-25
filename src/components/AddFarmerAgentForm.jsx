import CustomeTextField from "./Form/CustomeTextField";
import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerFarmerAgent } from "../redux/actions/farmerAgentActions";
import CustomeSelect from "./Form/CustomeSelect";
import * as Yup from "yup";
import { useEffect } from "react";
import { getKebelesListForDropdown } from "../redux/actions/kebeleActions";
import { Loading } from "./Loading";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: "",
  phone: "",
  gender: "",
  kebele: "",
  password: "",
};

const RegisterFarmerAgentSchema = Yup.object().shape({
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
  password: Yup.string().min(5, "Too Short!").required("Required"),
});

const AddFarmerAgentForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.farmerAgent);
  const { kebelesListForDropdown, loadingKebeleOptions = loading } =
    useSelector((state) => state.kebele);

  useEffect(() => {
    dispatch(getKebelesListForDropdown());
  }, []);

  const submitForm = (data) => {
    dispatch(registerFarmerAgent(data));
  };

  if (loadingKebeleOptions) return <Loading />;

  return (
    <div className='flex flex-col items-center mx-auto justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterFarmerAgentSchema}
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
          <form onSubmit={handleSubmit}>
            <div className='flex  flex-col  justify-center'>
              {error && <div className='text-red-500'>{error}</div>}

              <CustomeTextField
                title='FarmerAgent Name'
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
                options={kebelesListForDropdown}
                error={errors.kebele && touched.kebele && errors.kebele}
              />
              <CustomeTextField
                title='Password'
                type='password'
                placeholder='*********'
                id='password'
                width='80'
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password && errors.password}
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='m-1 text-md w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
              {loading ? "Loading" : "Register Farmer Agent"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddFarmerAgentForm;
