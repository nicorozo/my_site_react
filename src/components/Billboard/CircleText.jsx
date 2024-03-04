import ReactCurvedText from 'react-curved-text';

const CircleText = ({text}) => {

  return (
    <ReactCurvedText width={300}
      height={300}
      cx='163'
      cy='163'
      rx={100}
      ry={100}
      startOffset='0'
      reversed={true}
      text={text}
      textProps={{"style": {"fontSize": "28px","fontWeight":"500", 'fill':'var(--green-button)'}}}
      textPathProps={null}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
       />
      
  )
}

export default CircleText