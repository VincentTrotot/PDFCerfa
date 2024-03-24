import { useState } from "react";

export function useToggle(initialState = false) {
    const [state, setState] = useState<boolean>(initialState);

    const toggleState = () => {
        setState(!state);
    };

    const defineState = (b: boolean) => {
        setState(b);
    };

    return {
        state: state,
        toggleState: toggleState,
        defineState: defineState,
    };
}
