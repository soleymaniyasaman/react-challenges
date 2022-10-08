import { useEffect, useRef } from "react"

export default function FocusInput() {
    const focusInput = useRef(null)

    useEffect(() => {
        focusInput.current.focus()
    }, []);

    return (
        <div>
            <label htmlFor='focused-input'>Focus me on page load!</label>
            <input name='focused-input' ref={focusInput}></input>
        </div>
    )
}