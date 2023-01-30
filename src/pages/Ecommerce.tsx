import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, PieChart, Button, SparkLine } from "../components/Index";
import {
	earningData,
	SparklineAreaData,
	ecomPieChartData,
} from "../data/Dummy";
import { useStateContext } from "../contexts/ContextProvider";

type Props = {};

const Ecommerce = (props: Props) => {
	return (
		<div className="mt-12 ">
			<div className="flex flex-wrap lg:flex-nowrap justify-center">
				<div className="bg-white dark:text-gray-200 dar:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-hero-pattern bg-no-repeat bg-cover bg-center">
					<div className="flex justify-between items-center">
						<div>
							<p className="font-bold text-gray-400">Earnings</p>
							<p className="text-2xl">$83,448.78</p>
						</div>
					</div>
					<div className="mt-6">
						<Button
							color="white"
							size="md"
							bgColor="blue"
							text="Download"
							borderRadius="10px"
						/>
					</div>
				</div>
				<div className="flex m-3 flex-wrap justify-center gap-2 items-center">
					{earningData.map((item) => (
						<div
							key={item.title}
							className="bg-white dark:text-gray-200 p-4 pt-9 dark:bg-secondary-dark-bg md:w-56 rounded-2xl">
							<button
								type="button"
								style={{
									color: item.iconColor,
									backgroundColor: item.iconBg,
								}}
								className="text-2xl opacity-0.9 p-4 rounded-full hover:drop-shadow-lg transition duration-200">
								{item.icon}
							</button>
							<p className="mt-3 ">
								<span className="text-lg font-semibold">{item.amount}</span>
								<span className={`text-sm text-${item.pcColor} ml-2`}>
									{item.percentage}
								</span>
								<p className="text-sm text-gray-400 mt-1">{item.title}</p>
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-10 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Revenue Updates</p>
						<div className="flex items-center gap-4">
							<p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-lg transition">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Expense</span>
							</p>
							<p className="flex items-center gap-2 text-green-400 hover:drop-shadow-lg transition">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div className="mt-10 flex gap-10 flex-wrap justify-center">
						<div className="border-color border-r-1 m-4 pr-10">
							<div className="flex flex-col gap-1 justify-center items-start">
								<p className="flex items-center justify-center gap-2">
									<span className="text-3xl font-semibold ">$93,438</span>
									<span className="p-1.5 text-white hover:drop-shadow-lg rounded-full transition cursor-pointer bg-green-400 text-xs">
										23%
									</span>
								</p>
								<p className="text-gray-500">Budget</p>
							</div>
							<div className="flex flex-col gap-1 justify-center items-start">
								<p className="flex items-center justify-start gap-2">
									<span className="text-3xl font-semibold ">$48,487</span>
								</p>
								<p className="text-gray-500">Expense</p>
							</div>
							<div className="mt-5">
								<SparkLine
									currentColor="blue"
									id="line-sparkline"
									type="Line"
									height="80px"
									width="250px"
									data={SparklineAreaData}
									color="blue"
								/>
							</div>
							<div className="mt-10">
								<Button
									color="white"
									bgColor="blue"
									size="md"
									text="Download Report"
									borderRadius="10px"
								/>
							</div>
						</div>
						<div>
							<Stacked width="360px" height="360px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecommerce;
