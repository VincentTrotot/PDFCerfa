import React, { HTMLAttributes } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
    disabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export function Button({ disabled = false, ...props }: ButtonProps) {
    return (
        <div className={styles.container}>
            <input
                type="submit"
                value={props.children?.toString()}
                className={styles.input}
                disabled={disabled}
            />
        </div>
    );
}
