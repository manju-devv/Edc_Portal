

export type TNullableNumber = null | number;
export type TNullableString = null | number;

export type TTextInput = "text" | "number" | "password";
export type TButtonAction = () => void | Promise<void> | boolean | Promise<boolean>;


export interface ITextInput {
    label?: string;
    elementId?: string;
    containerClass?: string;
    inputContainerClass?: string;
    inputClass?: string;
    labelClass?: string;
    labelContainerClass?: string;
    type: TTextInput;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    minLength?: number;
    maxLength?: number;
}
