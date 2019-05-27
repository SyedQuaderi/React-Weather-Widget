import Weather from './Weather';
import Form  from './Form'
 class ContainerRow extends React.Component {
 render(){
    return (
        <div className='rowC'>
            <Weather />
            <Form />
        </div>
    );
    }
 }