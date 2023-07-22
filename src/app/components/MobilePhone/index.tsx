import React from 'react';
import PhoneInput from 'react-phone-input-2'
import './style.css'
import {DivTitleInputSC} from "@/app/components/section10/styles.form";

const Input = (props: any) => {
    const {title, ico} = props;

    return (
        <div style={{display: "grid", gridTemplateRows: "max-content max-content", gap: "8px"}}>
            <DivTitleInputSC>{title}{ico}</DivTitleInputSC>
            <PhoneInput
                specialLabel={''}
                country={'us'}
                inputStyle={{
                    borderColor: (props.touched && props.error) && "red"
                }}
                placeholder={"+123456789"}
                type={"tel"}
                name="phone"
                required
                {...props}
            />
            {(props.touched && props.error) && <p style={{color: 'red'}}
                                                  className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p>}
        </div>


    );
};

const index = (props: any) => {
    const {title, ico} = props;
    return (
        <Input
            label={"Mobile Phone"}
            title={title}
            ico={ico}
            req={true}
            helperText={""}
            error={true}
            isSelect={false}
            {...props.input}
            {...props.meta}
            {...props.custom}
        />
    )
}

export default index