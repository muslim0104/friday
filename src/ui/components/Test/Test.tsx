import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";
import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import SuperCheckbox from "../SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../SuperComponents/SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../SuperComponents/SuperSelect/SuperSelect";
import SuperRadio from "../SuperComponents/SuperRadio/SuperRadio";
import SuperRange from "../SuperRange/SuperRange";


const Test = () => {
    const [state,setState]=useState(false)
    function onchangeCallback(e:ChangeEvent<HTMLInputElement>) {
            setState(e.currentTarget.checked)
    }
    return (
        <div>

            <div>
                <SuperCheckbox/>
                <SuperInputText/>
                <SuperButton>Test</SuperButton>
            </div>

            <div>
                <h3>Editable "span"</h3>
                <SuperEditableSpan value={"example"}/>
            </div>

            <div>
                <h3>SELECT</h3>
                <SuperSelect options={[1,2,"3..."]}/>
            </div>
            <div>
                <h3>RADIO</h3>
                <SuperRadio options={[1,2,3]}  />
            </div>
            <div>
                <h3>RANGE</h3>
                <SuperRange />
            </div>







        </div>

    );
};

export default Test;