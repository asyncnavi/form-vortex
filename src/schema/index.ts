export type TextValidation = {
    validation_key : '<' | '>'
    custom_error : string    
}

export type PhoneValidation = {
    custom_error : string
}

export type NumberValidation = {
    validation_key : '==' | '<=' | '>=' | '!=' | '+'
    custom_error  : string
}

export type TextFieldOption = 'text'  | 'number' | 'phone' | 'email'

export type TextField = {
    id : string
    type : TextFieldOption
    required? : boolean
    label : string
    defaultValue? : string
    description?  :string
    validate : boolean
    validation? : TextValidation | PhoneValidation | NumberValidation | null
}


export type Form = {
    id : string
    title : string
    description : string
    created_at : string
    updated_at  : string
    fields : [],
    cover_URL: string
    theme : string
    ui_lib : 'default' | 'mui' | 'mantine'
    background : string
}