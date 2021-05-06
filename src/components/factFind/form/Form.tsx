import React, { FC } from "react";
import FormHeader from "../../shared/formHeader/FormHeader";

export interface Props {}

export const Form: FC<Props> = () => {
  return (
    <>
      <FormHeader title="My Form" />
    </>
  );
};

export default Form;
