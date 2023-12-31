import CustomeTextField from "./Form/CustomeTextField";
import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../redux/actions/transactionActions";
import CustomeSelect from "./Form/CustomeSelect";
import * as Yup from "yup";
import { useEffect } from "react";
import { getCropsListForDropdown } from "../redux/actions/cropActions";
import { Loading } from "./Loading";
import { getFarmersListForDropdown } from "../redux/actions/farmerActions";

const initialValues = {
  name: "",
  crop: "",
  quantity: "",
};

const AddTransactionSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  crop: Yup.string().required("Required"),
  quantity: Yup.number().required("Required"),
});

const AddTransactionForm = () => {
  const { loading, error } = useSelector((state) => state.transaction);
  const { cropsListForDropdown, loadingCropOptions = loading } = useSelector(
    (state) => state.crop
  );
  const { farmersListForDropdown, loadingFarmersOptions = loading } =
    useSelector((state) => state.farmer);
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(addTransaction(data));
  };

  useEffect(() => {
    dispatch(getCropsListForDropdown());
    dispatch(getFarmersListForDropdown());
  }, []);
  if (loadingCropOptions || loadingFarmersOptions) return <Loading />;

  return (
    <div className='flex flex-col items-center mx-auto justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={AddTransactionSchema}
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

              <Field
                name='name'
                id='name'
                placeholder='Select Farmer Name'
                title='Farmer Name'
                width='80'
                isMulti={false}
                component={CustomeSelect}
                options={farmersListForDropdown}
                error={errors.name && touched.name && errors.name}
              />

              <Field
                name='crop'
                id='crop'
                placeholder='Select Crop'
                title='Crop'
                width='80'
                isMulti={false}
                component={CustomeSelect}
                options={cropsListForDropdown}
                error={errors.crop && touched.crop && errors.crop}
              />

              <CustomeTextField
                title='Quantity'
                type='number'
                placeholder='40'
                id='quantity'
                width='80'
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.quantity}
                error={errors.quantity && touched.quantity && errors.quantity}
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
              {loading ? "Loading" : "Add Transaction"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransactionForm;
