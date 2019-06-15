import React from 'react';
import {mount, shallow} from "enzyme";
import Button from "./button";
import toJson from 'enzyme-to-json';

describe('<Button />', () => {

        let props;
        let wrapper;
        let mountedProps;
        let mountWrapper;

        beforeAll(() => {
            mountedProps = {
                className: 'btnOrdAcc',
                handleAction: jest.fn(),
                label: 'Order Accessory',
                id: 'btnOrdAccessory',
                isPrimary: true
            };
            props = mountedProps;

            wrapper = shallow(<Button {...props}/>);
            mountWrapper = mount(<Button {...props}/>);
        });

        it('should render button component properly', () => {
            expect(toJson(wrapper)).toMatchSnapshot();

        });

        it('should render button with primary and other class name', () => {
            expect(wrapper.find('button.btnOrdAcc.primary')).toHaveLength(1);
        });

        it('should render button with secondary and other class name', () => {
            wrapper.setProps({isPrimary: false});
            expect(wrapper.find('button.btnOrdAcc.secondary')).toHaveLength(1);
        });

        it('should call onClick function on button action', () => {
            const spy = jest.spyOn(mountedProps, "handleAction");
            mountWrapper = mount(<Button {...mountedProps} />);
            mountWrapper.find("button.btnOrdAcc.primary").simulate("click");
            expect(spy).toHaveBeenCalled();
            spy.mockReset();
            spy.mockRestore();
        });
    }
);