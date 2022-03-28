import React, { useRef } from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.SyntheticEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <form className='input' onSubmit={(event) => {
            handleAdd(event);
            inputRef.current?.blur();
        }}>
            <input type='input'
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task'
                className='input__box'></input>
            <button className='input_submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField 