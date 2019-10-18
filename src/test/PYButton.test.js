import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import { PYButton } from "../components/PYButton";

afterEach(cleanup)
it("Button with all mandatory props  or other props ", () => {
   const div=document.createElement('div')
    ReactDOM.render(<PYButton
            label="Buscarte"
            typeVariant="primary"
            fullWidth={false}
        />,
            div);
       
});

it("It renders correctly",()=>{
    const {getByTestId}=render(<div data-testid='button'><PYButton 
           label="Buscar"
           typeVariant="primary"
           fullWidth={false}    
    /></div>);
    expect(getByTestId('button')).toHaveTextContent("Buscar");

});


it("Matches Snapshot",()=>{
    const tree=renderer.create(<div data-testid='button'><PYButton 
    label="Buscar"
    typeVariant="primary"
    fullWidth={false}

/></div>).toJSON(); 
expect(tree).toMatchSnapshot();
})