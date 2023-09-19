import './Tooltip.css';
function Tooltip  ( {  children, position} ){
   
    return(
        <div className="tooltip-container">
        {children}
        <div className={`tooltiptext  tooltip-${position}`}>
          
          Thanks for hovering! I'm a tooltip
         
        </div>
      </div>
        
    )
}
export default Tooltip;