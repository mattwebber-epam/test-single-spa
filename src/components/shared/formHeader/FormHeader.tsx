import React, { FC } from "react";
import "./formHeader.scss";

interface Props {
  title: string;
}

const FormHeader: FC<Props> = ({ title }) => (
  <div className="factfind-form-header">
    <h1>{title}</h1>
  </div>
);

export default FormHeader;
