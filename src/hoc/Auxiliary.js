const Aux = ({...props}) => { 
    return(
        <div {...props}>
        {props.children}
        </div>
    )
}

export default Aux;

