import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { usePosts } from "../context/postContext"
import { useNavigate } from "react-router-dom"


export function PostForm() {
    const { createPost } = usePosts();
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required("el titulo es requerido"),
                    description: Yup.string().required("la descripcion es requerida")
                })}
                onSubmit={async (values, actions) => {
                    await createPost(values);
                    navigate("/");
                }}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" name="title" placeholder="title" />
                        <ErrorMessage component="p" className="text-red-600 text-sm" name="title" />
                        <Field className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full my-2" name="description" placeholder="description" />
                        <ErrorMessage component="p" className="text-red-600 text-sm" name="description" />
                        <button className="bg-slate-400 hover:bg-slate-500 px-3 py-1 text-white rounded-sm" type="submit" >Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
