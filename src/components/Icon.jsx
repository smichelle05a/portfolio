import icons from '../data/icons.json'

function Icon({props}) {

  return (
    <>
      <svg viewBox={icons[props].box} stroke='currentColor' fill={icons[props].fill ? icons[props].fill : "currentColor"} strokeWidth={icons[props].fill ? "2" : "0"} width="1em" height="1em">
        <path d={icons[props].path}/>
      </svg>
    </>
  );
}

export default Icon;
