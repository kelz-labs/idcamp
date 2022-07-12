import { ToastContainer } from "react-toastify";
import InputJudul from "../../atoms/inputJudul";
import TextAreaKet from "../../atoms/textAreaKet";
import SubmitButton from "../../atoms/submitButton";

const FormInput = ({
  handleSubmit,
  limitChar,
  formData,
  handleChangeJudul,
  handleChange,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:w-1/2 justify-center p-4 items-center mt-4"
    >
      <InputJudul
        handleChangeJudul={handleChangeJudul}
        formData={formData}
        limitChar={limitChar}
      />
      <TextAreaKet handleChange={handleChange} formData={formData} />
      <SubmitButton />
      <ToastContainer />
    </form>
  );
};

export default FormInput;
