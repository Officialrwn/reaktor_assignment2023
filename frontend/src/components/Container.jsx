import Pilot from './Pilot.jsx'

const Container = () => {
	return (
<div class="inline-flex h-screen w-1/2">
	<div class="w-full h-full flex flex-col">
		<div class="bg-white text-sm text-gray-500 font-bold pl-4 py-2 shadow border-b border-gray-300">
				List of NDZ Violations past 10 min
		</div>
		<div class="w-full h-full overflow-auto shadow bg-white" id="journal-scroll">
			<table class="w-full">
				<tbody class="">
					<tr class="relative transform scale-100 w-1 text-xs py-1 border-b-2 border-blue-100 cursor-default bg-blue-500 bg-opacity-25">
						<td class="pl-5 whitespace-no-wrap w-16">
							<div class="text-gray-400">Time</div>
							<div>07:45</div>
						</td>
						<td class="px-2 py-2 whitespace-no-wrap">
							<div class="leading-5 text-gray-500 font-medium">Taylor Otwel</div>
							<div class="leading-5 text-gray-800">taylor@example.net</div>
						</td>
						<td class="px-2 py-2 whitespace-no-wrap">
							<div class="leading-5 pr-5 text-right text-red-500 font-medium">Distance: 51.50m</div>
							<div class="leading-5 pr-5 text-right text-gray-800">+3581234141</div>
						</td>
					</tr>
					<tr class="relative transform scale-100 w-1 text-xs py-1 border-b-2 border-blue-100 cursor-default bg-blue-500 bg-opacity-25">
						<td class="pl-5 whitespace-no-wrap">
							<div class="text-gray-400">Today</div>
							<div>07:45</div>
						</td>
						<td class="px-2 py-2 whitespace-no-wrap">
							<div class="leading-5 text-gray-500 font-medium">Taylor Otwel</div>
							<div class="leading-5 text-gray-800">taylor@example.net</div>
						</td>
						<td class="px-2 py-2 whitespace-no-wrap">
							<div class="leading-5 pr-5 text-right text-red-500 font-medium">Distance: 51.50m</div>
							<div class="leading-5 pr-5 text-right text-gray-800">+3581234141</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
	)
}

export default Container