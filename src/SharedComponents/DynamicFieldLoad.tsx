import { ChoiceGroup } from "@fluentui/react";
import { DropdownForm } from "./DropdownForm";
import TextareaForm from "./TextareaForm";
import TextFieldForm from "./TextFieldForm";

// import { ChoiceGroupForm } from '@fluentui/react';


export const DynamicFieldLoad = (fieldName: string, item: any) => {
    switch (fieldName) {  
        case "DropdownForm":
            return <DropdownForm {...item} />;
        case "TextFieldForm":
            return <TextFieldForm {...item} />;
        case "TextareaForm":
            return <TextareaForm {...item} />;
            case "ChoiceGroupForm":
            return <ChoiceGroup {...item}/>;
        default:
            return 'Component Missing';
    }
};
export default DynamicFieldLoad;
