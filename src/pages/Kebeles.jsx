import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import TableTitle from "../components/TableTitle";
import { useEffect } from "react";
import { isEmpty } from "../utils/isEmpty";
import { Loading } from "../components/Loading";
import Error from "../components/Error";
import { addKebele, getKebelesList } from "../redux/actions/kebeleActions";
import Empty from "../components/Empty";
import { Formik } from "formik";
import * as Yup from "yup";

const columns = ["#", "Name", "Created By", "Created At"];
const Kebeles = () => {
  const { loading, error, kebelesList } = useSelector((state) => state.kebele);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKebelesList());
  }, []);

  const submitForm = (data) => {
    dispatch(addKebele(data));
  };

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;

  return (
    <div>
      <div className='flex flex-wrap content-between justify-between place-content-between'>
        <div>
          <TableTitle title='Kebeles' showButton={false} />
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
                  className='block mt-2 text-xs font-semibold text-gray-100 uppercase pb-2'
                  htmlFor='username'>
                  Kebele Name
                </label>
                <div className='flex  flex-wrap  content-center items-center'>
                  <div className='w-60 h-12  p-1'>
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      placeholder='Kebele 01'
                      id='name'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div className='h-12  p-1'>
                    <button
                      type='submit'
                      disabled={loading}
                      className='text-sm h-10 p-2 font-normal tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
                      {loading ? "Loading" : "Add Kebele"}
                    </button>
                  </div>
                </div>
                <div className='text-red-500'>
                  {errors.name && touched.name && errors.name}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      {isEmpty(kebelesList) ? (
        <Empty message='Empty kebeles list' />
      ) : (
        <Table
          columns={columns}
          data={kebelesList.map((kebele, index) => (
            <tr key={index}>
              <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
                {index + 1}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {kebele.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {kebele.createdBy.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {kebele.createdAt}
              </td>
            </tr>
          ))}
        />
      )}
    </div>
  );
};

export default Kebeles;
