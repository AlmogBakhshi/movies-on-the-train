import React, { InputHTMLAttributes } from 'react';
import Button from './button';

type inputType = 'text' | 'number';

export interface Input {
    label: string,
    type: inputType,
    name: string,
    placeholder?: string,
    required?: boolean,
    min?: number,
    max?: number,
    value?: any
}

interface Props {
    inputData: Input[],
    buttonTitle: string,
    formID: string,
    onSubmit: (event: React.FormEvent<HTMLFormElement>, data: object) => void,
    className?: string,
    onChange?: (value: string, name: string) => void
}

const Form: React.FC<Props> = ({ inputData, buttonTitle, formID, onSubmit, className, onChange }) => {
    const HandleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formElements = form.elements as typeof form.elements;

        let formData: any = {};
        inputData.map(data => {
            const inputByName = formElements.namedItem(data.name) as InputHTMLAttributes<HTMLInputElement>;
            formData[data.name] = inputByName.value;
            return data;
        });

        onSubmit(event, formData);
    }

    return (
        <div className={`form ${className}`} >
            <div className='form__container'>
                <div className='form__container__label'>
                    {inputData.map(({ label }, index) =>
                        <div key={`${label}_${index}`} >
                            <label htmlFor={`${label}_${index}`}>
                                {label}
                            </label>
                        </div>)}
                </div>
                <form id={formID} onSubmit={HandleOnSubmit}>
                    {inputData.map((data, index) =>
                        <input key={`${data.label}_${index}`} id={`${data.label}_${index}`} name={data.name} type={data.type} value={data.value}
                            placeholder={data.placeholder} required={data.required} min={data.min} max={data.max}
                            onChange={e => onChange && onChange(e.target.value, data.name)} />
                    )}
                </form>
            </div>
            <Button formID={formID} title={buttonTitle} className='form__button' />
        </div>
    );
}

export default Form;