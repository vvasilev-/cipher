/**
 * The external dependencies.
 */
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';

/**
 * The internal dependencies.
 */
import TheFooter from 'components/the-footer';

describe('TheFooter', () => {
	it('should render properly', async () => {
		const wrapper = shallow(TheFooter);
		const renderer = createRenderer();
		const result = await renderer.renderToString(wrapper.vm);

		expect(result).toMatchSnapshot();
	});
});
