import { FormEvent, useState } from "react";
import { dataToObject } from "../utils/dataToObject";
import axios from "axios";

export type Error = {
    catched: boolean;
    code?: string;
} | null;

export function useFetch(url: string) {
    const [data, setData] = useState("");
    const [error, setError] = useState<Error>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const resetData = () => setData("");

    const resetError = () => setError(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) {
            return;
        }
        const values = new FormData(e.target);
        let data = {} as { [key: string]: FormDataEntryValue };
        values.forEach((v, k) => {
            data[k] = v;
        });

        await axios
            .post(url, dataToObject(data))
            .then((res) => {
                if (res.data == "") {
                    setError({
                        catched: false,
                    });
                } else {
                    setData(res.data);
                    setError(null);
                }
            })
            .catch((e) => {
                setError({
                    catched: true,
                    code: `E17-${e.response.data?.trace[0]?.line || "0"}`,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        data: data,
        loading: loading,
        handleSubmit: handleSubmit,
        resetData: resetData,
        resetError: resetError,
        error: error,
    };
}
