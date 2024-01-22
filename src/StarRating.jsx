const containerStyle = {display : 'flex', gap: '1rem', alignItems: 'center'}
const textStyle = { margin: 0 }
const starContainerStyle = {
  display: 'flex',
  gap:'0.25rem',
  margin: 0,
  padding: 0,
  listStyle: 'none'
};

const StarRating = ({ maxRating = 5 }) => {
  return (
     <div style={containerStyle}>
       <ul style={starContainerStyle}>
        {Array.from({length: maxRating }, (_, i) => <li key={i}>{i + 1}</li>)}
       </ul>
       <p style={textStyle}>{maxRating}</p>
     </div>
    );
}

export {StarRating};
