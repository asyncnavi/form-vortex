import { TextField } from "../schema";

const addTextField = (args : TextField) : TextField => {
    return {
        id : args.id,
        type : args.type ?? 'text',
        required : args.required ?? false,
        label : args.label,
        defaultValue : args.defaultValue ?? '',
        description : args.description ?? '',
        validate : true,
        validation : args.validation ?? null
    }
}

export default addTextField