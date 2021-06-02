import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';
import CollectionPreview from  '../../Components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collections : SHOP_DATA
		}
	}
	render() {
		return(
			<div className=''>{
				this.state.collections.map( ({ id, ...otherCollectionProps }) =>(
					<CollectionPreview key={ id } { ...otherCollectionProps }/>
				)
				)}
				<h1 > </h1>
			</div>
		);
	}
}

export default ShopPage;