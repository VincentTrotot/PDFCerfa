import React, { HTMLAttributes } from "react";

type ButtonProps = {
    disabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export function Button({ disabled = false, ...props }: ButtonProps) {
    return (
        <div className="d-grid gap-2">
            <input
                type="submit"
                value={props.children?.toString()}
                className="btn btn-primary"
                disabled={disabled}
            />
        </div>
    );
}
