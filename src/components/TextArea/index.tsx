/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>

      <textarea id={name} {...rest} />
    </div>
  );
};

export default TextArea;
