import React from 'react';


const Form = props => (
    <form onSubmit={props.getCountry}>
        <input type='text' name='nameCounrty'/>
        <button>Search</button>

    </form>
)
export default Form;