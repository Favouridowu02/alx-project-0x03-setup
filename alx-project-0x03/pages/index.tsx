import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

interface PageRouteProps {
	pageRoute: string;
}

export default function Home() {
	const router = useRouter();

	const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
		router.push(pageRoute, undefined, { shallow: false})
	}

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">

		</div>
	)
};