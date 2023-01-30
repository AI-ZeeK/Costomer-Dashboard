import React from "react";
import { ordersData, contextMenuItems, ordersGrid } from "../data/Dummy";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Inject,
	Resize,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Sort,
	ContextMenu,
	Filter,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components/Index";

interface OrderProps {}

const Orders = ({}: OrderProps) => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header title={"Orders"} category={"Page"} />
			<GridComponent>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
			</GridComponent>
		</div>
	);
};

export default Orders;
