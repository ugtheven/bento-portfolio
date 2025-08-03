import React from "react";

interface HelloWorldProps {
  name?: string;
}

export default function HelloWorld({ name = "Monde" }: HelloWorldProps) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Bonjour, {name} ! 👋
      </h1>
      <p className="text-gray-600">
        Bienvenue dans votre portfolio Astro + React + Tailwind + shadcn/ui
      </p>
    </div>
  );
}
