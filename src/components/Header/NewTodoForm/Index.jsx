import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/TodoContext";

function NewTodoForm() {
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={async (values, bag) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(values);

        addTodo(values.text);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          id="text"
          name="text"
          property="newTodo"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
