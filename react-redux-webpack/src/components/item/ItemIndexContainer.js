import { connect } from 'react-redux';
import ItemIndex from './ItemIndex';
import { fetchItems } from '../../store/items/actions';

const mapStateToProps = state => ( 
    {
      items: state.todos
    }
)

const mapDispatchToProps = dispatch =>  (
    {
      fetchItem: () => dispatch(fetchItems())
    }
  )


export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);