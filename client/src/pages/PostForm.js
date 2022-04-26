import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";

export function PostForm() {
  const { createPost, getPost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
      }
    })();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">    
            <h3 className="text-xl">New Post</h3>
            <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">Go back</Link>
        </header>
      <Formik
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("el titulo es requerido"),
          description: Yup.string().required("la descripcion es requerida"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label
              htmlFor="title"
              className="text-sm block font-bold text-gray-300"
            >
              Title
            </label>
            <Field
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full my-2"
              name="title"
              placeholder="title"
            />
            <ErrorMessage
              component="p"
              className="text-red-600 text-sm"
              name="title"
            />
            <label
              htmlFor="title"
              className="text-sm block font-bold text-gray-300"
            >
              Description
            </label>
            <Field
              component="textarea"
              rows="3"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full my-2"
              name="description"
              placeholder="description"
            />
            <ErrorMessage
              component="p"
              className="text-red-600 text-sm"
              name="description"
            />
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-1 text-white rounded-sm"
              type="submit"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
}
