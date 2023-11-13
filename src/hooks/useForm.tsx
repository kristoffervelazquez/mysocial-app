import { useState } from "react";

const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = <K extends Object>(value: K, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return { ...state, formData: state, onChange };
};

export default useForm;
