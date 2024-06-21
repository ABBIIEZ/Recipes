
import { useForm } from "react-hook-form";

const useSearch = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = () => {
        reset();
    };

    return ({
        register, handleSubmit, onSubmit
    }
    )
}

export { useSearch }



