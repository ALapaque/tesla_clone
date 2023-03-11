import Container from "./ui/Container";
import Section from "./Section";

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
		</Container>
	)
}