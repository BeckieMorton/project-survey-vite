import React from 'react'

export const Classroom = ({ updateFormData, value }) => {
    const classroom = (event) =>
        updateFormData("Classroom", event.target.value);

    return (
        <div>
            <label>What class are you in?</label>
            <select value={value} onChange={classroom}>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
            </select>
        </div>
    );
};
