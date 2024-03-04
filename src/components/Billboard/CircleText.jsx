import CircleType from 'circletype';

const CircleText = () => {
    // Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById('myElement'));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(200).dir(-1);

// Provide your own splitter function to handle emojis
// @see https://github.com/orling/grapheme-splitter
const splitter = new GraphemeSplitter()
new CircleType(
  document.getElementById('myElement'),
  splitter.splitGraphemes.bind(splitter)
);
  return (
    <div>CircleText</div>
  )
}

export default CircleText