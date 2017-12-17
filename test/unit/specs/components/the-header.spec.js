/**
 * The external dependencies.
 */
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';

/**
 * The internal dependencies.
 */
import TheHeader from 'components/the-header';

describe('TheHeader', () => {
	it('should render properly', async () => {
		const wrapper = shallow(TheHeader);
		const renderer = createRenderer();
		const result = await renderer.renderToString(wrapper.vm);

		expect(result).toMatchSnapshot();
	});
});
