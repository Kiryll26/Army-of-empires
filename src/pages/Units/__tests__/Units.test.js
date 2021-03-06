import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Units } from "..";
import { List } from "../../../components";

configure({ adapter: new Adapter() });

describe('PAGES UNITS', () => {

    const props = {
        units: [{ name: 'text...'}],
        location: { pathname: '/path' },
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Units {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Component is return 1 content', () => {
        expect(wrapper.find(List)).toHaveLength(1);
    });
});

// npm run test src/pages/Units