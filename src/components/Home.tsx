import Container from "./ui/Container";
import Section from "./Section";
import DownArrow from "./ui/DownArrow";

export default function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for TouchLess Delivery"
				backgroundImage="images/model-s.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
				/>
			<Section
				title="Model 3"
				description="Order Online for TouchLess Delivery"
				backgroundImage="images/model-3.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for TouchLess Delivery"
				backgroundImage="images/model-x.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for TouchLess Delivery"
				backgroundImage="images/model-y.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Solar panels"
				description="Order Online for TouchLess Delivery"
				backgroundImage="images/solar-panel.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Accessories"
				backgroundImage="images/accessories.jpg"
				leftButtonText="Shop Now"
			/>

			<DownArrow src="/images/down-arrow.svg"/>
		</Container>
	)
}