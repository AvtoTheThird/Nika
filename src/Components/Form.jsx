import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzpejrk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="text-n_grey flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex gap-4 ">
        <div className="flex flex-col">
          <label htmlFor="FirstName">First Name (Required)</label>
          <input
            required="required"
            className="w-[250px] h-[40px] bg-n_input_bg border-[1px] border-n_input-border rounded-md"
            id="FirstName"
            type="text"
            name="FirstName"
          />
          <ValidationError
            prefix="First Name"
            field="FirstName"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="LastName">Last Name (Required)</label>
          <input
            required="required"
            className="w-[250px] h-[40px] bg-n_input_bg border-[1px] border-n_input-border rounded-md"
            id="LastName"
            type="text"
            name="LastName"
          />
          <ValidationError
            prefix="Last Name"
            field="LastName"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="flex flex-col">
        {" "}
        <label htmlFor="email">Email Address (Required)</label>
        <input
          required="required"
          className="w-[500px] h-[40px] bg-n_input_bg border-[1px] border-n_input-border rounded-md"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Subject"> Subject (Required)</label>
        <input
          required="required"
          className="w-[500px] h-[40px] bg-n_input_bg border-[1px] border-n_input-border rounded-md"
          id="Subject"
          type="text"
          name="Subject"
        />
        <ValidationError
          prefix="Subject"
          field="Subject"
          errors={state.errors}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message">Message (Required)</label>
        <textarea
          required="required"
          className="w-[500px] h-[150px] bg-n_input_bg border-[1px] border-n_input-border rounded-md"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        className="bg-n_green text-n_black h-[48px] rounded-md"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
