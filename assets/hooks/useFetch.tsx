import { FormEvent, useState } from "react";
import { dataToObject } from "../utils/dataToObject";
import axios from "axios";

export function useFetch(url: string) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const eraseData = () => setData("");

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
        try {
            await axios
                .post(url, dataToObject(data))
                .then((res) => {
                    setData(res.data);
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (e) {
            console.error(e.message);
        }
    };

    return {
        data: data,
        loading: loading,
        handleSubmit: handleSubmit,
        eraseData: eraseData,
    };
}
