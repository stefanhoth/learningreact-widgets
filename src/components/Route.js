const Route = ({route, component}) => {
    
    if(window.location.pathname === route){
        return component;
    }
    
    return null;
};

export default Route;
