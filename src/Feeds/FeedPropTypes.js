import PropTypes from 'prop-types';

export default {
  title: PropTypes.string,
  pubDate: PropTypes.string,
  link: PropTypes.string,
  guid: PropTypes.string,
  author: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  enclosure: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.string),
};
