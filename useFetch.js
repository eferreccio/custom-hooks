import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });
    
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });
    
        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();

    }, [url]); //Cada vez que el url cambie, se va a volver a disparar

    return {// podría ver retornado solo "state", pero se puede hacer así para que sea vea que es lo que se está exponiendo.
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
