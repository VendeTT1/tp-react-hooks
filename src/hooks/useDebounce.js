import { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            console.log('setTimeout');
            setDebouncedValue(value);
        }, delay);
        return () => {
            console.log('clearTimeout');
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
export default useDebounce ;
