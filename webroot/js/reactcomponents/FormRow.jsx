//Component that will be called for every row created in form (Homepage.jsx)

import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react'
const FormRow = ({ register, item, index, remove, Api, setValue }) => {

    return (
        < >


            <select
                name={`elements[${index}].unitCost`}
                defaultValue={`${item.unitCost}`} // make sure to set up defaultValue
                ref={register()}
                onChange={(e) => {setValue(`elements[${index}].unitCost`, e.target.value);}}

            >
                {Api?.map((x,y) => <option key={y} value={x.CO2_per_Unit}>{x.name}</option>)}

            </select>
            <input
                name={`elements[${index}].value`}
                defaultValue={`${item.value}`}
                type="number" // make sure to set up defaultValue
                ref={register()}
            />

            <Button 
                negative
                type="button"
                onClick={() => {remove(index);}}
            >
                Delete expense
            </Button>
        </>
    )
}

export default FormRow