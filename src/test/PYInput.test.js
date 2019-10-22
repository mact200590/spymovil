import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";
import { PYInput } from '../components/PYInput';

afterEach(cleanup)
it("Button with all mandatory props  or other props ", () => {
   const div=document.createElement('div')
    ReactDOM.render(<PYInput
            typeVariant="primary"         
        />,
            div);
       
});
