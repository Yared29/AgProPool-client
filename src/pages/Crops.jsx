import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import TableTitle from "../components/TableTitle";
import { useEffect } from "react";
import { isEmpty } from "../utils/isEmpty";
import { Loading } from "../components/Loading";
import { addCrop, getCropsList } from "../redux/actions/cropActions";
import Empty from "../components/Empty";
import { Formik } from "formik";
import * as Yup from "yup";

const columns = ["#", "Name", "Created By", "Created At"];
const Crops = () => {
  const { loading, error, cropsList } = useSelector((state) => state.crop);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCropsList());
  }, []);

  const submitForm = (data) => {
    dispatch(addCrop(data));
  };

  if (loading) return <Loading />;

  return (
    <div>
      <div className='flex flex-wrap content-between justify-between place-content-between'>
        <div>
          <TableTitle title='Crops' showButton={false} />
        </div>
        <div>
          <Formik
            initialValues={{ name: "" }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            })}
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
              <form className='flex flex-col' onSubmit={handleSubmit}>
                {error && <div className='text-red-500'>{error}</div>}
                <label
                  className='p-1 block mt-2 text-xs font-semibold text-gray-100 uppercase pb-2'
                  htmlFor='username'>
                  Crop Name
                </label>
                <div className='flex  flex-wrap  content-center items-center'>
                  <div className='lg:w-60 md:w-60 w-40  h-12  p-1'>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      placeholder='Teff'
                      id='name'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div className='h-12 p-1'>
                    <button
                      type='submit'
                      disabled={loading}
                      className='rounded text-sm h-9 p-2 font-normal tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
                      {loading ? "Loading" : "Add"}
                    </button>
                  </div>
                </div>
                <div className='text-red-500 p-1'>
                  {errors.name && touched.name && errors.name}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      {isEmpty(cropsList) ? (
        <Empty message='Empty crops list' />
      ) : (
        <Table
          columns={columns}
          data={cropsList.map((crop, index) => (
            <tr key={index}>
              <td className='px-6 py-4 text-sm font-medium dark:text-gray-200 text-gray-800 whitespace-nowrap'>
                {index + 1}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {crop.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {crop.createdBy.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {crop.createdAt}
              </td>
            </tr>
          ))}
        />
      )}
    </div>
  );
};

export default Crops;
