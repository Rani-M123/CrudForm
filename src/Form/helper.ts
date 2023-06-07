import { IChoiceGroupOption } from "@fluentui/react";
import { getNameOfDeclaration } from "typescript";

export const DEPARTMENT: IChoiceGroupOption[] = [
    { key: "IT", text: "IT" },
    { key: "Health", text: "Health" },
];

export const Gender : IChoiceGroupOption[] = [
    { key: "Male", text: "Male" },
    { key: "Female", text: "Female" },
];


export const NewEMPLOYEE_FORM_ELEMENTS = [
    {
        type: "TextFieldForm",
        name: "name",
        label: "name",
        isRequired: true,
    },
    {
        type: "TextFieldForm",
        name: "Designaton",
        label: "Designation",
        isRequired: false,
    },
    {
        type: "TextFieldForm",
        name: "phonenumber",
        label: "phone number",
        isRequired: false,
    },

    {
        type: "TextFieldForm",
        name: "email",
        label: "email",
        isRequired: false,
    },
    {
        type: "TextFieldForm",
        name: "jobtitle",
        label: "job title",
        isRequired: false,
    },
    {
        type: "DropdownForm",
        name: "department",
        label: "department",
        isRequired: false,
        options: DEPARTMENT,
        placeholder: "Select",
    }
];

export const EMPLOYEE_FORM_ELEMENTS = [
    {
        row: 0,
        className: "rowTwo",
        controls: [

            {
                type: "TextFieldForm",
                name: "name",
                label: "name",
                isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "dateofbirth", 
                label: "date of birth",
                isRequired: false,
            },
            {
                type: "TextFieldForm",
                name: "phonenumber",
                label: "phone number",
                isRequired: false,
            },
            {
                type: "TextFieldForm",
                name: "companyname",
                label: "companyname",
                isRequired: false,
            }

        ],
    },
    {
        row: 0,
        className: "rowThree",
        controls: [
            {
                type: "TextFieldForm",
                name: "email",
                label: "email",
                isRequired: false,
            },
            {
                type: "TextFieldForm",
                name: "jobtitle",
                label: "job title",
                isRequired: false,
            },
            {
                type: "DropdownForm",
                name: "department",
                label: "department",
                isRequired: false,
                options: DEPARTMENT,
                placeholder: "Select",
            },
            {
                type: "ChoiceGroup",
                name: "Gender",
                button: "Gender",
                isReqired: false,
                options: 'Gender',
                placeholder: "Select",

            }
        ],
    }
];