import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

async function loadEvents() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		// return { isError: true, message: "Could not fetch events" };
		// throw Response(JSON.stringify({ message: "Could not fetch events" }), {
		// 	status: 500,
		// });
		throw json({ message: "Could not fetch events." }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
	}
}

function EventsPage() {
	const data = useLoaderData();
	// if (data.isError) {
	// 	return <div>{data.message}</div>;
	// }
	return (
		<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
			<Await resolve={data.events}>
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);
}
export const loader = () => {
	return defer({ events: loadEvents() });
};

export default EventsPage;
