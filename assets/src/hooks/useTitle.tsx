import { useEffect } from "react";

type UseTitleArgs = {
    title: string;
    deps: any[];
};

export function useTitle({ title, deps }: UseTitleArgs) {
    useEffect(() => {
        document.title = title;
    }, deps);
}
