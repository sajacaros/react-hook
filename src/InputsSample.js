import React, {useState} from 'react';

function InputsSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);

        setInputs({
            ...inputs,
            [name]: value,
        });
    };


    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    }
    
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputsSample;