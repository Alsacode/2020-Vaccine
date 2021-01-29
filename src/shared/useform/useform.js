import { useState } from 'react';


const useForm = (callback, initialState={}, resetOnSubmit=true) => {


    // Presenting new useState-hook, for using form.
    // Saving info
    const [values, setValues] = useState(initialState);

        // Submit-handling, the estää 
        // and it will callback
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
        if (resetOnSubmit) resetValues();
    }
    
    // Every info will get to the fill it will be saved by the value what is defiend.
    const handleChange = (event) => {
        event.persist();
        // for saving the fill value this is temparery
        let value = event.target.value;
        // Saving new value state
        setValues(values => ({...values, [event.target.name]: value}));

    }
        // Function, what help the lomakkee info for reseting
        const resetValues = () {
            setValues(initialState);
        }

        // returning in order all in same way is defiend
        // state-varible
        return {
            handleSubmit,
            handleChange,
            resetValues,
            setValues,
            values
        };

}


export default useForm;
