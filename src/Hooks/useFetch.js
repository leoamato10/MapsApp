import { useEffect, useReducer, useRef } from 'react'


function useFetch(url, options) {

    // Used to prevent state update if the component is unmounted
    const cancelRequest = useRef(false)

    const initialState = {
        error: undefined,
        data: undefined,
        loading: undefined,
    }

    // Keep state logic separated
    const fetchReducer = (state, action) => {
        switch (action.type) {
            case 'loading':
                return { ...initialState, loading: true }
            case 'fetched':
                return { ...initialState, data: action.payload, loading: false }
            case 'error':
                return { ...initialState, error: action.payload, loading: false }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        // Do nothing if the url is not given
        if (!url) return

        cancelRequest.current = false

        const fetchData = async () => {
            dispatch({ type: 'loading' })

            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error("Can´t load data from server.")
                }

                const data = await response.json()
                if (cancelRequest.current) return

                dispatch({ type: 'fetched', payload: data })
            } catch (error) {
                if (cancelRequest.current) return

                dispatch({ type: 'error', payload: "Can´t load data from server." })
            }
        }

        fetchData()

        // Use the cleanup function for avoiding a possibly...
        // ...state update after the component was unmounted
        return () => {
            cancelRequest.current = true
        }
    }, [url])

    return state
}

export default useFetch