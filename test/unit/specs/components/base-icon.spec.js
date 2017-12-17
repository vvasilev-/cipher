/**
 * The external dependencies.
 */
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';

/**
 * The internal dependencies.
 */
import BaseIcon from 'components/base-icon';

describe('BaseIcon', () => {
	let wrapper, renderer;

	beforeEach(() => {
		wrapper = shallow(BaseIcon, {
			propsData: {
				name: 'github'
			}
		});

		renderer = createRenderer();
	});

	it('should render properly', async () => {
		const result = await renderer.renderToString(wrapper.vm);

		expect(result).toMatchSnapshot();
	});

	it('should accept a `width` property', async () => {
		wrapper.setProps({
			width: 'w2'
		});

		const result = await renderer.renderToString(wrapper.vm);

		expect(result).toMatchSnapshot();
	});

	it('should accept a `height` property', async () => {
		wrapper.setProps({
			height: 'h2'
		});

		const result = await renderer.renderToString(wrapper.vm);

		expect(result).toMatchSnapshot();
	});

	it('should accept a `padding` property', async () => {
		wrapper.setProps({
			padding: 'pa2'
		});

		const result = await renderer.renderToString(wrapper.vm);

		expect(result).toMatchSnapshot();
	});
});
