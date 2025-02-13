

export type TNullableNumber = null | number;
export type TNullableString = null | number;

export type TTextInput = "text" | "number" | "password";
export type TButtonAction = () => void | Promise<void> | boolean | Promise<boolean>;

interface ITabIndex {
    tabindex?: number;
}

export interface ITextInput extends ITabIndex {
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
    readOnly?: boolean; 
    disableDefaultValueSetter?: boolean;
}


export interface ITextAreaProps extends ITabIndex {
    label?: string;
    elementId?: string;
    containerClass?: string;
    inputContainerClass?: string;
    labelContainerClass?: string;
    inputClass?: string;
    labelClass?: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    cols?: number;
    disabled?: boolean;
    showCharacterCount?: boolean;
    max?: number;
    ellipseCount?: number;
    readOnly?:boolean;
    resize?:string;
}



export interface IRadioProps extends ITabIndex {
    label?: string;
    value: string;
    elementId?: string;
    containerClass?: string;
    inputClass?: string;
    labelClass?: string;
    name: string;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    allowDeselect?: boolean;
}

// export const getArrayLength = (data: any[] | null) => (data ? data.length : 0);


export const options = [
    {
        lable: "male",
        value: "male"
    },
    {
        lable: "female",
        value: "female"
    }
];




export interface ICheckboxProps extends ITabIndex {
    label?: string;
    value?: string;
    elementId?: string;
    containerClass?: string;
    inputClass?: string;
    labelClass?: string;
    name: string;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    setCheckedToModel?: boolean;
}