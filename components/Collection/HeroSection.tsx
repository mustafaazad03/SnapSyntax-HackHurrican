"use client";
import React from "react";
import Image from "next/image";
import PopupToCreate from "./PopupToCreate";
import { useSession } from "next-auth/react";

interface collectionHero {
	title: string;
	image: string;
	textcolor?: string;
}

const HeroSection = ({
	title,
	image,
	textcolor = "text-white",
}: collectionHero) => {
	const session = useSession();
	return (
		<div className="mx-auto max-w-7xl xl:w-full w-[90%] pt-20 pb-12">
			<section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
				<Image
					src={image}
					width={1000}
					height={1000}
					loading="lazy"
					alt={title}
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>

				<div className="absolute inset-0 bg-almost-black mix-blend-multiply"></div>

				<div
					className={`relative flex flex-col items-center p-4 ${textcolor} sm:max-w-4xl`}
				>
					<p className="mb-4 text-center text-lg  sm:text-xl font-medium md:mb-6">
						Collection
					</p>
					<h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
						{title}
					</h1>
					{session.data?.user ? (
						<PopupToCreate />
					) : (
						<button
							onClick={() =>
								alert("You need to be logged in to create a collection")
							}
							className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
						>
							Create Collection
						</button>
					)}
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
