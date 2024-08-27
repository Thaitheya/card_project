import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck as faThinCheck, faXmark as faThinXmark } from '@fortawesome/free-solid-svg-icons';

export default function Card({ version }) {
  return (
    <>
      {version.map((item) => (
        <div className="card-shade" key={item.id}>
          <h2 className='member'>{item.member}</h2>
          <div className="price"><strong>{item.subsription}</strong></div>
          <div className="horizontal-line"></div>
          {item.features.map((feature, index) => (
            <div key={index} className="make-order">
              <div style={{ color: (item.id === 1 || item.id === 2 || item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon icon={feature.UserType ? faThinCheck : faThinXmark} /> 
                {feature.UserType || "Not Available"}
              </div>
              <div style={{ color: (item.id === 1 || item.id === 2 || item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon icon={feature.Storage ? faThinCheck : faThinXmark} /> 
                {feature.Storage || "Not Available"}
              </div>
              <div style={{ color: (item.id === 1 || item.id === 2 || item.id === 3) ? 'black' : 'grey' }}> 
                <FontAwesomeIcon icon={feature.Public_Project ? faThinCheck : faThinXmark} /> 
                {feature.Public_Project || "Not Available"}
              </div>
              <div style={{ color: (item.id === 1 || item.id === 2 || item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon icon={feature.Community ? faThinCheck : faThinXmark} /> 
                {feature.Community || "Not Available"}
              </div>
              <div style={{ color: (item.id === 2 || item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon icon={(item.id === 1) ? faThinXmark : (item.id === 3 || item.id === 2? faThinCheck : faThinXmark)}  /> 
                {feature.Private_Project || "Not Available"}
              </div>
              <div style={{ color: (item.id === 2 || item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon icon={(item.id === 1) ? faThinXmark : (item.id === 3 || item.id === 2 ? faThinCheck : faThinXmark)} /> 
                {feature.Support || "Not Available"}
              </div>
              <div style={{ color: (item.id === 2 || item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon icon={(item.id === 1) ? faThinXmark : (item.id === 3 || item.id === 2 ? faThinCheck : faThinXmark)} /> 
                {feature.Domain || "Not Available"}
              </div>
              <div  style={{ color: (item.id === 3) ? 'black' : 'grey' }}>
                <FontAwesomeIcon 
                  icon={(item.id === 1 || item.id === 2) ? faThinXmark : (item.id === 3 ? faThinCheck : faThinXmark)} 
                />
                {feature.Report || "Not Available"}
              </div>

            </div>
          ))}
          <button className='btn'>Check Out</button>
        </div>
      ))}
    </>
  );
}

Card.propTypes = {
  version: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      member: PropTypes.string.isRequired,
      subsription: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          UserType: PropTypes.string.isRequired,
          Storage: PropTypes.string,
          Public_Project: PropTypes.string,
          Community: PropTypes.string,
          Private_Project: PropTypes.string.isRequired,
          Support: PropTypes.string,
          Domain: PropTypes.string,
          Report: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};
