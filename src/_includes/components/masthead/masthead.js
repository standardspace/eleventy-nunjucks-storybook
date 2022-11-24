import './masthead.css';
import renderMasthead from './masthead.njk'

/**
 * @param {Object} args
 * @param {string} args.title
 * @param {boolean} [args.primary]
 * @param {string} [args.size="medium"]
 */
export const createMasthead = (args = {}) =>
{
	args.size = args.size || "medium";

	// Setting a `storybookArgs` context variable causes the render() macro to
	// be called automatically 📕
	return renderMasthead({
		storybookArgs: args
	});
};
