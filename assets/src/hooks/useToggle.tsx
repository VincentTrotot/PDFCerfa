import { useState } from "react";

export function useToggle(initialState = false) {
    const [state, setState] = useState<boolean>(initialState);

    const toggleState = () => {
        setState(!state);
    };

    return {
        state: state,
        toggleState: toggleState,
    };
}
