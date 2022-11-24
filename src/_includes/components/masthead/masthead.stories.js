import {createMasthead} from './masthead';

export default {
	title: 'Masthead',

	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		title: { control: 'text' },
	},
    args: {
        //👇 Now all Button stories will be primary.
        title: 'University of Saford Design System',
    },
};

const Template = ({ label, ...args }) => {
	return createMasthead({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'Some other title'
};
