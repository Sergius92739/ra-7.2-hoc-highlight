import PropTypes from 'prop-types';

export default function Article({ title, views }) {
  return (
    <div className="item item-article">
      <h3><a href='https://www.google.com/' target="blank">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  )
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}
