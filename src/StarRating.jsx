const containerStyle = {display : 'flex', gap: '1rem', alignItems: 'center'}
const textStyle = { margin: 0 }
const starContainerStyle = {
  display: 'flex',
  gap:'0.25rem',
  margin: 0,
  padding: 0,
  listStyle: 'none'
};

const starStyle = { width: '3rem', height: '3rem', display: 'block', cusor: 'pointer'};

const Star = () => (
  <li style={starStyle}>
     <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#000"
          stroke="#000"> 
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
  </li>
)

const StarRating = ({ maxRating = 5 }) => {
  return (
     <div style={containerStyle}>
       <ul style={starContainerStyle}>
        {Array.from({length: maxRating }, (_, i) => <Star key={i} />)}
       </ul>
       <p style={textStyle}>{maxRating}</p>
     </div>
    );
}

export {StarRating};
