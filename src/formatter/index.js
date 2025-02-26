import stylishView from './stylish.js';
import plainView from './plain.js';
import jsonView from './json.js';

const outputViews = (data, format) => {
  switch (true) {
    case format === 'plain':
      return plainView(data);
    case format === 'json':
      return jsonView(data);
    case format === 'stylish':
      return stylishView(data);
    default:
      throw new Error('specified fromat doesn\'nt support');
  }
};
export default outputViews;
