import React from "react";
import {
	SparklineComponent,
	Inject,
	SparklineTooltip,
	LineSeries,
} from "@syncfusion/ej2-react-charts";

interface SparklineProps {
	currentColor: string;
	id: string;
	type: any;
	height: string;
	width: string;
	data: any;
	color: string;
}

const SparkLine = ({
	currentColor,
	id,
	type,
	height,
	width,
	data,
	color,
}: SparklineProps) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType="Numeric"
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName="x"
			yName="y"
			type={type}
			tooltipSettings={{
				visible: true,
				format: "${x} : data ${y}",
				trackLineSettings: {
					visible: true,
				},
			}}>
			<Inject services={[SparklineTooltip,LineSeries ]} />
		</SparklineComponent>
	);
};

export default SparkLine;
